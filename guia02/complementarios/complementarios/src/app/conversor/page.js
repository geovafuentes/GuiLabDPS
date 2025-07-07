'use client';

import { useState } from 'react';

export default function Conversor() {
  const [temp, setTemp] = useState('');
  const [tipo, setTipo] = useState('CtoF'); // CtoF = Celsius a Fahrenheit, FtoC = Fahrenheit a Celsius
  const [resultado, setResultado] = useState(null);

  function convertir() {
    const valor = parseFloat(temp);
    if (isNaN(valor)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }

    if (tipo === 'CtoF') {
      const f = (valor * 9) / 5 + 32;
      setResultado(`${valor}°C = ${f.toFixed(2)}°F`);
    } else {
      const c = ((valor - 32) * 5) / 9;
      setResultado(`${valor}°F = ${c.toFixed(2)}°C`);
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f0f4f8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
        <h2 style={{ color: 'black' }}>Conversor de Temperatura</h2>
      <input
        type="text"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Ingresa la temperatura"
        style={{ padding: '0.5rem', fontSize: '1rem', width: '200px',}}
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem', width: '220px' }}
      >
        <option value="CtoF">Celsius a Fahrenheit</option>
        <option value="FtoC">Fahrenheit a Celsius</option>
      </select>

      <button
        onClick={convertir}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#2196f3',
          color: 'white',
        }}
      >
        Convertir
      </button>

      {resultado && (
        <p
          style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#333',
          }}
        >
          {resultado}
        </p>
      )}
    </div>
  );
}
