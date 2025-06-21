import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navigation from "./components/Header/Navigation";
import ShowListing from "./components/ShowListing";
import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";
import ArsaSatForm from "./components/CreateListing/ArsaSatForm"; // Yeni formumuz
import ArsaAlForm from "./components/CreateListing/ArsaAlForm";   // Yeni formumuz

import "./index.scss";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <SkeletonTheme baseColor="#eaeaea" highlightColor="#d9d9d9">
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/arsa-sat" component={ArsaSatForm} />
        <Route exact path="/arsa-al" component={ArsaAlForm} />
        <Route exact path="/ilanlar" component={IndexPage} />
        <Route exact path="/ilan/:listingId" component={ShowListing} />
      </Switch>
    </SkeletonTheme>
  );
};

export default App;
