import dotenv from "dotenv"
dotenv.config()

import { InfuraConnection } from "./infura_connect.js"

async function run() {
    try {
        const connection = new InfuraConnection()
        const res = await connection.GetBlockBalance('0x6635F83421Bf059cd8111f180f0727128685BaE4')
        console.log("Balance", res)
    } catch (err) {
        console.error("Error caught:", err)
    }
}

run().then()