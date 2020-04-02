import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./page";
import SignIn from "./components/organithms/SignIn";
import SignUp from "./components/organithms/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/signIn" component={SignIn} exact />
          <Route path="/signUp" component={SignUp} exact />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
