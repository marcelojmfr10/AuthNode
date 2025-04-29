
/**
 * Por si alguien le interesa, instalas ese paquete de forma global y te actualiza las dependencia del package.json a las versiones actuales.

npm install -g npm-check-updates
Dentro del proyecto, corremos el comando: ncu

Te muestra las deependecias desactualizadas
luego, en la terminal del proyecto corres el comando : ncu -u
Con eso actualiza a las nuevas versiones de las dependencias.
 */

import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";



export class AuthController {
    constructor(
        public readonly authService: AuthService,
    ) {

    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.log(`${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }

    registerUser = (req: Request, res: Response) => {
        const [error, registerDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.authService.registerUser(registerDto!)
            .then((user) => res.json(user))
            .catch(error => this.handleError(error, res));

        // res.json(registerDto);
    }

    loginUser = (req: Request, res: Response) => {
        const [error, loginDto] = LoginUserDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.authService.loginUser(loginDto!)
            .then((user) => res.json(user))
            .catch(error => this.handleError(error, res));
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail');
    }

}