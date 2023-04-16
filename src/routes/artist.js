const express = require('express');
const { 

    createArtist,
    readArtist,
    getArtistById, 
    updateArtist,
} = 
require('../controllers/artist');


const router = express.Router();

router.post('/', createArtist);

router.get('/', readArtist);

router.get('/:id', getArtistById);

router.patch('/:id', updateArtist)


module.exports = router;