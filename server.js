// const express = require('express')
// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const path = require('path')
// const products = require('./routes/products')

import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import products from './routes/products.js'

const _dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

const app = express()

mongoose
   .connect('mongodb+srv://mongo:mongo@cluster0.roihl.mongodb.net/mevn-brucci-shop', {
      useNewUrlParse: true,
   })
   .then((db) => console.log('[OK] DB is connected'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/api/products/', products)

app.listen(PORT)
