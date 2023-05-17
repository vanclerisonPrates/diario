import { useState } from "react";
import { TypeMediaQuery } from "../../types";

const Nav = ({ isMobile }: TypeMediaQuery) => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={
        isMobile
          ? "flex items-center p-2 gap-2 border-b-[1px]"
          : "flex items-center justify-between p-2 border-b-[1px]"
      }
    >
      <div className="flex gap-4">
        <button
          className="border-[1px] flex items-center gap-4 p-2 rounded-lg bg-[#FAFAFA] "
          onClick={() => setMenu(!menu)}
        >
          <img src="assets/images/menu.svg" alt="menu" className="center" />{" "}
          {!isMobile && (
            <span className="font-bold font-['Roboto'] text-sm">Seções</span>
          )}
          {!isMobile && (
            <ul className="absolute flex mt-20 gap-2">
              <li className="mt-10 ">
                <a
                  className="text-[#004071] font-medium font-['Roboto'] hover:font-bold"
                  href="#inicio"
                >
                  Início
                </a>
              </li>
              <li className="mt-10">
                <img src="/assets/images/arrow.svg" />
              </li>
              <li className="mt-10">
                <a
                  className="text-[#004071] font-medium font-['Roboto']  hover:font-bold"
                  href="#politica"
                >
                  Política
                </a>
              </li>
            </ul>
          )}
          {isMobile && menu && (
            <ul className="absolute flex flex-col gap-2 shadown-sm bg-white h-min fixed z-1 top-[50px] left-0 bg-[#fff] overflow-x-hidden pt-[20px] w-full">
              <li className="hover:bg[#F2F2F2] mb-2">
                <a
                  className="text-[#004071] font-medium font-['Roboto'] uppercase "
                  href="#inicio"
                >
                  Início
                </a>
              </li>
              <li className=" hover:[#F2F2F2] mb-2">
                <a
                  className="text-[#004071] font-medium font-['Roboto'] uppercase"
                  href="#politica"
                >
                  Política
                </a>
              </li>
            </ul>
          )}
        </button>
        {!isMobile && (
          <button
            className="rounded-lg bg-[#FAFAFA] p-2 border-[1px] hover:bg-[#e1e1e1]"
            onClick={() => setSearch(!search)}
          >
            <img src="assets/images/search-icon.svg" alt="search" />
          </button>
        )}
        {search && (
          <input
            className="border-[1px] p-2 rounded-lg"
            title="Econtre no EM"
            placeholder="Encontre no EM"
          />
        )}
        <div className="flex items-center gap-5">
          <img
            src="assets/images/logo.svg"
            alt="Estado de minas logo"
            className="center"
          />
          {!isMobile && <span className="text-[#666666]">Política</span>}
        </div>
      </div>
      <div className="flex gap-[15px]">
        {!isMobile && (
          <a href="https://whatsapp.com" title="whatsApp link">
            <img
              src="assets/images/whatsapp-white.svg"
              alt="Estado de minas logo"
              className="center "
            />
          </a>
        )}
        <button
          type="button"
          className="bg-[#ED7D00] text-[#FFF] p-2 rounded w-[69px] h-[38px] font-['Roboto'] font-bold hover:bg-[#d97a08]"
          onClick={() => alert("Assine")}
        >
          Assine
        </button>
        {!isMobile && (
          <div className="border-l-[1px] ml-2">
            <img
              src="assets/images/user.png"
              alt="user image"
              className="center rounded-full w-[40px] h-[40px] ml-4 mr-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
