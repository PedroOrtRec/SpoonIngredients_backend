import { Router } from 'express';
import { deleteFood, getFood, getFoodByCategory, getFoods, postFood, putFood } from '../../controllers/api/foods';

const router: Router = Router();

router.get('/', getFoods)
router.get('/:id', getFood)
router.get('/category/:category', getFoodByCategory)
router.put('/:id', putFood)
router.post('/', postFood)
router.delete('/:id', deleteFood)

export default router