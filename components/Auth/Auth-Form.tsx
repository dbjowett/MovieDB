import styles from '../Auth/auth-form.module.scss';
import { useState, useRef } from 'react';
import { FaSignInAlt, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

async function createUser(email: string, password: string) {
  const config = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch('/api/auth/signup', config);
  console.log(res);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
}

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

  function switchAuth() {
    setIsLogin((prevState) => !prevState);
  }

  function googleSignin() {
    alert('Sorry this is an upcoming feature');
  }

  async function submitHandler(e: any) {
    e.preventDefault();

    const currentEmail = emailInputRef.current?.value;
    const currentPassword = passwordInputRef.current?.value;

    if (isLogin) {
      // Log user in
      const result = await signIn('credentials', {
        redirect: false,
      });
    } else {
      try {
        const result = await createUser(currentEmail, currentPassword);
        console.log(result);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }

  return (
    <section className={styles.auth}>
      <div className={styles.headerContainer}>
        <FaSignInAlt size={40} />
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div>{isLogin ? 'Sign in to your account' : 'Create a new account'}</div>
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <input type='email' required id='email' placeholder='Email' ref={emailInputRef} />
        </div>
        <div className={styles.inputContainer}>
          <input type='password' required id='password' placeholder='Password' ref={passwordInputRef} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.loginButton}>{isLogin ? 'Login' : 'Create Account'}</button>
          <div className={styles.optionsBtnContainer}>
            <button className={styles.toggle} type='button' onClick={switchAuth}>
              {isLogin ? 'Create New Account' : 'Login with existing account'}
            </button>
            <button onClick={googleSignin}>
              Login with Google
              <div>
                <FaGoogle size={13} />
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
