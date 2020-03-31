import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('ngo', data);

            alert(`Your access ID: ${response.data.id}`);

            history.push('/');
        } catch (err){
            alert('Registration error, try again.');
        }

    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>Make your registration, enter the platform and help people find the cases of your NGO.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Sign up
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="NGO NAME"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder="E-MAIL"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="CONTACT NUMBER / WHATSAPP"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">
                        <input 
                        placeholder="CITY"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="STATE" style={{ width: 100 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}