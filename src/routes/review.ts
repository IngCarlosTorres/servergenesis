import express from "express";
import { Review } from "interfaces/review";
import { save, update, getReviews } from "../repositories/review";

const router = express.Router();

router.post("/", (_req, res) => {
  try {
    const body: Review = _req.body;
    save(body);
    res.send({ status: 200, message: "Exito al ingresar reseña" });
  } catch (error) {
    res.send({
      status: 500,
      message: "Ocurrio un error al insertar la reseña",
    });
  }
});

router.put("/", (_req, res) => {
  try {
    const body: Review = _req.body;
    update(body);
    res.send({ status: 200, message: "Exito al actualizar la reseña" });
  } catch (error) {
    res.send({
      status: 500,
      message: "Ocurrio un error al actualizar la reseña",
    });
  }
});

router.get("/", async (_req, res) => {
  try {
    const body: Review = _req.body;
    const reviews = await getReviews();
    res.send({ status: 200, data: reviews });
  } catch (error) {
    res.send({
      status: 500,
      message: "Ocurrio un error al actualizar la reseña",
    });
  }
});

export default router;
