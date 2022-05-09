
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home';

import frontEnd from './components/Timeline/Pdfs/certificado_frontEnd';
import analise from './components/Timeline/Pdfs/certificado_analise';
import javascript from './components/Timeline/Pdfs/certificado_javascript';
import react from './components/Timeline/Pdfs/certificado_react';

export default function Router(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                


                <Route exact path="/certificado_analise" component={analise}/>
                <Route exact path="/certificado_frontEnd" component={frontEnd}/>
                <Route exact path="/certificado_javascript" component={javascript}/>
                <Route exact path="/certificado_react" component={react}/>
            </Switch>
        
        </BrowserRouter>

    )
}

