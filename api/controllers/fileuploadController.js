const Menu = require('../models/menuModel')

const uploadItem = async (req, res, next) => {
    try {
        const menu = await Menu.create({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            desc: req.body.desc,
            file: {
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: fileSizeFormatter(req.file.size, 2)
            }
        })
        res.status(201).json(menu)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllItem = async (req, res, next) => {
    try {
        const items = await Menu.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json(error)
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}


module.exports = {
    uploadItem,
    getAllItem
}