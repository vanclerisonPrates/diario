import { useMediaQuery } from "../../hooks";

const Nav = () => {
  const isMobile = useMediaQuery(728);

  return (
    <div
      className={
        isMobile
          ? "flex items-center p-2 gap-2 border-b-[1px]"
          : "flex items-center justify-between p-2 border-b-[1px]"
      }
    >
      <div className="flex gap-4">
        <button className="border-[1px] flex items-center gap-4 p-2 rounded-lg bg-[#FAFAFA]">
          <img
            src="assets/images/menu.svg"
            alt="Estado de minas logo"
            className="center"
          />{" "}
          {!isMobile && (
            <span className="font-bold font-['Roboto'] text-sm">Seções</span>
          )}
        </button>
        {!isMobile && (
          <button className="rounded-lg bg-[#FAFAFA] p-2 border-[1px]">
            <img src="assets/images/search-icon.svg" alt="search" />
          </button>
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
          <img
            src="assets/images/whatsapp-white.svg"
            alt="Estado de minas logo"
            className="center"
          />
        )}
        <button
          type="button"
          className="bg-[#ED7D00] text-[#FFF] p-2 rounded w-[69px] h-[38px] font-['Roboto'] font-bold"
        >
          Assine
        </button>
        {!isMobile && (
          <div className="border-l-[1px] ml-2">
            <img
              src="assets/images/user.png"
              alt="Estado de minas logo"
              className="center rounded-full w-[40px] h-[40px] ml-4 mr-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
