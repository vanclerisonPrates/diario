const Form = () => (
  <div className="flex flex-col bg-[#F7F7F7] p-4 sm:w-[765px] border-t-2 border-b-2 mt-[30px]">
    <h6 className="text-[#191919] text-['Roboto'] font-bold text-sm">
      RECEBA NOSSA NEWSLETTER
    </h6>
    <p className="text-[#9B9B9B] text-xs font-['Merriweather'] m-[2px]">
      Comece o dia com as notícias selecionadas pelo nosso editor
    </p>
    <div className="flex gap-2">
      <input
        type="email"
        name="email"
        placeholder="DIGITE SEU E-MAIL"
        className="border-[1px] rounded p-2 font-bold font-['Roboto'] text-sm sm:w-full"
      />
      <button className="bg-[#ED7D00] text-[#FFF] flex items-center w-[120px] h-[40px] rounded justify-center font-['Roboto'] font-bold">
        RECEBER
      </button>
    </div>
  </div>
);

export default Form;
