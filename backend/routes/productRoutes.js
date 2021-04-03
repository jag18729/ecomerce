import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  // deleteProduct,
  // createProduct,
  // updateProduct,
  // createProductReview,
  // getTopProducts,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect)
// router.route('/:id/reviews').post(protect)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router