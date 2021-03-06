import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user_db");

    if (token && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (item) => item.email === JSON.parse(token).email
      );

      if(hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));
    const hasUser = usersStorage?.filter((item) => item.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);

        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou Senha incorretos"
      }
    } else {
      return "Usuário não cadastrado"
    }
  };

  const signup = (email, password, fornecedor, endereço, cidade, estado, cep) => {
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));
    const hasUser = usersStorage?.filter((item) => item.email === email);

    if (hasUser?.length) {
      return "Já existe uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password, fornecedor, endereço, cidade, estado, cep }];
    } else {
      newUser = [{ email, password, fornecedor, endereço, cidade, estado, cep }];
    }

    localStorage.setItem("user_db", JSON.stringify(newUser));
  }

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return(
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      { children }
    </AuthContext.Provider>  
  );
};

