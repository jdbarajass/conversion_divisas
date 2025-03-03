import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [from, setFrom] = useState('COP');
  const [to, setTo] = useState('USD');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    setError('');
    setResult(null);

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Por favor, ingrese un monto válido mayor que cero.');
      return;
    }

    if (from === to) {
      setError('No se puede convertir entre la misma moneda.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/convert', {
        from,
        to,
        amount: parseFloat(amount),
      });
      setResult(response.data.result);
    } catch (error) {
      setError('Error al realizar la conversión. Intente de nuevo.');
    }
  };

  const formatCurrency = (value, currency) => {
    if (!value) return '';
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  return (
    <div className="App">
      <h1>Conversor de Divisas</h1>
      <div className="form-group">
        <label>De:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="COP">COP - Peso Colombiano</option>
          <option value="USD">USD - Dólar Estadounidense</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>
      <div className="form-group">
        <label>A:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="USD">USD - Dólar Estadounidense</option>
          <option value="COP">COP - Peso Colombiano</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>
      <div className="form-group">
        <label>Monto:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingrese el monto"
          min="0.01"
          step="0.01"
        />
      </div>
      <button onClick={handleConvert}>Convertir</button>
      {error && <p className="error">{error}</p>}
      {result && (
        <p className="result">
          Resultado: {formatCurrency(result, to)}
        </p>
      )}
    </div>
  );
}

export default App;