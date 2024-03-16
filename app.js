 var express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 
 var examen = express()
 .use(cors({credentials: true, origin: 'http://localhost:4200'
 }))
 .use(bodyParser.json())
 .use(bodyParser.urlencoded({ extended: true })); 
 
 //1
 examen.post('/registerusuario/:edad', function (req, res) {
    let departamento = req.query.departamento;
    let ciudad = req.query.ciudad;
    let edad = req.params.edad;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let direccion = req.body.direccion;
    let cabecera = req.header("Authorization");
  
    return res.status(200).json({"Status": "Registro ok", 
    cabecera: cabecera,nombres: nombres, ciudad: ciudad});
  });
  
 
 
 
 
 
 
 
 
  examen.listen(10101, function () {
    console.log('Example app listening on port 10101!');
  });
  



