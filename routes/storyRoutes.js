const express = require('express');
const controller = require('../controllers/storyController');
const router = express.Router();


router.get('/', controller.index);


//GET /stories/new: send html form for creating a new story

router.get('/new', controller.new);
    
//POST /stories: create a new story

router.post('/', controller.create);

//GET /stories/:id: send details of story identified by id

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);


router.put('/:id/edit', controller.update);

//DELETE

router.delete('/:id/edit', controller.delete);


module.exports = router;