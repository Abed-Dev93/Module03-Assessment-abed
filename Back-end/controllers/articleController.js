import db from "../models/index.js";

const { ArticleModel } = db

export const addArticle = async (req, res) => {
    try {
        const { image, title, category, body, author } = req.body
        if (!image || !title || !category || !body || !author)
            return res.status(400).send('All fields are required!')
        const newArticle = await ArticleModel.create({ image, title, category, body, author })
        newArticle ? res.status(200).json({ message: 'New Article Created!', data: newArticle }) :
            res.status(404).send('An Error Occured!')
    }
    catch(error) {
        console.log(error.message)
    }
}

export const getArticle = async (req, res) => {
    try {
        const articles = await ArticleModel.findAll()
        articles ? res.status(200).json({ message: 'Here Are The Articles:', data: articles }) :
            res.status(404).send('An Error Occured!')
    }
    catch(error) {
        console.log(error.message)
    }
}

export const getArticleById = async (req, res) => {
    try {
        const id = req.body.id
        const article = await ArticleModel.findOne({ where: { id: id } })
        article ? res.status(200).json({ message: `Article With ID ${id}`, data: article }) :
            res.status(404).send('An Error Occured Or ID Not Found!')
    }
    catch(error) {
        console.log(error.message)
    }
}

export const editArticle = async (req, res) => {
    try {
        const id = req.body.id
        const { image, title, category, body, author } = req.body
        if (!image || !title || !category || !body || !author)
            return res.status(400).send('All fields are required!')
        const article = await ArticleModel.findOne({ where: { id: id } })
        !article ? res.status(404).send('An Error Occured Or ID Not Found!') : 
            await ArticleModel.update({ image, title, category, body, author }, { where: { id: id } }) 
            && res.status(200).send(`Article With ID ${id} Has Been Updated Successfully!`)
    }
    catch(error) {
        console.log(error.message)
    }
}

export const removeArticle = async (req, res) => {
    try {
        const id = req.body.id
        const article = await ArticleModel.findOne({ where: { id: id } })
        !article ? res.status(404).send('An Error Occured Or ID Not Found!') : 
            await article.destroy()
            && res.status(200).send(`Article With ID ${id} Has Been deleted Successfully!`)
    }
    catch(error) {
        console.log(error.message)
    }
}