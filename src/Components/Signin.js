import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage';
import Client_Home from '../Pages/Client_Home';
import BankerPage from '../Pages/BankerPage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #7289da;
  }
`;

const Button = styled.button`
  background-color: #7289da;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const SignInForm = (handleSubmit) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick= () =>{
    handleSubmit(email);
  }
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleClick}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </FormContainer>
      
    </Container>
  );
};

export default SignInForm;