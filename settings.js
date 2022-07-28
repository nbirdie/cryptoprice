const ROOT_API_ADDRESS = "https://api.coingecko.com/api";
const API_VERSION = "v3";
const settings = {
  BOT_TOKEN: "5490133596:AAHPuLc6R9-ccnq2saViXI5_EDO1rS_t12Y",
  API_ROUTES: {
    priceByID: `${ROOT_API_ADDRESS}/${API_VERSION}/simple/price`,
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
