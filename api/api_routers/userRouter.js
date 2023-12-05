import express from 'express'
import { user_registration } from '../api_controllers/user_controller.js'

const router = express.Router()

export default router.get('/', user_registration)
