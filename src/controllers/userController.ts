import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcrypt'

export const newUser = (req: Request, res: Response) => {
    res.render('pages/user/newUser');
}

export const postUser = async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;
    const hasUser = await User.findOne({ where: { email } });

    if (!hasUser) {
        const hash = bcrypt.hashSync(password, 10);
        const newUser = User.build({
            email,
            password: hash
        })

        await newUser.save();


        //console.log(email, password, hash);


    }
    res.redirect('/user/list')
}

export const loginUser = async (req: Request, res: Response) => {
    res.render('pages/user/loginUser')
}

export const login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await User.findOne({ where: { email } });

        if (user && bcrypt.compareSync(password, user.password)) {
            console.log("logou controller", req.session);
            
            res.redirect("/user/list");

        } else {
            console.log('incorrect password');

            res.redirect("/user/login");

        }


    }
}

export const logout = (req: Request, res: Response) => {
    req.session.destroy(() => {
        console.log("sessão encerrada");
    });
    req.session.id = 'undefined';
    res.redirect('/');
}

export const listUser = async (req: Request, res: Response) => {
    const list = await User.findAll({ order: ['id'] });

    res.render('pages/user/listUser', { list })
}