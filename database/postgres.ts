import pgp from "pg-promise";
const initPgp = pgp();
const db = initPgp("postgresql://root:root@db:5432/postgres");
// const db = pgp("postgres://username:password@host:port/database");

//@ts-ignore
db.one("SELECT $1 AS value", 123)
  //@ts-ignore
  .then((data) => {
    console.log("DATA:", data.value);
  })
  //@ts-ignore
  .catch((error) => {
    console.log("ERROR:", error);
  });
