import { useMediaQuery } from "../../hooks";
import Bottom from "../bottom";
import BreakLine from "../breakLine";
import Footer from "../footer";
import Form from "../form";
import PersonCardMobile from "../personCard/Mobile";
import Posts, { PostProps } from "../posts";

const Body = () => {
  const isMobile = useMediaQuery(728);

  const posts: PostProps[] = [
    {
      title: "Oscar 2022: premiação ganha nova data para o próximo ano",
      image: "/assets/images/post3.png",
      date: "10/06/2020",
      time: "08:57",
      url: "http://google.com",
    },

    {
      title:
        "O novo trailer de Eternos é tudo o que você precisava para entrar no hype da Marvel",
      image: "/assets/images/post2.png",
      date: "10/06/2020",
      time: "08:57",
      url: "http://google.com",
    },
    {
      title:
        "Netflix fecha parceria com a Amblin, produtora de Steven Spielberg",
      image: "/assets/images/post1.png",
      date: "10/06/2020",
      time: "08:57",
      url: "http://google.com",
    },
  ];

  return (
    <div className="flex flex-col mb-2.5 gap-[30px] p-2.5">
      <PersonCardMobile />
      <div className="flex flex-col max-w-[768px]">
        <img src="/assets/images/notice.png" alt="notice" />
        <div className="flex gap-2 mt-3 items-start">
          <img src="/assets/images/cam.svg" alt="cam" />
          <div>
            <p className="text-sm font-['Roboto']">
              Após dois anos, longa voltou a ser elegível para concorrer ao
              Oscar 2021 e causou grande repercussão
            </p>
            <span className="flex text-xs text-[#777777]">
              (foto: Divulgação)
            </span>
          </div>
        </div>
        <div>mp3 player here</div>
        <div className="text-base leading-[34px] mt-4 mb-4">
          <p>
            {`A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça
          Filho e Juliano Dornelles, voltou a ser elegível para concorrer ao
          Oscar 2021 tem causado grande repercussão nas redes e na imprensa
          nacional e internacional. Na última sexta-feira (29/1), a
          distribuidora independente Vitrine Filmes anunciou que o filme está
          registrado no catálogo do Academy Screening Room. Essa é a plataforma
          de acesso exclusivo aos membros da Academia, responsáveis pela
          seletiva do prêmio. A lista final dos filmes selecionados será
          divulgada em 15 de fevereiro. O filme poderá concorrer às principais
          categorias, exceto Melhor Filme Estrangeiro.`}
          </p>
        </div>
        <BreakLine isScreenMobile={isMobile} className="mb-[15px]" />
        <h6 className="text-xl font-bold font-['Merriweather'] mb-2.5">
          LEIA MAIS
        </h6>
        <Posts posts={posts} />
        <BreakLine isScreenMobile={isMobile} className="mt-[15px]" />
        <div className="text-base leading-[34px] mt-4 mb-4">
          <h3 className="text-base font-bold font-['Merriweather'] mb-4">
            Repercursão
          </h3>
          <p>
            {`Fãs, veículos de imprensa e responsáveis pela produção de Bacurau
            têm usado as redes sociais para comemorar a novidade. O anúncio
            inicia uma nova carreira para o longa pernambucano na corrida pelo
            Oscar este ano, já que ficou de fora da edição de 2020. Nas redes
            sociais, o cineasta Kleber Mendonça Filho comemorou a visibilidade
            do filme. “Eu fico feliz com Bacurau sendo visto no Brasil e no
            mundo, não importa aonde”, escreveu. Em outra postagem, feita neste
            domingo (31/1), com foto da capa do jornal The New York Times, o
            diretor destacou o apoio da imprensa e crítica internacional.`}
          </p>
        </div>
        <div className="flex items-center mb-[30px] mt-[30px] justify-center cursor-pointer">
          <a href="https://www.usereserva.com/?gclid=Cj0KCQjwsIejBhDOARIsANYqkD1e4iimTLPib8nUiqoDocaSQj93vPdpWbyF2vk5o1mIw2_SWwn0RKcaAo8REALw_wcB">
            <img
              src={
                isMobile
                  ? "/assets/images/advertisement-middle-mobile.png"
                  : "/assets/images/advertisement-reserva.png"
              }
              alt="google-news"
              style={
                isMobile
                  ? { height: "250px", width: "300px" }
                  : { height: "470px", width: "638px" }
              }
            />
          </a>
        </div>
        <div>
          <h3 className="text-base font-bold font-['Merriweather']  mb-4">
            Corrida pelo Oscar
          </h3>
          <p className="leading-[34px] mb-2">
            {`Essa é uma nova chance para o longa pernambucano, que ficou de fora
            da edição do ano passado da grande celebração do cinema mundial. Na
            ocasião, a Academia Brasileira de Cinema (ABC) indicou o filme A
            vida invisível, de Karim Aïnouz, como título para representar o
            país. Este ano, a ABC apoia a candidatura de Babenco: alguém tem que
            ouvir o coração e dizer: parou, de Bárbara Paz, documentário de arte
            sobre obra a vida do cineasta Hector Babenco.`}
          </p>
          {!isMobile && (
            <div className="flex flex-col items-center justify-center font-['Merriweather'] text-lg font-bold text-[#191919] mb-[30px] mt-[30px]">
              <p>Continue sempre bem informado.</p>
              <hr className="flex w-[110px] h-[2px] mt-2 mb-2" />
              <a
                className="text-[#004071] font-['Roboto'] text-sm font-bold cursor-pointer"
                href="#"
              >
                ASSINE O ESTADO DE MINAS
              </a>
            </div>
          )}
          <p className="leading-[34px]">
            {`
            Por não estar sendo
            indicado por uma agência internacional, no caso a ABC, Bacurau está
            elegível para todas as categorias de filmes de ficção, como Melhor
            Filme, Direção, Atriz Coadjuvante, Ator Coadjuvante e Melhor Roteiro
            Original, exceto para a de Melhor Filme em Língua Estrangeira. A
            distribuidora americana Kino Lorber está à frente da campanha.`}
          </p>
        </div>
      </div>
      <Bottom />
      {!isMobile && <Form />}
      {!isMobile && <Footer isMobile={isMobile} />}
    </div>
  );
};

export default Body;
