import express from 'express';
import {Router} from 'express';
import {getUsers,postUser,getUser,deleteUser,updateUser} from '../controllers/UserController';

const router: Router = express.Router();

router.get('/', getUsers);
router.post('/', postUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;