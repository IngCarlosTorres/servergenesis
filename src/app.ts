import 'dotenv/config'
import express from 'express'
import appointmentRouter from './routes/appointment'
import reviewRouter from './routes/review'
import serveless from 'serverless-http'

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


const PORT = 4000

app.use('/api/appointments', appointmentRouter)
app.use('/api/reviews', reviewRouter)


app.listen(PORT, () => console.log(`server run in port ${PORT}`))

export default app
export const handler = serveless(app)