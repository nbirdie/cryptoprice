

function fetchCryptoRate(crypto) {
    try {
  const response = axios.get(createUrl(crypto, "usd"))
    } catch (error) {
        return 'Filimon'
    }
    return response;
}
