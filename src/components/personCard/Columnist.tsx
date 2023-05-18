import SocialLinks from "../socialLinks";

const PersonCardColumnist = () => (
  <div>
    <div className="flex gap-4">
      <div>
        <img
          src="/assets/images/autor.png"
          alt="autor"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-[#004071] w-[104px] h-[23px] flex items-center justify-center rounded-[4px]">
          <span className="flex uppercase text-white font-bold font-['Roboto'] text-xs">
            Colunista
          </span>
        </div>
        <h3 className="text-lg font-bold font-['Roboto']">Tamaki Ryushi</h3>
        <div className="flex gap-[9px] items-center">
          <img
            src="/assets/images/clock.svg"
            alt="clock"
            width={16}
            height={16}
          />
          <span className="flex text-xs">02/02/2021 08:22</span>
        </div>
      </div>
    </div>
    <div className="flex gap-9  mt-2.5 items-center">
      <SocialLinks />
      <a href="https://news.google.com">
        <div className="flex flex-row bg-[#EAEAEA] items-center gap-2 min-w-[155px] h-[30px] justify-center rounded">
          <span className="flex font-['Roboto'] font-bold text-xs">
            SIGA NO{" "}
          </span>
          <img
            src="/assets/images/google-news.png"
            alt="google-news"
            height="30px"
            style={{ height: "20px", width: "70px" }}
          />
        </div>
      </a>
    </div>
  </div>
);

export default PersonCardColumnist;
