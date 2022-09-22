import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import dotenv from 'dotenv';

dotenv.config();

export const Auth  = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        //fazer verificação de auth
        let success = false;
        console.log("SessionID Auth", req.session.id);
        
        if(req.session.id != undefined) {
            success = true;
        } else {
            console.log("sem session");
            res.redirect('/user/login');
        }
        
        
        if(success) {
            next();
        } else {
            res.status(403); //Not authorized
            //res.json({ error: "Not authorized" });
            res.redirect('/user/login');
        }

    }
}