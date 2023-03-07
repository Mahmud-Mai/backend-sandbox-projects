const { Query } = require("mongoose")
const Product = require("../models/product")

const getAllProductsStatic = async (req, res) => {
 const products = await Product.find({})
  .select("name price")
  .limit(10)
  .sort("name")
  .skip(1)

 res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
 const { featured, company, name, sort, fields } = req.query
 const queryObject = {}
 if (featured) {
  queryObject.featured = featured === "true" ? true : false
 }
 if (company) {
  queryObject.company = company
 }
 if (name) {
  queryObject.name = { $regex: name, $options: "i" }
 }

 // console.log Query Obj
 console.log(queryObject)
 let result = Product.find(queryObject)
 if (sort) {
  const sortList = sort.split(",").join(" ")
  result = result.sortList
 } else {
  result = result.sort("createdAt")
 }
 if (fields) {
  const fieldsList = fields.spit(",").join(" ")
  result = result.select(fieldsList)
 }
 const page = Number(req.query.page) || 1
 const limit = Number(req.query.limit) || 10
 const skip = (page -1) * limit  || 1

 result = result.skip(skip).limit(limit)

 const products = await result
 res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
 getAllProducts,
 getAllProductsStatic,
}
