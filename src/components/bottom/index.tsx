const Bottom = () => (
  <div className="flex flex-col items-center mt-[30px]">
    <h6 className="text-lg font-bold font-['Merriweather'] mb-2">
      Fique sempre bem informado.
    </h6>
    <hr className="flex w-[150px] h-[1px]" />
    <div className="flex items-center flex-col mb-1 mt-4">
      <span className="flex uppercase text-[#767676] font-bold">
        Siga o Estado de Minas no
      </span>
      <img
        src="/assets/images/google-news.png"
        alt="google-news"
        height="30px"
        style={{ height: "25px", width: "135px" }}
      />
    </div>
  </div>
);

export default Bottom;
