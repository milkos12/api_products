const express = require('express')
const Products = require('./../service/products.service')

const router = express.Router()
const products = new Products();

router.get('/',(req, res)=>{
  res.json(products)
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  const product = products.find(id);
  res.json(product);
})

router.patch('/:id', (req, res) =>{
  const { id } = req.params;
  const data = req.body;
  products.update(id, data)
  res.json({id,...data})
})

router.delete('/:id',(req, res) =>{
  const { id } = req.params
  products.delete(id);
  res.json({
    id,
    message: "delete success"
  })
});



module.exports = router;
