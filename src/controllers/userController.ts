import { Request, Response } from 'express';
import User from '../models/userSchema';

export default class UserController {
    createUser = async (req: Request, res: Response) => {
        try {
            await User.create(req.body);
            res.status(200).json({ message: 'Usuario criado com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário!' });
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const response = await User.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(200).json({ message: 'Falha ao pegar todos usuarios!' });
        }
    }

    getOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const response = await User.findById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(200).json({ message: 'Erro ao encontrar usuário!' });
        }
    }

    updateOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                res.status(400).json({ message: 'Erro ao encontrar usuário!' });
            }
            await user?.updateOne(req.body);
            res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar usuário!' });
        }
    }

    deleteOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: 'Usuário deletado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar usuário!' });
        }
    }
}