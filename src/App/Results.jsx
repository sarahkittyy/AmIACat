import React, {Component} from 'react';
import * as UI from '@material-ui/core';
import {Redirect} from 'react-router-dom';

export default class Results extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			redirect: false
		};
	}
	
	render()
	{
		if(this.state.redirect)
		{
			return <Redirect to="/home" />;
		}
		return (
			<>
			<UI.AppBar position="static">
				<UI.Grid container alignItems="center" justify="center" direction="row">
					<UI.Grid item>
						<UI.Toolbar>
							<UI.Typography variant="h6" align="center">
								Am I A Cat? Results!
							</UI.Typography>
						</UI.Toolbar>
					</UI.Grid>
				</UI.Grid>
			</UI.AppBar>
			<UI.Grid container justify="center" align="center" direction="column" style={{height: '100%'}}>
				<UI.Grid item style={{height: '100%'}}>
					<UI.Paper style={{width: '80%', height: '40%', padding: '10px', marginTop: '10%'}}>
						<UI.Typography variant="h2">
							You are a cat!
						</UI.Typography>
						<UI.Typography variant="h4">
							The quiz results indicate you are 100% cat.
						</UI.Typography>
						<UI.Button onClick={() => this.setState({redirect: true})}>
							Try the quiz again?
						</UI.Button>
					</UI.Paper>
				</UI.Grid>
			</UI.Grid>
			</>	
		);
	}
};