'use-strict'

const express = require('express');
const {upload} = require('../helpers/image_helper');
const {uploadItem,getAllItem} = require('../controllers/fileuploadController');
const router = express.Router();


router.post('/addItem', upload.single('file'), uploadItem);
router.get('/getFiles', getAllItem);


module.exports = {
    routes: router
}