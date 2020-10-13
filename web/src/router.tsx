import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../src/Pages/Landing'

import OrphanagesMap from './Pages/OrphanagesMap'

function Routes(){
    return (
<BrowserRouter>
<Route path= "/" exact component={Landing}/>
<Route path= "/app" component={OrphanagesMap}/>


</BrowserRouter>
    );
}

export default Routes;