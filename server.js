const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/reporteRoutes');

const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/', usuarioRoutes);

app.listen(port, () => {
    console.log(`Service running on port ${port}`);
});