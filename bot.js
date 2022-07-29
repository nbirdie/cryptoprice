import { fetchCryptoRateByName } from "./bot_skills.js";
import settings from "./settings.js";
import axios from "axios";
import path from "path";
// import TelegramBot from 'node-telegram-bot-api'
import { Telegraf } from "telegraf";

// import { createRequire } from "module";
// import TelegramBot from "node-telegram-bot-api"
// const require = createRequire(import.meta.url);

const bot = new Telegraf(settings.BOT_TOKEN);

//приветствие
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, settings.BOT_MESSAGES.start, {});
});

bot.on("message", (msg) => {
  let rate;
  // let crypto = msg.message.text.slice(1, msg.message.text.length);
  let crypto = msg.message.text.toLowerCase();
  if (crypto.length === 3) {
    axios
      .get(`${settings.API_ROUTES.priceByTicker}/${crypto}/metrics`)
      .then((response) => {
        rate = response.data.data.market_data.price_usd;
        if (rate != undefined) {
          const message = `The ${crypto.toUpperCase()} price is ${Math.round(rate * 100)/100}USD`;
          bot.telegram.sendMessage(msg.chat.id, message, {});
        } else {
          bot.telegram.sendMessage(
            msg.chat.id,
            settings.BOT_MESSAGES.errors.crypto_by_id,
            {}
          );
        }
      });
  } else {
    const currency = "usd";
    axios
      .get(
        `${settings.API_ROUTES.priceByID}?ids=${crypto}&vs_currencies=${currency}`
      )
      .then((response) => {
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
  }
});


bot.launch();
