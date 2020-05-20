import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import LogoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes2.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
          debugger;
          const response = await api.post('sessions', { id });
          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);
          history.push('/project');
    } catch (err) {
      alert('Login failed, try again.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} 
           height="50"
           alt="Be The Hero"/>

        <form>
          <h1>Log In Now</h1>

          <input placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button onClick={handleLogin} className="button" type="submit">Enter</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            I am new here
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}