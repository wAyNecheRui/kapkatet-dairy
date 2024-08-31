const express = require('express');
const { getLivestock, addLivestock } = require('../controllers/livestockController');
const router = express.Router();

router.get('/', getLivestock);
router.post('/', addLivestock);

module.exports = router;
// Route for paginated livestock
router.get('/paginate', livestockController.getPaginatedLivestock);
