import React, { ChangeEvent, FormEvent, useState } from 'react';
import { RouteComponentProps, useParams, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import Loader from '../components/Loader';
import styled from 'styled-components';

// todo; update error on useAuth component
interface FormInput {
  email: string;
  password: string;
  name: string;
}

const StyledLoginMessage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  background-color: #beb69f;

  .login-message {
    display: inline;
    margin-top: 2em;
    margin-bottom: 8em;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;

  border-radius: 10% / 50%;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  /* box-shadow: inset 0 0 5px 5px #beb69f; */
  margin: 0 0 3px 3px;

  padding: 10% 20% 20% 20%;
  background-color: blanchedalmond;
`;

const AuthPage = (props: RouteComponentProps) => {
  const { formTypeParam }: { formTypeParam: string } = useParams();
  const auth = useAuth();

  const [formInput, SetFormInput] = useState<FormInput>({
    name: '',
    email: '',
    password: '',
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    SetFormInput({ ...formInput, [name]: value });
  };

  // ? handle form submit, fires off signup/signin based off formType this is weird
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formTypeParam === 'login') {
      const { email, password } = formInput;
      const authSignIn = await auth.signin(email, password);

      if (typeof authSignIn === 'object') {
        alert('WRONG USERNAME OR PASSWORD'); // mvp, here we can set this message to an error handler state or something.
      }

      return authSignIn;
    }
    if (formTypeParam === 'signup') {
      const { name, email, password } = formInput;
      await auth?.signup(name, email, password);
    }
    SetFormInput({ name: '', email: '', password: '' });
  };

  if (auth?.loading) {
    return <Loader />;
  }

  if (auth.user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <StyledLoginMessage>
        <div className='login-message'>{formTypeParam} here</div>
        <StyledForm onSubmit={e => handleSubmit(e)} className='login-form'>
          {formTypeParam === 'signup' ? (
            <label>
              Name
              <input
                placeholder='Name'
                name='name'
                type='text'
                value={formInput.name}
                onChange={event => handleFormChange(event)}
              />
            </label>
          ) : null}
          <label>
            Email
            <input
              placeholder='Email'
              name='email'
              type='text'
              value={formInput.email}
              onChange={event => handleFormChange(event)}
            />
          </label>

          <label>
            Password:
            <input
              placeholder='Password'
              name='password'
              type='password'
              value={formInput.password}
              onChange={event => handleFormChange(event)}
            />
          </label>

          <label>
            Submit:
            <input name='submit' type='submit' />
          </label>
        </StyledForm>
      </StyledLoginMessage>
    </>
  );
};

export default AuthPage;
