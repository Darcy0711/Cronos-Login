import { useState } from "react";
import LoginImage from "../assets/img/bg_login_form.png";

export const FormLogin = () => {
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  
  return (
    <div className="w-[80%] mx-auto flex justify-center">
      <div className="hidden md:block">
        <img src={LoginImage} className="rounded-tl-[90px] mt-10 relative"/>
      </div>
      <h6 className="text-white font-semibold sm:font-bold sm:text-3xl text-2xl w-80 sm:w-96 -mt-96 sm:mt-96 ml-1 sm:ml-32 text-center sm:top-[7rem] top-[32rem] sm:right-[57%] absolute">
        Sistema de gestión <br />
        monitoreo y priorización <br />
        de proyectos.
      </h6>

      <div className="bg-blue-950 w-full mt-28 sm:mt-2 md:w-[40%] rounded-br-[70px] mb-10 opacity-90">
        <div className="flex justify-center">
          <h2 className="text-white font-bold text-5xl mt-32">Inicio Sesión</h2>
        </div>
        <div className="flex flex-col pb-16 mt-28 items-center ">
          <label className="text-white font-bold mr-60 text-2xl">Usuario</label>
          <input className="rounded-lg w-80 h-12 mt-2 px-2" type="text" id="username"/>
        </div>
        <div className="flex flex-col mb-10 items-center">
          <label className="text-white font-bold mr-48 text-2xl">
            Contraseña
          </label>
          <div className="relative h-12 w-80 p-2 bg-white rounded-lg mt-2">
            <input
              className="w-64 px-2 outline-none"
              type={show ? "text" : "password"}
              id="password"
            />
            <i
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-3 text-black text-lg fa-solid fa-eye cursor-pointer"
            ></i>
          </div>
        </div>
        <div className="mb-4 flex items-center ml-12 md:ml-48 ">
          <input type="checkbox" className="w-4 h-4" />
          <label className="font-bold text-white ml-2">Recuérdame</label>
        </div>
        <div className="flex flex-col mb-20">
          <button className="rounded-lg w-72 md:w-80 p-2 text-white text-2xl bg-blue-700 hover:bg-cyan-400 font-bold mt-8 mx-auto md:ml-48"
            type="submit">Inicio
          </button>
        </div>
      </div>
    </div>
  );
};
