import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import LogoImg from '../../assets/logo.svg';

export default function NewProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [owner_name, setOwnerName] = useState('');
  const [email, setEMail] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewProject(e){
    e.preventDefault();

    const data = {
      name,
      description,
      address,
      owner_name,
      email,
      value
    };

    try {
      await api.post('project', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/project');
    } catch (err) {
      alert('Error creating project, try again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Create Project</h1>
          <p>Please fill in the details of the project.</p>
          <Link className="back-link" to="/project">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Projects
          </Link>
        </section>
        <form onSubmit={handleNewProject}>
          <input 
            placeholder="Project Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea 
          placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
          placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input 
          placeholder="Owner Name"
            value={owner_name}
            onChange={e => setOwnerName(e.target.value)}
          />
          <input 
          placeholder="Email"
            value={email}
            onChange={e => setEMail(e.target.value)}
          />
          <input 
          placeholder="Amount"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Create Project
          </button>
        </form>
      </div>
    </div>    
  );
}