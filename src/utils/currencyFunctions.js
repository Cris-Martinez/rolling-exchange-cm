export const getCurrencySymbol = (currency) => {
  switch(currency) {
    case 'ars':
      return '$'
    case 'usd':
      return 'u$s'
    case 'eur':
      return '€'
    case 'jpy':
      return '¥'
    case 'brl':
      return 'R$'
    case 'clp':
      return '$'
    case 'gbp':
      return '£'
  }
}

export const getCurrencyName = (currency) => {
  switch(currency) {
    case 'ars':
      return 'pesos argentinos'
    case 'usd':
      return 'dolares estadounidenses'
    case 'eur':
      return 'euros'
    case 'jpy':
      return 'yenes japoneses'
    case 'brl':
      return 'reales'
    case 'clp':
      return 'pesos chilenos'
    case 'gbp':
      return 'libra esterlina'
  }
}

const exchange = {
  ars: {
    ars: (amount, rate) => amount * 1,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * rate,
  },
  usd: {
    ars: (amount, rate) => amount * rate * 1.30,
    usd: (amount, rate) => amount * 1,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * rate,
  },
  eur: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * 1,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * rate,
  },
  jpy: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * 1,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * rate,
  },
  brl: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * 1,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * rate,
  },
  clp: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * 1,
    gbp: (amount, rate) => amount * rate,
  },
  gbp: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    brl: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    gbp: (amount, rate) => amount * 1,
  },
}

export const getExchange = (fromCurrency, toCurrency, rate, amount) => (
  exchange[fromCurrency][toCurrency](amount, rate).toFixed(2)
)