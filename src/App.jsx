import React, { useState } from 'react';

export default function App() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '2rem', background: '#f0f0f0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Random Password Generator</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '0.5rem' }}>Password Length:</label>
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ padding: '0.2rem 0.5rem', width: '3rem' }}
        />
      </div>

      <button onClick={generatePassword} style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '0.25rem', marginBottom: '1rem' }}>
        Generate
      </button>

      {password && (
        <div style={{ padding: '1rem', borderRadius: '0.25rem', background: 'white', minWidth: '300px', textAlign: 'center', wordBreak: 'break-word' }}>
          <strong>Your Password:</strong>
          <p style={{ marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '1.2rem' }}>{password}</p>
        </div>
      )}
    </div>
  );
}
