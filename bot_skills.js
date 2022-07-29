import settings from "./settings.js";
import axios from "axios"

const botMessageSender = (message) => {
    bot.telegram.sendMessage(
              msg.chat.id,
              message,
              {}
            );
}

export const fetchCryptoRateByName = (crypto, currency) => {

    const response = axios.get(
      `${settings.API_ROUTES.priceByID}?ids=${crypto}&vs_currencies=${currency}`
    ).then((response) => {
        let rate;
        rate = response.data[crypto];
        const message = `The ${crypto} price is ${rate.usd}USD`;
        return message;
    })
}
 

// axios.get(createUrl(crypto, "usd")).then((response) => {
//   rate = response.data[crypto];
//   if (rate != undefined) {
//     const message = `The ${crypto} price is ${rate.usd}USD`;
//     bot.telegram.sendMessage(msg.chat.id, message, {});
//   } else {
//     bot.telegram.sendMessage(
//       msg.chat.id,
//       settings.BOT_MESSAGES.errors.crypto_by_id,
//       {}
//     );
//   }
// });
