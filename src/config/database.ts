const {
  PGPORT,
  POSTGRES_DB,
  PGHOST,
  PGUSER,
  POSTGRES_PASSWORD
} = process.env;

export const dbConfig = {
  PGPORT: Number(PGPORT),
  POSTGRES_DB: POSTGRES_DB,
  PGHOST: PGHOST,
  PGUSER: PGUSER,
  POSTGRES_PASSWORD: POSTGRES_PASSWORD,
};