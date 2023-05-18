import SocialLinks from "../socialLinks";

interface Props {
  isMobile: boolean;
}

const Footer = ({ isMobile }: Props) => (
  <footer
    className={
      isMobile
        ? "flex items-center justify-center flex-col"
        : "flex items-center justify-around w-[765px]"
    }
  >
    <div className="flex gap-4 mb-[20px] mt-[20px] items-center">
      <span className="flex text-xs">compartilhe </span>
      <SocialLinks />
    </div>
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="bg-[#004071] w-[210px] h-[32px] rounded-[3px] font-['Roboto'] font-bold text-[#FFF] text-sm mb-2"
      >
        LEIA 100 COMENTÁRIOS
      </button>
      <span className="flex text-xs font-bold text-[#4A4A4A]">
        * PARA COMENTAR, FAÇA SEU{" "}
        <a
          className="underline text-[#004071] cursor-pointer mr-2 ml-2"
          title="Login"
          href="#login"
        >
          LOGIN
        </a>
        OU{" "}
        <a
          className="underline text-[#004071] cursor-pointer ml-2"
          title="Assine"
          href="#assine"
        >
          {" "}
          ASSINE{" "}
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
