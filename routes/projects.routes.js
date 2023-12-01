import { Router } from 'express'

import { get, create } from '../src/controllers/projects.controller.js'

const router = Router()

router.get('/', get) 
router.post('/', create) 
router.get('/:id') 
router.put('/:id') 
router.delete('/:id') 

export default router