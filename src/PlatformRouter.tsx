import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Routes/Dashboard";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import SequenceCollector from "./Routes/SequenceCollector";
import SequenceSearchTool from "./Routes/SequenceSearchTool";

function PlatformRouter () {
    return (
        <Router>
            <Header/>
            <Switch>
            <Route path="/sst">
                <SequenceSearchTool />
            </Route>
            <Route path="/sco">
                <SequenceCollector />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </Router>
      );
}

export default PlatformRouter;