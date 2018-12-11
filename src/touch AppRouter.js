import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AmiiboForm from './AmiiboForm';
import Amiibos from '/Amiibos';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={AmiiboForm} />
                <Route path="/results/" component={Amiibos} />
            </div>
        </Router>
    );
};

export default AppRouter;