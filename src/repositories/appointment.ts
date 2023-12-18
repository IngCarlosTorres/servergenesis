import { Appointment } from "interfaces/appointment";
import { getClient } from "../db/connect";

export async function save(appointment: Appointment) {
  const client = getClient();
  try {
    await client.connect();
    const queryText =
      "INSERT INTO appointment(name,email,departament,time) VALUES($1,$2,$3,$4)";
    await client.query(queryText, [
      appointment.name,
      appointment.email,
      appointment.departament,
      appointment.time,
    ]);
  } catch (e) {
    throw e;
  } finally {
    await client.end();
  }
}
