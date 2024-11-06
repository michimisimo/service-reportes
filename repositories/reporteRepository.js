const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.saveReporte = async (reporte) => {
    const { data, error } = await supabase
        .from('reporte')
        .insert([reporte]);

    if (error) throw new Error(error.message);
    return data;
};

exports.getReporteEnvio = async (idCampana) => {
    const { data, error } = await supabase
        .from('reporte')
        .select('*')
        .eq('id_campana', idCampana);

    if (error) throw new Error(error.message);

    return data;
};