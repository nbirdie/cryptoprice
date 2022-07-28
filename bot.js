import {fetchCryptoRateByName} from "./bot_skills.js"
import settings from "./settings.js"
import express from "express"
import axios from "axios"
import path from "path"
import dotenv from "dotenv"
import { Telegraf } from "telegraf"

const expressApp = express();
expressApp.use(express.static("static"));
expressApp.use(express.json());
dotenv.config();

const bot = new Telegraf(settings.BOT_TOKEN);
expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//функция для создания url для выгрузки цены криптовалютыcre
const createUrl = (crypto, currency) => {
  return `${settings.API_ROUTES.priceByID}?ids=${crypto}&vs_currencies=${currency}`;
};

//приветствие
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    settings.BOT_MESSAGES.start,
    {}
  );
});

bot.on("message", (msg) => {
  let rate;
  // let crypto = msg.message.text.slice(1, msg.message.text.length);
  let crypto = msg.message.text.toLowerCase();
  if (crypto === "/list") {
  }
  
  axios.get(createUrl(crypto, "usd")).then((response) => {
    rate = response.data[crypto];
    if (rate != undefined) {
      const message = `The ${crypto} price is ${rate.usd}USD`;
      bot.telegram.sendMessage(msg.chat.id, message, {});
    } else {
      bot.telegram.sendMessage(
        msg.chat.id,
        settings.BOT_MESSAGES.errors.crypto_by_id,
        {}
      );
    }
  });
});

bot.launch();
