import express from 'express'
import { createProd, deleteProd, getAllProds, getProd, updateProd } from '../controllers/ProdControllers.js'
const router = express.Router()

router.get('/', getAllProds)
router.get('/:id',getProd)
router.post('/',createProd)
router.put('/:id', updateProd)
router.delete('/:id',deleteProd)

export default router