import pg from 'pg'
import 'dotenv/config'

const { Client } = pg
const client = new Client({
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASSWORD,
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})
await client.connect()
 
try {
   const res = await client.query('SELECT NOW() as now')
   console.log(res.rows[0].now)
} catch (err) {
   console.error(err);
} finally {
   await client.end()
}