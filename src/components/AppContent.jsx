import React, { useState, useEffect } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import AuthContent from './AuthContent';
import LoginForm from './LoginForm.jsx';
import MainMenu from './MainMenu';
import RegisterForm from './RegisterForm.jsx'; 
import Swal from 'sweetalert2';

const AppContent = () => {
    const [active, setActive] = useState(localStorage.getItem("active")|| "");
    const [componentToShow, setComponentToShow] = useState("welcome");

    useEffect(() => {
        localStorage.setItem("active", active);
    }, [active]);

    const onClickLoginApp = () => {
        setActive("login");
        setComponentToShow("login");
        
    };
    
    const onClickRegisterApp = () => {
        setActive("register");
        setComponentToShow("register");
        
    };
    

    const logout = () => {
        setComponentToShow("welcome");
        setAuthHeader(null);
    };
    const onLogin = (username, password) => {
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                console.log(response);
                setAuthHeader(response.data.token);
                Swal.fire({
                    icon: "success",
                    title: "El usuario con correo " + response.data.email + " ha iniciado sesion correctamente",
                    showConfirmButton: true
                });
            }).catch(
            (error) => {
                Swal.fire({
                    icon: "error",
                    text: error.response.data.message,
                });
                setAuthHeader(null);
            }
        );
    };

    const onRegister = (id, nombre, apellido, telefono, email, password) => {
        request(
            "POST",
            "/register",
            {
                id: id,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email,
                password: password,
                rol_id: "1"
            }).then(
            (response) => {
                console.log(response);
                Swal.fire({
                    icon: "success",
                    title: "El usuario con correo " + response.data.email + " ha sido registrado correctamente",
                    showConfirmButton: true
                });
                setAuthHeader(response.data.token);
            }).catch(
            (error) => {
                Swal.fire({
                    icon: "error",
                    text: error.response.data.message,
                });

                setAuthHeader(null);
            }
        );
    };


    return (
      <>
        {componentToShow === "welcome" && <MainMenu onClickLogin={onClickLoginApp} onClickRegister={onClickRegisterApp}/> }
        {componentToShow === "login" && <LoginForm onLogin={onLogin}/>}
        {componentToShow === "register" && <RegisterForm onRegister={onRegister} />}
        {componentToShow === "messages" && <AuthContent />}

      </>
    );
};

export default AppContent;
