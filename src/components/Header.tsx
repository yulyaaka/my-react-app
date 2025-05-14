import React from "react";
import '/src/assets/styles/header.css'

export const Header: React.FC=()=>{
    return (
    <header className="page_header header">
    <div>
        <h2>Jobly</h2>
    </div>
    <nav className="header_nav nav">
        <ul className="nav_list">
            <li className="nav_item">For Recruiters</li>
            <li className="nav_item">
                <button onClick={() => document.getElementById('id01').style.display = 'block'} className="signup-btn">
                    Sign Up
                </button>
            </li>
            <li className="nav_item">Log In</li>
        </ul>
    </nav>
    <div className="modal">
  
        <div className="container">
          <label htmlFor="uname">Имя пользователя</label>
          <input type="text" placeholder="Введите имя пользователя" name="uname" required/>
    
          <label htmlFor="psw"><b>Пароль</b></label>
          <input type="password" placeholder=" Ведите пароль" name="psw" required/>
          
          <label><input type="checkbox" checked={false} name="remember"/> Запомнить меня </label>
    </div>
    
        <div className="container"> 
          <button type="button" onClick={() => document.getElementById('id01').style.display= 'none'} className="cancelbtn">
          Отменить
          </button>
          <span className="psw">Забыли пароль?</span>
        </div>
    </div>

    {/*<div className="preloader">
      <div className="spinner"></div>
    </div>*/}
    </header>
    );
};