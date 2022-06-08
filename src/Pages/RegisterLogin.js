import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import Logo from '../TelaInicial/Logo';


export default function RegisterLogin() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const LoginStorage = () => {
    if (!email || !password || !emailConf) {
      return setError("Preencha todos os campos");
    } else if (email !== emailConf) {
      return setError("Os e-mails não são iguais")
    };

    const res = signup(email, password);
    if(res) setError(res)

    alert("Usuário cadastrado com sucesso!")
    navigate("/");
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
        <h1> Crie seu Login</h1>
        <form >
          <div className="mb-3" style={{  }}>
            <label class="form-label">E-mail</label>
            <input
              class="form-control shadow"
              type="text"
              placeholder="Digite seu e-mail"
              aria-describedby="emailHelp"
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              // onChange={ handleChangeEmail }
            />
          </div>
          <div className="mb-3" style={{  }}>
            <label class="form-label">Digite seu  E-mail novamente</label>
            <input
              class="form-control shadow"
              type="text"
              placeholder="Confirme seu e-mail"
              aria-describedby="emailHelp"
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
              // onChange={ handleChangeEmail }
            />
          </div>
          <div className="mb-3" >
            <label class="form-label">Senha</label>
            <input
              class="form-control shadow"
              type="password"
              placeholder="Digite sua senha"
              aria-describedby="emailHelp"
              onChange={(e) => [setPassword(e.target.value), setError("")]}
              // onChange={ handleChangePassword }
            />
          </div>
          <Link to="">
          <div id="liveAlertPlaceholder">{error}</div>
            <button
              className="btn btn-outline-warning shadow"
              type="button"
              id="liveAlertBtn"
              // disabled={ !email || !password }
              onClick={ LoginStorage }
            >
              Inscrever-se
            </button>
          </Link>
          <br />
          <br />
          <span class="form-text">Já tem uma conta?</span>
          <br />
          <div>
            <Link to="/">
              <button
                className="btn btn-outline-primary btn-sm shadow"
                type="button"
              >
                Entre
              </button>
            </Link>

          </div>
        </form>
      </section>
    </div>
  );
}

