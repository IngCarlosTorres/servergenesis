import 'dotenv/config'
import express from 'express'
import appointmentRouter from './routes/appointment'
import reviewRouter from './routes/review'
import serveless from 'serverless-http'
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


const PORT = process.env.PORT || 4000

app.use('/api/appointments', appointmentRouter)
app.use('/api/reviews', reviewRouter)


app.listen(PORT, () => console.log(`server run in port ${PORT}`))

export default app
export const handler = serveless(app)