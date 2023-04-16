const express = require('express');
const { 

    createArtist,
    readArtist,
    getArtistById, 
    updateArtist,
    deleteArtist,
} = 
require('../controllers/artist');


const router = express.Router();

router.post('/', createArtist);

router.get('/', readArtist);

router.get('/:id', getArtistById);

router.patch('/:id', updateArtist);

router.delete('/:id', deleteArtist);


module.exports = router;