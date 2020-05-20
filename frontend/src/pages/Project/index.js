import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Project() {
  const [projects, setProject] = useState([]);
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('project', {
      headers: {
        Authorization: ongId,
      }
    }).then(response =>{
      setProject(response.data);
    })
  }, [ongId]);

  async function handleDeleteProject(id) {
    try {
      await api.delete(`project/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setProject(projects.filter(project => project.id !== id));
    } catch (err) {
      alert('Error deleting case, try again.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Company : {ongName}</span>

        <Link className="button" to="/create/project">
          Create project
        </Link>

        <button onClick={handleLogout} type="button"> 
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Listed project</h1>

      <ul>
        {projects.map(project => (
          <li key={project.ProjectId}>
            <strong>NAME:</strong>
            <p>{project.Name}</p>

            <strong>DESCRIPTION:</strong>
            <p>{project.Description}</p>


            <strong>ADDRESS:</strong>
            <p>{project.Address}</p>


            <strong>OWNER:</strong>
            <p>{project.Owner}</p>


            <strong>EMAIL:</strong>
            <p>{project.Email}</p>

            <strong>Budget:</strong>
            <p>{Intl.NumberFormat(
                 'en-US', 
                   { style: 'currency', 
                   currency: 'INR'  
                  }).format(project.Budget)}</p>

            <strong>COMMENT:</strong>
            <p>{project.Comment}</p>

            <button onClick={() => handleDeleteProject(project.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  );
}