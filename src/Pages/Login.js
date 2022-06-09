import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import Logo from '../TelaInicial/Logo';
// import './Login.css';
// import restaurante from '../images/restaurante.png';

export default function Login() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  // const handleChangeEmail = ({ target: { value } }) => {
  //   const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (checkEmail.test(value)) return setEmail(value);
  //   return setEmail('');
  // };

  // const handleChangePassword = ({ target: { value } }) => {
  //   const checkPassword = 6;
  //   if (value.length > checkPassword) return setPassword(value);
  //   return setPassword('');
  // };

  const LoginStorage = () => {
    if (!email || !password) {
      return setError("Preencha todos os campos");
    }

    const res = signin(email, password);
    if(res) {
      return setError(res)
    }

    navigate("/home");
  };

  return (
    <div>
      <br />
      <br />
      <section>
        <Logo />
      </section> 
      <br />
      <br />
      <section style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <form >
          <div className="mb-3" style={{  }}>
            <label class="form-label">E-mail</label>
            <input
              class="form-control shadow"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              // onChange={ handleChangeEmail }
            />
          </div>
          <div className="mb-3" >
            <label class="form-label">Senha</label>
            <input
              class="form-control shadow"
              type="password"
              placeholder="Digite sua senha"aria-describedby="emailHelp"
              onChange={(e) => [setPassword(e.target.value), setError("")]}
              // onChange={ handleChangePassword }
            />
          </div>
          <div id="liveAlertPlaceholder">{error}</div>
            <button
              className="btn btn-outline-primary shadow"
              type="button"
              id="liveAlertBtn"
              // disabled={ !email || !password }
              onClick={ LoginStorage }
            >
              Entrar
            </button>
          <br />
          <br />
          <span class="form-text">Não tem uma conta?</span>
          <br />
          <div>
            <Link to="/register-login">
              <button
                className="btn btn-outline-danger btn-sm shadow"
                type="button"
              >
                Cadastre-se
              </button>
            </Link>

          </div>
        </form>
      </section>
    </div>
  );
}