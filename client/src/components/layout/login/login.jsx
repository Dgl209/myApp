import React, { useContext } from 'react';
import { ModalContext } from '../../../context';
import { Registration } from '../index';
import { useForm } from 'react-hook-form';
import { CheckboxField, TextField } from '../../common';

function Login() {
  const { setContent } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          type="text"
          id="email"
          label="Email"
          options={{
            required: 'Email is required field',
          }}
          error={errors.email?.message}
        />
        <TextField
          register={register}
          type="password"
          id="password"
          label="Password"
          options={{
            required: 'Password is required',
          }}
          error={errors.password?.message}
        />
        <div className="flex justify-between items-center mb-6">
          <CheckboxField register={register} id="remember" label="Remember me" />
          <div>
            <button
              type="button"
              className="text-sm text-blue-700 font-medium hover:text-purple-500 hover:border-b border-blue-500"
              onClick={() => console.log('forgot password page')}
            >
              Forgot password
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
         font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
      </form>
      <div className="flex items-center px-1">
        <p className="text-gray-700">No registered? </p>
        <button
          type="button"
          className="text-blue-700 text-[16px] font-medium px-1 hover:text-blue-500"
          onClick={() => setContent({ title: 'Sing up', closable: true, content: <Registration /> })}
        >
          Create account
        </button>
      </div>
    </>
  );
}

export default Login;