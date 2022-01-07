import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/Home";
import HandleRedirectContainer from "./containers/HandleRedirect";

function App() {
  return (
    <Router>
        <Route path="/">
          <HomeContainer />
        </Route>
        <Route path="/:shortId">
          <HandleRedirectContainer />
        </Route>
    </Router>
  );
}

export default App;