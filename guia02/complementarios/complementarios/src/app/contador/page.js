'use client'; // Requerido para usar hooks como useState

import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f0f4f8',
        color: '#333',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Contador</h2>
      <p
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
          minWidth: '100px',
          textAlign: 'center',
          backgroundColor: '#fff',
          padding: '1rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        {count}
      </p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#4caf50',
            color: 'white',
            marginRight: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4caf50')}
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d32f2f')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f44336')}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
