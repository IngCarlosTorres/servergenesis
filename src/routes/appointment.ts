import express from 'express'
import { save } from '../repositories/appointment'
import { Appointment } from '../interfaces/appointment'

const router = express.Router()

router.post('/',(_req,res)=>{
  try {
    const body: Appointment = _req.body;
    save(body)
    res.send({status: 200, message:'Exito'})
  } catch (error) {
    res.send({status: 500, message: 'Ocurrio un error al insertar los dtaos'})
  }
})


export default router