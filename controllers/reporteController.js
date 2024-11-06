const reporteService = require('../services/reporteService');

exports.getReporteEnvio = async (req, res) => {
    const { idCampana } = req.params;
    try {
        const data = await reporteService.getReporteEnvio(idCampana);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.saveReporte = async (req, res) => {
    const reporte = req.body;

    try {
        const data = await reporteService.saveReporte(reporte);

        res.status(200).send({
            message: 'Reporte guardado exitosamente',
            reporte: data
        });
    } catch (error) {
        console.error('Error al guardar el reporte:', error);
        res.status(500).send({
            error: 'Hubo un error al guardar el reporte',
            details: error.message
        });
    }
};