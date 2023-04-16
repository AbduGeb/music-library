const express = require('express');
const { 
    
    createArtist,
    readArtist,
    getArtistById 
} = 
require('../controllers/artist');


const router = express.Router();

router.post('/', createArtist);

router.get('/', readArtist);

router.get('/:id', getArtistById);


module.exports = router;