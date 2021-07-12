import React, { ChangeEvent, ReactNode, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

type email = string;
type password = string;

interface FormInput {
  email: email;
  password: password;
}

const AuthPage = (props: RouteComponentProps) => {
  console.log(props?.match.params);

  const [formInput, SetFormInput] = useState<FormInput>({
    email: '',
    password: '',
  });

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    SetFormInput({ ...formInput, [name]: value });
  };

  return (
    <>
      <div>login/register here</div>
      <form>
        <label>
          Email:
          <input
            name='email'
            type='text'
            onChange={event => handleFormChange(event)}
          />
        </label>
        <label>
          Password:
          <input name='password' type='text' />
        </label>
        <button>Submit!</button>
      </form>
    </>
  );
};

export default AuthPage;
