import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const LoginForm = ({ onLogin, onRegister }) => {
  const [active, setActive] = useState(localStorage.getItem("active") || "login");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = (data) => {
    onLogin(data.loginEmail, data.loginPassword);
  };

  const handleButtonClickRegister = () => {
    setActive("register");
  };

  return (


    <div className="tab-content">

      <div className="flex w-full h-screen bg-gray-200">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className=" w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-white border-2 border-gray-100">
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <h1 className="text-5xl font-semibold">Bienvenido</h1>
              <p className="font-medium text-lg text-gray-500 mt-4">
                Ingresa tus credenciales.
              </p>
              <div className="mt-8">
                <div className="flex flex-col">
                  <label className="text-lg font-medium">Email</label>
                  <input
                    type="text"
                    id="loginEmail"
                    name="email"
                    className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                    placeholder="Enter your email"
                    {...register("loginEmail", {
                      required: "El correo es requerido",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "El correo debe ser valido",
                      },
                    })}
                  />
                  {errors.loginEmail && (
                    <p className="text-red-500">
                      {errors.loginEmail.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-lg font-medium">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                    placeholder="Ingresa tu contraseña"
                    {...register("loginPassword", {
                      required: "La contraseña es requerida",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe tener al menos 8 caracteres",
                      },
                    })}
                  />
                  {errors.loginPassword && (
                    <p className="text-red-500">
                      {errors.loginPassword.message}
                    </p>
                  )}
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label
                      className="ml-2 font-medium text-base"
                      htmlFor="remember"
                    >
                      Recordarme
                    </label>
                  </div>
                  <button className="font-medium text-base text-violet-500">
                    Olvide mi Contraseña
                  </button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    type="submit"
                    className=" btn btn-primary active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-yellow-500 rounded-xl text-white font-bold text-lg"
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-8 flex justify-center items-center ">
              <button
                className={classNames(
                  "ml-2",
                  "font-medium",
                  "text-base",
                  "text-yellow-500",
                  "text-center",
                  active === "register" ? "active" : ""
                )}
                onClick={handleButtonClickRegister}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
        <div className="hidden relative w-1/2 lg:flex items-center justify-center bg-white">
          <img
            src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1713754150/r08vr8qmjfdtxufteszd.jpg"
            alt="Descripción de la imagen"
            className="w-full h-dvh blur-[2px]"
          />
          <img
            src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1713754905/o72hn6qxk8r66wmgy1vd.png"
            alt="Descripción de la imagen"
            className="w-full absolute"
          />
          <div />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
