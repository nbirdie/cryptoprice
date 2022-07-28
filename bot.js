const BOT_TOKEN = "5490133596:AAHPuLc6R9-ccnq2saViXI5_EDO1rS_t12Y";

const express = require("express");
const expressApp = express();
const axios = require("axios");
const path = require("path");
const port = process.env.PORT || 3000;
expressApp.use(express.static("static"));
expressApp.use(express.json());
require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(BOT_TOKEN);

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//функция для создания url для выгрузки цены криптовалютыcre
const createUrl = (crypto, currency) => {
  return `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;
};

//приветствие
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Hello there! Welcome to the CryptoCurrenciesPricesBot telegram bot.",
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
    const message = `The ${crypto} price is ${rate.usd}USD`;
    bot.telegram.sendMessage(msg.chat.id, message, {});
  });

});

bot.launch();
