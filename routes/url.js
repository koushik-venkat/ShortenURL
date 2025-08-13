const express = require('express');
const router = express.Router();
const {handleGenerateNewShortURL, handleGetOriginalURL, getAllData, handleGetAnalytics} = require('../controller/url');

router.post('/', handleGenerateNewShortURL);

router.get('/all', getAllData);

router.get('/analytics/:id', handleGetAnalytics);

router.get('/:id', handleGetOriginalURL);

module.exports = router;