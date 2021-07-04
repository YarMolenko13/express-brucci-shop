// const mongoose = require('mongoose')

import mongoose from 'mongoose'

const { Schema } = mongoose

const Product = new Schema({
   title: String,
   price: Number,
   priceWithSale: Number,
   info: String,
   composition: String,
   category: String,
   imgPath: String,
})

export default mongoose.model('Product', Product)
