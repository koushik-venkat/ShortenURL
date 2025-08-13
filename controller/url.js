const shortId = require('shortid');
const URL = require('../model/url');

const handleGenerateNewShortURL = async(req, res) => {
    const body = req.body;
    if(!body || !body.url){
        return res.status(400).json({error: 'url is required'})
    }
    const shortIdValue = shortId.generate();
    await URL.create({
        shortId: shortIdValue,
        redirectURL: body.url,
        visitHistory: [],
    })

    return res.json({id: shortIdValue})
}

const handleGetOriginalURL = async(req, res) => {
    const shortIdValue = req.params.id;
    console.log(shortIdValue);
    if(!shortIdValue){
        return res.status(400).json({error: "Short Id is missing"});
    }

    const result = await URL.findOne({shortId: shortIdValue});
    if(!result){
        return res.status(400).json({error: "Short Id is not found"});
    }

    return res.json({url: result.redirectURL});
}

const handleGetAnalytics = async(req, res) => {
    const shortIdValue = req.params.id;

    const result = await URL.findOne({shortId: shortIdValue});

    return res.json({views: result.visitHistory.length, analytics: result.visitHistory});
}

const getAllData = async(req, res) => {
    const result = await URL.find({});
    return res.json({urls: result});
}

module.exports = {handleGenerateNewShortURL, handleGetOriginalURL, getAllData, handleGetAnalytics}