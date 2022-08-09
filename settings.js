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
      "Hello there! Welcome to the telegram bot for geeting crypto prices. To start enter the ticker like 'btc' or 'eth'.",
    errors: {
      crypto_by_id:
        'You made mistake in crypto name or we do not have this crypto in our database. ' +
        'Please try again. For instance, "bitcoin" or "btc".',
    },
  },
};

export default settings;
