export function mapCurrencyRateToLabelValue(rates) {
  return Object.keys(rates).map(currency => ({
    value: currency,
    label: currency,
  }))
}
