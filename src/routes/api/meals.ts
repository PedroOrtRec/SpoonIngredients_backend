import { Router } from 'express';
import { deleteMeal, getMeal, getMealByCategory, getMeals, postMeal, putMeal } from '../../controllers/api/meals';

const router: Router = Router();

router.get('/', getMeals)
router.get('/:id', getMeal)
router.get('/category/:category', getMealByCategory)
router.put('/:id', putMeal)
router.post('/', postMeal)
router.delete('/:id', deleteMeal)

export default router