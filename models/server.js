const usuarios = require('../routes/user');

const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutesPath = '/api/usuarios';

        //Middleware
        this.middleware();

        //Rutas de mi app
        this.routes();
    }

    middleware(){
        this.app.use(cors());

        // Parse y lectura de body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosRoutesPath,usuarios);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http:localhost:${this.port}`)
        })
    }

}

module.exports = Server;