import { Router } from 'express';
import UserController from '../controllers/userController';

const userRoutes = Router();

const userController = new UserController;

userRoutes.post('/', (req, res) => {
    userController.createUser(req, res);
});
userRoutes.get('/', (req, res) => {
    userController.getAllUsers(req,res);
});
userRoutes.get('/:id', (req,res) => {
    userController.getOneUser(req,res);
});

userRoutes.patch('/:id', (req,res) => {
    userController.updateOneUser(req,res);
});
userRoutes.delete('/:id', (req,res) => {
    userController.deleteOneUser(req,res);
});
export default userRoutes;