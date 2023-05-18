import { TypeMediaQuery } from "../../types";

const Header = ({ isMobile }: TypeMediaQuery) => {
  const mobileAdvertisement = () => (
    <>
      <span className="flex text-sm font-normal font-['Roboto']">
        Publicidade
      </span>
      <img
        src="/assets/images/advertisement-mobile.png"
        alt="publicidade"
        height={50}
        width={300}
      />
    </>
  );

  return (
    <header className="flex flex-col max-w-[1107px] m-2.5">
      {isMobile && mobileAdvertisement()}
      <div className="mt-2.5">
        <span className="flex uppercase font-['Roboto'] text-[#004071] font-bold">
          oscar 2021
        </span>
        <h1 className="font-['Merriweather'] w-[300px] text-[21px] mt-[5px] md:w-full sm:text-[32px]">
          Repercussão: 'Bacurau' recebe apoio em nova chance de indicação ao
          Oscar
        </h1>
        <p className="font-['Roboto'] font-light text-base mt-[5px]">
          Após dois anos, longa voltou a ser elegível para concorrer ao Oscar
          2021 e causou grande repercussão nas redes e na imprensa nacional e
          internacional
        </p>
      </div>
      {!isMobile && (
        <div className="flex flex-col justify-center p-7">
          <span className="flex text-sm font-normal font-['Roboto']">
            Publicidade
          </span>
          <img
            src="/assets/images/advertisement-desktop.png"
            alt="publicidade"
            width={970}
            height={250}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
