import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import PricingsPage from "./Pages/PricingsPage/PricingsPage";
import Gallery from "./Pages/Gallery/Gallery";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Pricings">
          <PricingsPage />
        </Route>
        <Route exact path="/Gallery">
          <Gallery />
        </Route>
        <Route exact path="/About">
          <AboutPage />
        </Route>
        <Route exact path="/Contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
