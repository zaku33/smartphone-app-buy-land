import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import LogoImg from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      pin
    };

    try {
      debugger;
      const response = await api.post('ongs', data);
      alert(`Saved: Your Access Id is: ${response.data.id}`); 
      history.push('/');     
    } catch (err) {
      alert('Registration error, try again.');      
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero"/>

          <h1>Register</h1>
          <p>Register, create, find tasks and control your work.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            I am registred
          </Link>          
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="Company Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          
          <input type="email" placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}          
          />
          
          <input placeholder="WhatsApp#"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}          
          />

          <div className="input-group">
            <input placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            
            <input placeholder="Postal" maxLength="6" style={{ width: 120 }}
              value={pin}
              onChange={e => setPin(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}