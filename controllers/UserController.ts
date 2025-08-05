import { Request,Response } from "express";
import {User} from "../entities/User";
import {AppDataSource} from '../modules/database';

// get records
export const getUsers = async (req: Request,res: Response) => {
    
    const userRepo = AppDataSource.getRepository(User);
    const allRecords = await userRepo.find();
    res.json(allRecords);
};

// delete record
export const deleteUser= async (req: Request,res: Response) => {
    const {id} = req.params;
    const userRepo = AppDataSource.getRepository(User);
    await userRepo.delete(id);
    res.send('Record Deleted');
};

// insert record
export const postUser= async(req: Request,res: Response) => {
    const userRepo = AppDataSource.getRepository(User);
    let user: User = new User();
    user = {...req.body};
    const userInserted = await userRepo.save(user);
    res.json(userInserted);
};

// update record
export const updateUser= async(req: Request,res: Response) => {
    const {firstName,lastName,email} =  req.body;
    const userRepo = AppDataSource.getRepository(User);
    await userRepo.update(Number(req.params.id), {firstName, lastName,email});
    res.send("Record Updated")
};

// get record
export const getUser= async(req: Request,res: Response) => {
    const userRepo = AppDataSource.getRepository(User);
    const record = await userRepo.findOne({where: {id: Number(req.params.id)}});
    res.json(record);
};