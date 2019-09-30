import React, {Component} from 'react';
import style from './Home.css';
import * as UI from '@material-ui/core';

export default class Home extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
		};
	}
	
	componentDidMount()
	{
		document.title = "Home";
	}
	
	render()
	{
		return (
			<>
				<UI.AppBar position="static">
					<UI.Grid container alignItems="center" justify="center" direction="row">
						<UI.Grid item>
							<UI.Toolbar>
								<UI.Typography variant="h6" align="center">
									Am I A Cat?
								</UI.Typography>
							</UI.Toolbar>
						</UI.Grid>
					</UI.Grid>
				</UI.AppBar>
			</>
		);
	}
}