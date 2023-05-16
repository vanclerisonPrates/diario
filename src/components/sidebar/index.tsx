const sideNews = [
  {
    title:
      "Mulher anuncia faxina em troca de refeição em BH e se surpreende com respostas",
    time: "10:54",
    date: "25/07/2019",
    premmium: true,
  },
  {
    title:
      "'Um dos mais perigosos', diz delegado sobre homem que atirou em família de PM",
    time: "15:57",
    date: "25/07/2019",
  },
  {
    title:
      "Abastecimento de água será interrompido em BH no domingo; veja a lista dos bairros",
    time: "17:26",
    date: "25/07/2019",
  },
  {
    title:
      "Morre herdeiro da construtora OAS que infartou durante audiência na Justiça",
    time: "15:35",
    date: "25/07/2019",
    premmium: true,
  },
  {
    title:
      "Preso diz que deu acesso a dados hackeados ao editor do Intercept Brasil",
    time: "13:00",
    date: "25/07/2019",
  },
];

const Sidebar = () => (
  <div>
    <img
      src="/assets/images/ads1.png"
      alt="google-news"
      height="30px"
      style={{ height: "250px", width: "300px" }}
    />
    <hr className="mt-[30px] h-[4px] w-full bg-[#D1D1D1] mb-[15px] " />
    <h6 className="text-lg font-bold font-['Merriweather'] mb-[20px]">
      MAIS LIDAS
    </h6>
    <ul>
      {sideNews.map((news, index) => (
        <li
          key={index}
          className="flex flex-col border-b-[1px] last-of-type:border-b-[0px]"
        >
          <span className="flex font-['Roboto'] text-[#666666] text-xs mt-4">
            {[news.time, news.date].join(" - ")}
          </span>
          <div className="mt-2 mb-2">
            <a className="hover:underline">
              <p className="flex flex-center font-['Merriweather'] text-[#004071]">
                <span>
                  {news.premmium && (
                    <img
                      src="/assets/images/premmium.svg"
                      alt="premmium badge"
                      className="absolute mt-[5px]"
                    />
                  )}
                </span>
                {news.premmium && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
                {news.title}
              </p>
            </a>
          </div>
        </li>
      ))}
    </ul>
    <div>
      <span className="flex text-[9px] font-['Roboto'] mb-2.5 mt-8">
        Publicidade
      </span>
      <img src="/assets/images/ads2.png" alt="advertisement" />
    </div>
  </div>
);

export default Sidebar;
