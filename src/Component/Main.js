import { Switch, Route } from 'react-router-dom';
import React  from 'react';
import AddDesign from './AddDesign';
import ViewDesigns from './ViewDesigns';
import Design from './Design';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={AddDesign} />
            <Route exact path='/viewdesigns' component={ViewDesigns} />
            <Route exact path='/design/:id' component={Design} />
        </Switch>
    </main>
)