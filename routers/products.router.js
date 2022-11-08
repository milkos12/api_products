const express = require('express')

const router = express.Router()

router.get('/',(req, res)=>{
  res.json({'crack':232323})
});

module.exports = router;
