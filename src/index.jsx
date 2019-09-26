import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Page404 from './App/Page404';
import Home from './App/Home';

ReactDOM.render(
<HashRouter basename="/">
	<Switch>
		<Route exact path="/" component={() => <Redirect to="/home" />} />
		<Route path="/home" component={Home} />
		
		<Route component={Page404} />
	</Switch>
</HashRouter>, document.getElementById("root"));