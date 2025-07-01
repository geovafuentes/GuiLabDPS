"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e, setNumero) => {
    const { value } = e.target;
    // Validar si el valor es numérico
    if (/^\d*\.?\d*$/.test(value)) {
      setNumero(value);
      setError(null); // Limpiar cualquier error si el valor es válido
    } else {
      setError("Por favor ingresa un número válido.");
    }
  };

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
    setError(null);
  };

  const sumar = () => {
    if (numero1 === '' || numero2 === '') {
      setError("Ambos números deben estar llenos.");
      return;
    }
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    if (numero1 === '' || numero2 === '') {
      setError("Ambos números deben estar llenos.");
      return;
    }
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    if (numero1 === '' || numero2 === '') {
      setError("Ambos números deben estar llenos.");
      return;
    }
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  };

  const dividir = () => {
    if (numero1 === '' || numero2 === '') {
      setError("Ambos números deben estar llenos.");
      return;
    }
    if (parseFloat(numero2) === 0) {
      setError("No se puede dividir por cero.");
      return;
    }
    const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la división: ${resultadoDivision}`);
  };

  const potencia = () => {
    if (numero1 === '' || numero2 === '') {
      setError("Ambos números deben estar llenos.");
      return;
    }
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
  };

  const raizCuadrada = () => {
    if (numero1 === '') {
      setError("Debe ingresar un número.");
      return;
    }
    const resultadoRaiz = Math.sqrt(parseFloat(numero1));
    setResultado(`Resultado de la raíz cuadrada: ${resultadoRaiz}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => handleInputChange(e, setNumero1)}
          />
        </div>

        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => handleInputChange(e, setNumero2)}
          />
        </div>

        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potencia}>Potencia</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada</button>
        </div>

        <div className={styles.botones}>
          <button className={styles.button} onClick={limpiar}>Limpiar</button>
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
