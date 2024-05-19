import React from "react";
import HeaderMain from "./HeaderMain";

const MainMenu = ({ onClickLogin, onClickRegister }) => {
  const onClickLoginMain = (state) => {
    onClickLogin(state);
  };

  const onClickRegisterMain = (state) => {
    onClickRegister(state);
  };

  return (
    <HeaderMain
      onClickLogin={onClickLoginMain}
      onClickRegister={onClickRegisterMain}
    />
  );
};

export default MainMenu;
