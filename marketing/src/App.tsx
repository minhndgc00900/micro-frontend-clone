import { Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";

export default () => {
  console.log(123123);

  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
