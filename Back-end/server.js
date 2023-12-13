import express from 'express'
import sequelize from './config/database.js'

const app = express()
app.use(express.json())

sequelize.sync().then(() => {
    console.log('Database synchronized successfully!')
})
.catch((error) => {
    console.log('Failed to synchronize the database!', error)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})