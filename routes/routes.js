const express = require('express')
const router = express.Router()
router.get('/get-address', (req, res)=>{
    res.render('address', {
        users:10
    })
})



module.exports = router
