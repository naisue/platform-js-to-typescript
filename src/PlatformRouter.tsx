import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import SequenceCollector from "./Routes/SequenceCollector";
import SequenceSearchTool from "./Routes/SequenceSearchTool";

function PlatformRouter () {
    return (
        <Router>
            <Header/>
            <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/sst">
                <SequenceSearchTool />
            </Route>
            <Route path="/sco">
                <SequenceCollector />
            </Route>
            </Switch>
        </Router>
      );
}

export default PlatformRouter;