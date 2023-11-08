import fs from "fs";
import path from "path";
import { Connection } from "typeorm";

export async function initDb(con: Connection) {
  const ddl = fs
    .readFileSync(path.join(__dirname, "wayne_dashboard_ddl.sql"))
    .toString();

  await con.query(ddl);

  const data = fs
    .readFileSync(path.join(__dirname, "wayne_dashboard_data.sql"))
    .toString();

  await con.query(data);
}
