import React from 'react';
import './Header.css';

export default ({black}) => {

    return (
        
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/imgs/logo_netflix.png" alt="Netflix" />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="/imgs/netflix_user.png" alt="Usuário" />
                </a>
            </div>
        </header>

   
    );
}