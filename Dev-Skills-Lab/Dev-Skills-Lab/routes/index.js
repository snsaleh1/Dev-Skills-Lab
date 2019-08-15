var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index); // this is the homepage 
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show); // imagine its skills/1 
router.get('/:id/edit', skillsCtrl.edit);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete); // DELETE : /1
router.put('/:id', skillsCtrl.update);

module.exports = router;
