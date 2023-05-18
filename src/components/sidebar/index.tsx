import { sideNews } from "../../constants";

const Sidebar = () => (
  <div>
    <img
      src="/assets/images/ads1.png"
      alt="advertisement"
      height="30px"
      style={{ height: "250px", width: "300px" }}
    />
    <hr className="mt-[30px] h-[4px] w-full bg-[#D1D1D1] mb-[15px] " />
    <h6 className="text-lg font-bold font-['Merriweather'] mb-[20px]">
      MAIS LIDAS
    </h6>
    <aside>
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
              <a className="hover:underline" title={news.title}>
                <p className="flex flex-center font-['Merriweather'] text-[#004071]">
                  <span>
                    {news.premmium && (
                      <img
                        src="/assets/images/premmium.svg"
                        alt="premmium badge"
                        className="absolute mt-[5px]"
                        width={15}
                        height={15}
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
    </aside>
    <div>
      <span className="flex text-[9px] font-['Roboto'] mb-2.5 mt-8">
        Publicidade
      </span>
      <img
        src="/assets/images/ads2.png"
        alt="advertisement"
        height={600}
        width={300}
      />
    </div>
  </div>
);

export default Sidebar;
