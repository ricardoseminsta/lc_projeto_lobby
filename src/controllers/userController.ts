import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcrypt'

export const newUser = (req: Request, res: Response) => {
    res.render('pages/user/newUser');
}

export const postUser = async (req: Request, res: Response) => {
    let email: string  = req.body.email;
    let password: string = req.body.password;
    const hasUser = await User.findOne({ where: { email }});

    if(!hasUser) {
        const hash = bcrypt.hashSync(password, 10);
        const newUser = User.build({
            email,
            password: hash
            
        })
        console.log(email, password, hash);
        
        await newUser.save();
    }
    res.redirect('/user/list')
}

export const listUser = async (req: Request, res: Response) => {
    const list = await User.findAll({ order: ['id'] });    

    res.render('pages/user/listUser', { list })
}