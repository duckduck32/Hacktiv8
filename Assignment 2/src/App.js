import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

const filterCurrency = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=75953ebae90b479ca1d492eacb591080')
    .then((response) => response.json())
    .then((data) => setData(data))
    console.log(data)
  })

  return (
    <div className="App">
      <h1>Currency Rates</h1>
      <div className='containerRate'>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {data && filterCurrency.map(currency => (
              <tr>
                <td>{currency}</td>
                <td>{(data.rates[currency] * 1.05).toFixed(4)} </td>
                <td>{(data.rates[currency] * 1).toFixed(4)}</td>
                <td>{(data.rates[currency] * 0.95).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
