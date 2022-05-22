import {Request, Response} from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';


class AuthenticateUserController {
    async handle(req:Request, res:Response) {

        const { code } = req.body;
        const service = new AuthenticateUserService()
        const result = service.execute(code);

        try {
            return res.json(result);
        }catch(err) {
            return res.json({error: err.message || 'Unexpected error'});
        }

    }
}

export { AuthenticateUserController }