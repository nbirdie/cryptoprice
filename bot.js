// import Telegraf from "telegraf"
// import BOT_TOKEN from "./settings.js"

const BOT_TOKEN = "5490133596:AAHPuLc6R9-ccnq2saViXI5_EDO1rS_t12Y"
// const cryptoList = [
//     'BTC',
//     'ETH',
//     'XRP',
//     'LTC',
//     'XLM'
// ]

// const { Telegraf } = require('telegraf')
// const CoinGecko = require('coingecko-api');
// const bot = new Telegraf(BOT_TOKEN) //сюда помещается токен, который дал botFather
// // const CoinGeckoClient = new CoinGecko();
// const fetch = require("node-fetch")




// bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
// // bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
// // bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
// bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"



// bot.hears('BTC', (ctx) => ctx.reply('BTC'))
// bot.launch() // запуск бота

const express = require('express')
const expressApp = express()
const axios = require("axios");
const path = require("path")
const port = process.env.PORT || 3000;
expressApp.use(express.static('static'))
expressApp.use(express.json());
require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(BOT_TOKEN);

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Code Capsules telegram bot.\nI respond to /ethereum. Please try it', {
    })
  })
  
  bot.command('ethereum', ctx => {
    var rate;
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.ethereum
      const message = `Hello, today the ethereum price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
  })

  bot.command('bitcoin', ctx => {
    var rate;
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.bitcoin
      const message = `Hello, today the bitcoin price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
  })

bot.launch()