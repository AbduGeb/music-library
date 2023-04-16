const express = require('express');
const { createArtist, readArtist } = require('../controllers/artist');


const router = express.Router();

router.post('/', createArtist);

router.get('/', readArtist);


module.exports = router;