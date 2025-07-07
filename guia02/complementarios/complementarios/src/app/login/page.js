'use client';

import { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');


  const usuarioValido = 'admin';
  const contrasenaValida = '1234';

  function manejarLogin(e) {
    e.preventDefault();
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      setMensaje(`¡Bienvenido, ${usuario}!`);
    } else {
      setMensaje('Usuario o contraseña incorrectos');
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
      <h2>Login</h2>

      <form
        onSubmit={manejarLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        <input
          type="text"
          placeholder="admin"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <input
          type="password"
          placeholder="1234"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Iniciar Sesión
        </button>
      </form>

      {mensaje && (
        <p
          style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            color: mensaje.includes('incorrectos') ? 'red' : 'green',
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}
