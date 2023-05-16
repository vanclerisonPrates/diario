interface Props {
  isMobile: boolean;
}

const Footer = ({ isMobile }: Props) => (
  <div
    className={
      isMobile
        ? "flex items-center justify-center flex-col"
        : "flex items-center justify-around w-[765px]"
    }
  >
    <div className="flex gap-4 mb-[20px] mt-[20px] items-center">
      <span className="flex text-xs">compartilhe </span>
      <div className="flex gap-2">
        <a href="https://facebook.com">
          <img src="/assets/images/facebook.svg" alt="facebook" />
        </a>
        <a href="https://twitter.com">
          <img src="/assets/images/twitter.svg" alt="twitter" />
        </a>
        <a href="https://whatsapp.com">
          <img src="/assets/images/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
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
        <a className="underline text-[#004071] cursor-pointer mr-2 ml-2">
          LOGIN
        </a>
        OU{" "}
        <a className="underline text-[#004071] cursor-pointer ml-2"> ASSINE </a>
      </span>
    </div>
  </div>
);

export default Footer;
