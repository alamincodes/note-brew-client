import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="text-3xl font-bold">Note Brew.</h1>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
