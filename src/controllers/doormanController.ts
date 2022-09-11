import { Request, Response } from 'express';
import { Doorman } from '../models/Doorman';

export const index = (req: Request, res: Response) => {
    res.render('pages/index')
}

export const newDoorman = (req: Request, res: Response) => {
    res.render('pages/doorman/newDoorman')
}

export const postDoorman = async (req: Request, res: Response) => {
    let name: string = req.body.name as string;
    let cpf: string  = req.body.cpf as string;
    let email: string = req.body.email as string;
    let bdate: Date = req.body.bdate as Date;
    

    if(email) {
        const newVisiter = Doorman.build({name, cpf, email, bdate});
        console.log(newVisiter);
        await newVisiter.save();
        
    }
   
    res.redirect('/visiter/list')
}

export const listDoorman = async (req: Request, res: Response) => {
    const list = await Doorman.findAll();    
    res.render('pages/visiter/listVisiter', {list})
}

export const doorman = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const visiter = await Doorman.findByPk(id);
    res.render('pages/visiter/updateVisiter', {visiter})
}

export const updateDoorman = async (req: Request, res: Response) => {
    let id: number = parseInt(req.body.id);
    let name: string = req.body.name as string;
    let cpf: string  = req.body.cpf as string;
    
    const visiter = await Doorman.findByPk(id);

    if(visiter){
        visiter.id = id;
        visiter.name = name;
        visiter.cpf = cpf;
        await visiter.save();
    }
    res.redirect('/visiter/list')
}

export const deleteDoorman = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    console.log("ID", id);
    
    await Doorman.destroy({  where: { id }})
    res.redirect('/visiter/list')
}

