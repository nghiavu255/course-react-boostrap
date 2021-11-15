require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const cors = require('cors')
// connect DB
const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nghia.zchpt.mongodb.net/mern?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		)
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()
app.use(express.json())
app.use(cors())
app.get('/', (req,res) => res.send('hello'))

app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)


const PORT =process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))