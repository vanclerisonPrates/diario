import React from "react";
import Nav from "./components/Navbar";
import {
  Body,
  Bottom,
  Footer,
  Form,
  Header,
  PersonCardColumnist,
  PersonCardMobile,
  Sidebar,
} from "./components";
import { useMediaQuery } from "./hooks";

interface Props {
  message?: string;
}

const App = ({ message }: Props) => {
  const isMobile = useMediaQuery(728);

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center sm:mt-[64px]">
        <Header />
        <div className="flex items-start gap-[32px]">
          <Body />
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
    </div>
  );
};

export default App;
