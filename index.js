const express = require('express');
const app = express();
const PORT = 8000;
const urlRoute = require('./routes/url');
const connectDB = require('./DBConnect');
const URL = require('./model/url');

app.use(express.json());

app.get('/:shortId', async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId: shortId});
    
    await URL.updateOne({shortId: shortId}, {
        $push: {
            visitHistory: {
                timestamp: new Date().toISOString(),
            }
        }
    });
    res.redirect(entry.redirectURL);

    return res.json({msg: "Redirected successfully"})
})
app.use('/url', urlRoute);

connectDB("mongodb://127.0.0.1:27017/url-shortener").then(() => console.log("Connected"));

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
