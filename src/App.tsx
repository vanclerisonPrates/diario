import Nav from "./components/navbar";
import { Body, Footer, Form, Header, Sidebar } from "./components";
import { useMediaQuery } from "./hooks";

const App = () => {
  const isMobile = useMediaQuery(728);

  return (
    <main>
      <Nav isMobile={isMobile} />
      <div className="flex flex-col items-center sm:mt-[64px] p-2 justify-center">
        <Header isMobile={isMobile} />
        <div className="flex items-start gap-[32px]">
          <Body isMobile={isMobile} />
          {!isMobile && (
            <div className="w-[310px]">
              <Sidebar />
            </div>
          )}
        </div>
        {isMobile && (
          <>
            <Form />
            <Footer isMobile={isMobile} />
          </>
        )}
      </div>
    </main>
  );
};

export default App;
