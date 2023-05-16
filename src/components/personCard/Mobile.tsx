const PersonCardMobile = () => (
  <div className="flex flex-col">
    <div>
      <h3 className="text-lg font-bold font-['Roboto']">Tamaki Ryushi</h3>
      <div className="flex gap-[9px] items-center">
        <img src="/assets/images/clock.svg" alt="clock" />
        <span className="flex text-xs">02/02/2021 08:22</span>
      </div>
    </div>
    <div className="flex gap-9  mt-2.5 items-center">
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

export default PersonCardMobile;
