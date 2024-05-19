import * as React from "react";

function Login({}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div class="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <div class="text-center mb-16">
        <a href="javascript:void(0)">
          <img
            src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1713754905/o72hn6qxk8r66wmgy1vd.png"
            alt="logo"
            class="w-52 inline-block"
          />
        </a>
        <h4 class="text-base font-semibold mt-3">Sign up into your account</h4>
      </div>
      <form>
        <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label class="text-sm mb-2 block">Nombres</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label class="text-sm mb-2 block">Apellidos</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label class="text-sm mb-2 block">Cedula</label>
            <input
              type="text"
              id="id"
              name="id"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label class="text-sm mb-2 block">Telefono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />{" "}
          </div>
        </div>
        <div class="my-7">
          <label class="text-sm mb-2 block">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="form-control"
            onChange={this.onChangeHandler}
          />
        </div>
        <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label class="text-sm mb-2 block">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label class="text-sm mb-2 block">Confirmar Contraseña</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              required
              className="form-control"
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div class="!mt-10">
          <button
            type="submit"
            class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
