import { Router } from 'express';
import { deleteCategory, getCategories, getCategory, postCategory, putCategory } from '../../controllers/api/categories';

const router: Router = Router();

router.get('/', getCategories)
router.get('/:id', getCategory)
router.put('/:id', putCategory)
router.post('/', postCategory)
router.delete('/:id', deleteCategory)

export default router