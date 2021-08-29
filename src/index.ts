import dotenv from "dotenv";
import {Client} from "revolt.js";

dotenv.config();

let client = new Client({
    apiURL: process.env.API_URL
})

client.on('ready', async () => {
    console.info(`Logged in as ${client.user!.username}`)
})

client.on('message', async message => {
    if (message.content === "ping") {
        return message.channel!.sendMessage('Pong!');
    }
})
client.loginBot(process.env.TOKEN!)