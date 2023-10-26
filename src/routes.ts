import { Router } from 'express'
import authRoute from './auth/auth.route'
import categoryRoute from './category/category.route'
import productRoute from './product/product.route'
import cardRoute from './cart/cart.route'
import { errorHandler } from './common/error-handler'
import logger from './common/logger.middleware'

const router = Router()

router.use(logger)
router.use('/auth', authRoute)
router.use('/category', categoryRoute)
router.use('/product', productRoute)
router.use('/cart', cardRoute)
router.use(errorHandler)

export default router
