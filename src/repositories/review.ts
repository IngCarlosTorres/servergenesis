import { getClient } from "../db/connect";
import { Review } from "interfaces/review";

export async function getReviews() {
  const client = getClient();
  try {
    await client.connect();
    const queryText =
      "SELECT * FROM review";
    const data = await client.query(queryText);
    console.log(data.rows)
    return data.rows;
  } catch (e) {
    throw e;
  } finally {
    await client.end();
  }
}


export async function save(review: Review) {
  const client = getClient();
  try {
    await client.connect();
    const queryText =
      "INSERT INTO review(score,name,profession,description) VALUES($1,$2,$3,$4)";
    await client.query(queryText, [
      review.score,
      review.name,
      review.profession,
      review.description,
    ]);
  } catch (e) {
    throw e;
  } finally {
    await client.end();
  }
}

export async function update(review: Review) {
  const client = getClient();
  try {
    await client.connect();
    const queryText =
      "UPDATE review set score=$1, name=$2, profession=$3, description=$4 where id=$5";
    await client.query(queryText, [
      review.score,
      review.name,
      review.profession,
      review.description,
      review.id,
    ]);
  } catch (e) {
    throw e;
  } finally {
    await client.end();
  }
}
