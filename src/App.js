import Home from "./components/Home";
import GlobalStyle from "./Global";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Admin from "./components/Admin";
import Login from "./components/Login";
import dotenv from "dotenv";

function App() {
  dotenv.config();
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/explore" component={Explore} />
          <Route path={`/${process.env.REACT_APP_ADMIN}`} component={Admin} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
