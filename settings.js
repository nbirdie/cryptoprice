const ROOT_API_COINGESKO_ADDRESS = "https://api.coingecko.com/api";
const API_COINGESKO_VERSION = "v3";
const ROOT_API_MESSARI_ADDRESS = "https://data.messari.io/api";
const API_MESSARI_VERSION = "v1";
const settings = {
  BOT_TOKEN: "5490133596:AAHPuLc6R9-ccnq2saViXI5_EDO1rS_t12Y",
  API_ROUTES: {
    priceByID: `${ROOT_API_COINGESKO_ADDRESS}/${API_COINGESKO_VERSION}/simple/price`,
    priceByTicker: `${ROOT_API_MESSARI_ADDRESS}/${API_MESSARI_VERSION}/assets`
  },
  BOT_MESSAGES: {
    start:
      "Hello there! Welcome to the CryptoCurrenciesPricesBot telegram bot.",
    errors: {
      crypto_by_id:
        'You made mistake in crypto full name or CoinGesko does not have this crypto. ' +
        'Please try again. For instance, "bitcoin".',
    },
  },
};

export default settings;
