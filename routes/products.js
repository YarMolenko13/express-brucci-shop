// const express = require('express')
// const Product = require('./models/Products.js')

import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

router.get('/get', async (req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
   res.json(await Product.find())
})

router.post('/create', async (req, res) => {
   const product = new Product(req.body)
   await product.save()
   res.json({ state: 'success' })
})

router.delete('/delete', async (req, res) => {
   let params = req.query
   let msg = ''
   let countParams = Object.keys(params).length
   const allFields = await Product.find()

   if (countParams > 0) {
      if (params.what === 'all') {
         await Product.deleteMany()
      } else {
         try {
            const id = Number(params.what)
            const fields = []
            allFields.forEach((i) => fields.push(i))
            await Product.findByIdAndDelete(fields[id]._id)
            msg = `success`
         } catch (e) {
            msg = e.toString()
         }
      }
   } else {
      msg = 'unvalid request'
   }

   res.json({ query: msg })
})

export default router
