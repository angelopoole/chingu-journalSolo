import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  html {
    width: 100%;
    height: 100%;
  }

  background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  color: $gray;
  font-family: var(--base-font-family);
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    background: rgba(var(--black), 0.8);
    width: 100%;
    height: 100%;
  }

  .form {
    z-index: 15;
    position: relative;
    background: $white;
    width: var(--max-width);
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(var(--black), 0.1);
    box-sizing: border-box;
    margin: 100px auto 10px;
    overflow: hidden;

    /* // Toggle */
    &-toggle {
      z-index: 10;
      position: absolute;
      top: 60px;
      right: 60px;
      background: var(--white);
      width: 60px;
      height: 60px;
      border-radius: 100%;
      transform-origin: center;
      transform: translate(0, -25%) scale(0);
      opacity: 0;
      cursor: pointer;
      transition: all 0.3s ease;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30px;
        height: 4px;
        background: var(--accent);
        transform: translate(-50%, -50%);
      }

      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &.visible {
        transform: translate(0, -25%) scale(1);
        opacity: 1;
      }
    }

    &-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 20px;

      &:last-child {
        margin: 0;
      }

      label {
        display: block;
        margin: 0 0 10px;
        color: var(--gray);
        font-size: 12px;
        font-weight: var(--semibold);
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: 0.2em;

        .two & {
          color: var(--white);
        }
      }

      input {
        outline: none;
        display: block;
        background: rgba(var(--black), 0.1);
        width: 100%;
        border: 0;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 12px 20px;
        color: var(--gray);
        font-family: inherit;
        font-size: inherit;
        font-weight: var(--semibold);
        line-height: inherit;
        transition: 0.3s ease;

        &:focus {
          color: var(--dark-gray);
        }

        .two & {
          color: var(--white);

          &:focus {
            color: var(--white);
          }
        }
      }

      button {
        outline: none;
        background: var(--accent);
        width: 100%;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        color: var(--white);
        font-family: inherit;
        font-size: inherit;
        font-weight: var(--semibold);
        line-height: inherit;
        text-transform: uppercase;
        cursor: pointer;

        .two & {
          background: var(--white);
          color: var(--accent);
        }
      }

      .form-remember {
        font-size: 12px;
        font-weight: var(--regular);
        letter-spacing: 0;
        text-transform: none;

        input[type='checkbox'] {
          display: inline-block;
          width: auto;
          margin: 0 10px 0 0;
        }
      }

      .form-recovery {
        color: var(--accent);
        font-size: 12px;
        text-decoration: none;
      }
    }

    /* // Panel */
    &-panel {
      padding: 60px calc(5% + 60px) 60px 60px;
      box-sizing: border-box;

      /* // Panel One */
      &.one {
        &:before {
          @extend .overlay;

          content: '';
          display: block;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease;
        }

        &.hidden {
          &:before {
            display: block;
            opacity: 1;
            visibility: visible;
          }
        }
      }

      /* // Panel Two */
      &.two {
        z-index: 5;
        position: absolute;
        top: 0;
        left: 95%;
        background: var(--accent);
        width: 100%;
        min-height: 100%;
        padding: 60px calc(10% + 60px) 60px 60px;
        transition: 0.3s ease;
        cursor: pointer;

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 60px;
          left: 1.5%;
          background: rgba($white, 0.2);
          height: 30px;
          width: 2px;
          transition: 0.3s ease;
        }

        &:after {
          left: 3%;
        }

        &:hover {
          left: 93%;
          box-shadow: 0 0 10px rgba($black, 0.2);

          &:before,
          &:after {
            opacity: 0;
          }
        }

        &.active {
          left: 10%;
          box-shadow: 0 0 10px rgba($black, 0.2);
          cursor: default;

          &:before,
          &:after {
            opacity: 0;
          }
        }
      }
    }

    /* // Header */
    &-header {
      margin: 0 0 40px;

      h1 {
        padding: 4px 0;
        color: var(--accent);
        font-size: 24px;
        font-weight: var(--bold);
        text-transform: uppercase;

        .two & {
          position: relative;
          z-index: 40;
          color: var(--white);
        }
      }
    }

    /* // Content */
    &-content {
    }

    &-footer {
    }
  }

  /* // Pen Footer */
`;

const NewFormTest = () => {
  return (
    <>
      <StyledForm>
        <form className='form'>
          <div className='form-toggle' />
          <div className='form-panel one'>
            <div className='form-header'>
              <h1>Account Login</h1>
            </div>
            <div className='form-content'>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  id='username'
                  type='text'
                  name='username'
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  type='password'
                  name='password'
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label className='form-remember'>
                  <input type='checkbox' />
                  Remember Me
                </label>
                <a className='form-recovery' href='#'>
                  Forgot Password?
                </a>
              </div>
              <div className='form-group'>
                <button type='submit'>Log In</button>
              </div>
            </div>
          </div>
        </form>
        <div className='form-panel two'>
          <div className='form-header'>
            <h1>Register Account</h1>
          </div>
          <div className='form-content'>
            <form>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  id='username'
                  type='text'
                  name='username'
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  type='password'
                  name='password'
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input
                  id='cpassword'
                  type='password'
                  name='cpassword'
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input id='email' type='email' name='email' required={true} />
              </div>
              <div className='form-group'>
                <button type='submit'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </StyledForm>
    </>
  );
};

export default NewFormTest;
