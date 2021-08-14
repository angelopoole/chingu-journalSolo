import React, { ChangeEvent, FormEvent, useState } from 'react';
import { RouteComponentProps, useParams, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import Loader from '../components/Loader';
import styled from 'styled-components';

// todo: show user error on wrong login information.
// todo; update error on useAuth component
interface FormInput {
  email: string;
  password: string;
  name: string;
}

const StyledLoginMessage = styled.div`
  min-height: 90vh;
  background-color: var(--dark-shades);
  width: 100%;

  .login-form {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
    padding: 10% 20% 20% 20%;
    background-color: blanchedalmond;
    height: 100vh;
  }

  .login-message {
    text-align: center;
    margin: auto;
    background-color: inherit;

    height: 0px;
  }
`;

const AuthPage = (props: RouteComponentProps) => {
  const { formTypeParam }: { formTypeParam: string } = useParams();
  const auth = useAuth();
  // auth has .user, .loading, .error

  const [formInput, SetFormInput] = useState<FormInput>({
    name: '',
    email: '',
    password: '',
  });

  // handle formOnchange, sets formInput
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // grabs form input name, and form input values then sets them to eachother.
    SetFormInput({ ...formInput, [name]: value });
  };

  // ? handle form submit, fires off signup/signin based off formType this is weird
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formTypeParam === 'login') {
      const { email, password } = formInput;
      const authSignIn = await auth?.signin(email, password);
      return authSignIn;
    }
    if (formTypeParam === 'signup') {
      const { name, email, password } = formInput;
      const authSignup = await auth?.signup(name, email, password);
      console.log(
        'EXT:AUTHSIGNUP',
        authSignup,
        'USEAUTH STATE > AUTHPAGE',
        auth?.error
      );
    }
    SetFormInput({ name: '', email: '', password: '' });
  };

  if (auth?.loading) {
    return <Loader />;
  }

  if (auth?.user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <StyledLoginMessage>
        <div className='login-message'>{formTypeParam} here</div>
        <form onSubmit={e => handleSubmit(e)} className='login-form'>
          {formTypeParam === 'signup' ? (
            <label>
              Name:
              <input
                name='name'
                type='text'
                value={formInput.name}
                onChange={event => handleFormChange(event)}
              />
            </label>
          ) : null}
          <label>
            Email:
            <input
              name='email'
              type='text'
              value={formInput.email}
              onChange={event => handleFormChange(event)}
            />
          </label>

          <label>
            Password:
            <input
              name='password'
              type='text'
              value={formInput.password}
              onChange={event => handleFormChange(event)}
            />
          </label>

          <label>
            Submit:
            <input name='submit' type='submit' />
          </label>
        </form>
      </StyledLoginMessage>
    </>
  );
};

export default AuthPage;
