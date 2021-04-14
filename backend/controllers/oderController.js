import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
//@desc Create new order
//@route GET /api/orders
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    addOrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No orderItems!')
    return
  } else {
    const order = new Order({
      addOrderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })
    const createOrder = await order.save()
    res.status(201).json(createOrder)
  }
})
export { addOrderItems }