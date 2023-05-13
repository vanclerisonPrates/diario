import React from "react";

interface Props {
  message?: string;
}

const App = ({ message }: Props) => (
  <div className="p-10 text-9xl uppercase">
    <h1 className="text-[red]">{message} teste</h1>
  </div>
);

export default App;
