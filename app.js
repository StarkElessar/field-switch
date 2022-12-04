document.addEventListener('DOMContentLoaded', () => {
  const packagesType = {
    'starters': {
      10000: {
        'profit-share': '80%',
        'profit-target': '10%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '5 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '8%',
        'daily-drawdown': '4%',
        'fee': '$129  $99',
        'costs': '10% Off',
      },
      25000: {
        'profit-share': '90%',
        'profit-target': '15%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '6 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '10%',
        'daily-drawdown': '6%',
        'fee': '$129  $99',
        'costs': '9% Off',
      },
      50000: {
        'profit-share': '95%',
        'profit-target': '20%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '7 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '12%',
        'daily-drawdown': '8%',
        'fee': '$129  $99',
        'costs': '8% Off',
      },
      100000: {
        'profit-share': '100%',
        'profit-target': '25%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '9 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '14%',
        'daily-drawdown': '10%',
        'fee': '$129  $99',
        'costs': '7% Off',
      },
      250000: {
        'profit-share': '120%',
        'profit-target': '40%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '15 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '18%',
        'daily-drawdown': '12%',
        'fee': '$129  $99',
        'costs': '5% Off',
      },
    },
    'experienced': {
      10000: {
        'profit-share': '80%',
        'profit-target': '10%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '5 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '8%',
        'daily-drawdown': '4%',
        'fee': '$129  $99',
        'costs': '10% Off',
      },
      25000: {
        'profit-share': '90%',
        'profit-target': '15%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '6 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '10%',
        'daily-drawdown': '6%',
        'fee': '$129  $99',
        'costs': '9% Off',
      },
      50000: {
        'profit-share': '95%',
        'profit-target': '20%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '7 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '12%',
        'daily-drawdown': '8%',
        'fee': '$129  $99',
        'costs': '8% Off',
      },
      100000: {
        'profit-share': '100%',
        'profit-target': '25%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '9 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '14%',
        'daily-drawdown': '10%',
        'fee': '$129  $99',
        'costs': '7% Off',
      },
      250000: {
        'profit-share': '120%',
        'profit-target': '40%',
        'time-limit': 'None',
        'trading-limits': 'None',
        'trading-days': '15 Days',
        'leverage': '25:1',
        'platforms': 'Binance Futures testnet',
        'overall-drawdown': '18%',
        'daily-drawdown': '12%',
        'fee': '$129  $99',
        'costs': '5% Off',
      },
    },
  }

  const switcherForm = document.querySelector('.switcher-form')
  
  const calcInfos = () => {
    const category = switcherForm.querySelector('input[name="category"]:checked').value
    const capital = switcherForm.querySelector('input[name="capital"]:checked').value
    const dataTypes = packagesType[category][capital]
    
    for (const key in dataTypes) {
      const liNode = switcherForm.querySelector(`[data-type="${key}"]`)
      
      liNode.querySelector('.switcher-form__value').innerText = dataTypes[key]
    }
  }

  calcInfos()

  switcherForm.querySelectorAll('input[type="radio"]').forEach((inputRadio) => {
    inputRadio.addEventListener('input', calcInfos)
  })
})