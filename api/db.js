import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0377659445Tu",
    database:"blog",
    port: 3307
})