import React, {useState, useEffect} from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const LoginForm = ({ onLogin, onRegister }) => {
  const [active, setActive] = useState(localStorage.getItem("active")|| "");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmitLogin = (data) => {
    onLogin(data.loginEmail, data.loginPassword);
  };

  const onSubmitRegister = (data) => {
    onRegister(data.nombre, data.apellido, data.id, data.telefono, data.email, data.password);
  };

  const handleButtonClickRegister = () => {
    setActive("register");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={classNames("nav-link", "active" ? "active" : "")}
              id="tab-login"
              onClick={() => setActive("login")}
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={classNames(
                "nav-link",
                active === "register" ? "active" : ""
              )}
              id="tab-register"
              onClick={() => setActive("register")}
            >
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {active === "login" && (
            <div
              className={classNames(
                "tab-pane",
                "fade",
                active === "login" ? "show active" : ""
              )}
              id="pills-login"
            >
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
          )}
          <div className="tab-content">
            {active === "register" && (
              <div
                className={classNames(
                  "tab-pane",
                  "fade",
                  active === "register" ? "show active" : ""
                )}
                id="pills-register"
              >
                <div className="flex w-full h-full bg-yellow-500 ">
                  <div className="w-full flex items-center justify-center px-10 py-5 ">
                    <div className="max-w-[900px] px-10 py-0 rounded-3xl bg-white border-2 border-gray-100">
                      <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
                        <div className="text-center mb-10">
                          <a href="#">
                            <img
                              src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1713754905/o72hn6qxk8r66wmgy1vd.png"
                              alt="logo"
                              className="w-52 inline-block"
                            />
                          </a>
                          <h4 className="text-base font-semibold mt-5">
                            REGISTRATE COMO USUARIO
                          </h4>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitRegister)}>
                          <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
                            <div>
                              <label className="text-lg font-medium">
                                Nombres
                              </label>
                              <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa tu nombre"
                                {...register("nombre", { required: true })}
                              />
                              {errors.nombre && (
                                <p className="text-red-500">
                                  Por favor ingresa tu nombre.
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="text-lg font-medium">
                                Apellidos
                              </label>
                              <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa tu apellidos"
                                {...register("apellido", { required: true })}
                              />
                              {errors.apellido && (
                                <p className="text-red-500">
                                  Por favor ingresa tus apellidos.
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="text-lg font-medium">
                                Cedula
                              </label>
                              <input
                                type="number"
                                id="id"
                                name="id"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa tu cedula"
                                {...register("id", {
                                  required: "Por favor ingresa tu cedula.",
                                  pattern: {
                                    value: /^[0-9]*$/,
                                    message:
                                      "La cedula debe contener solo números.",
                                  },
                                })}
                              />
                              {errors.id && (
                                <p className="text-red-500">
                                  {errors.id.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="text-lg font-medium">
                                Telefono
                              </label>
                              <input
                                type="number"
                                id="telefono"
                                name="telefono"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa tu telefono"
                                {...register("telefono", {
                                  required: "Por favor ingresa tu telefono.",
                                  pattern: {
                                    value: /^[0-9]*$/,
                                    message:
                                      "El teléfono debe contener solo números.",
                                  },
                                })}
                              />
                              {errors.telefono && (
                                <p className="text-red-500">
                                  {errors.telefono.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="my-7">
                            <label className="text-lg font-medium">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                              placeholder="Ingresa tu email"
                              {...register("email", {
                                required: "El correo es requerido",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "El correo debe ser valido",
                                },
                              })}
                            />
                            {errors.email && (
                              <p className="text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
                            <div>
                              <label className="text-lg font-medium">
                                Contraseña
                              </label>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa tu contraseña"
                                {...register("password", {
                                  required: "La contraseña es requerida",
                                  minLength: {
                                    value: 8,
                                    message:
                                      "La contraseña debe tener al menos 8 caracteres",
                                  },
                                })}
                              />
                              {errors.password && (
                                <p className="text-red-500">
                                  {errors.password.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="text-lg font-medium">
                                Confirmar Contraseña
                              </label>
                              <input
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                                placeholder="Ingresa de nuevo tu contraseña"
                                {...register("cpassword", {
                                  required: "Por favor ingresa tu contraseña nuevamente.",
                                  validate: value => value === password || "Las contraseñas no coinciden."
                                })}
                              />
                              {errors.cpassword && (
                                <p className="text-red-500">
                                  {errors.cpassword.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="!mt-10">
                            <button
                              type="submit"
                              className=" btn btn-primary h-50% w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-yellow-500 rounded-xl text-white font-bold text-lg"
                            >
                              Registrarse
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
