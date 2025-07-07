import Link from 'next/link';

export default function Home() {
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
        gap: '20px',
      }}
    >
      <h1>Ejercicios Complementarios</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link
          href="/contador"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#4caf50',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '200px',
          }}
        >
          Contador
        </Link>
        <Link
          href="/conversor"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#2196f3',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '200px',
          }}
        >
          Conversor de Temperatura
        </Link>
        <Link
          href="/login"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '200px',
          }}
        >
          Formulario de Login
        </Link>
      </nav>
    </div>
  );
}
