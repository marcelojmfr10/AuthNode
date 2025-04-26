
/**
 * Por si alguien le interesa, instalas ese paquete de forma global y te actualiza las dependencia del package.json a las versiones actuales.

npm install -g npm-check-updates
Dentro del proyecto, corremos el comando: ncu

Te muestra las deependecias desactualizadas
luego, en la terminal del proyecto corres el comando : ncu -u
Con eso actualiza a las nuevas versiones de las dependencias.
 */

import { Request, Response } from "express";



export class AuthController {
    constructor() {

    }

    registerUser = (req: Request, res: Response) => {
        res.json('registerUser');
    }

    loginUser = (req: Request, res: Response) => {
        res.json('loginUser');
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail');
    }

}