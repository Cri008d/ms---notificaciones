const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8082;

app.use(express.json());
app.use(cors());

// Ruta principal del microservicio
app.post('/api/notificaciones/enviar', (req, res) => {
    const { emailUsuario, tipoIncendio, latitud, longitud } = req.body;

    // Aquí va la lógica real (ej: usar Nodemailer para enviar un correo)
    console.log(`[ALERTA] Enviando notificación de incendio tipo '${tipoIncendio}' al usuario ${emailUsuario}`);
    console.log(`Ubicación: Lat ${latitud}, Lng ${longitud}`);

    res.status(200).json({
        mensaje: "Notificación procesada y enviada correctamente por el ms-notificaciones (Node.js)",
        estado: "EXITO"
    });
});

app.get('/api/notificaciones/estado', (req, res) => {
    res.status(200).json({ estado: "Microservicio de Notificaciones en línea (Node.js)" });
});

app.listen(PORT, () => {
    console.log(`Microservicio de Notificaciones (Node.js) corriendo en el puerto ${PORT}`);
});