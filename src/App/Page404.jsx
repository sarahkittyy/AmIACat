import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import * as UI from '@material-ui/core';

export default class Page404 extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			toHome: false
		}
	}
	
	componentDidMount()
	{
		document.title = '404';
	}
	
	render()
	{
		if(this.state.toHome)
		{
			return <Redirect to="/home" />;
		}
		
		return (
			<UI.Paper style={{width: '100%', height: '100%'}}>
				<UI.Typography variant="h2" align="center">404, page not found.</UI.Typography>
				<UI.Grid container justify="center" align="center">
					<UI.Grid item>		
						<UI.Button onClick={() => this.setState({toHome: true})}>Return home</UI.Button>
					</UI.Grid>
				</UI.Grid>
			</UI.Paper>
		);
		
	}
};
