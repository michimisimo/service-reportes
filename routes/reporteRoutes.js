const express = require('express');
const reporteController = require('../controllers/reporteController');

const router = express.Router();

router.get('/getReporteEnv/:idCampana', reporteController.getReporteEnvio);
router.post('/saveReporte', reporteController.saveReporte)

module.exports = router;