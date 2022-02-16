import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Filme from "./pages/Home/Filme";
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filmes/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;