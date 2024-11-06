require('dotenv').config();
const reporteRepository = require('../repositories/reporteRepository');

exports.saveReporte = async (reporte) => {
    console.log('se esta guardando el reporte en serivce')
    try {
        const resultado = await reporteRepository.saveReporte(reporte);
        console.log("Reporte guardado");
        return resultado;
    } catch (error) {
        console.error("Error al crear el reporte:", error);
        throw error;
    }
};

exports.getReporteEnvio = async (idCampana) => {
    try {
        const data = await reporteRepository.getReporteEnvio(idCampana);
        return data;
    } catch (error) {
        console.error("Error al obtener el reporte de envío:", error);
        throw new Error(error.message);
    }
};