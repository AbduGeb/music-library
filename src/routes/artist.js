const express = require('express');
const createArtist = require('../controllers/artist');

const router = express.Router();

router.post('/', createArtist.createArtist);

module.exports = router;