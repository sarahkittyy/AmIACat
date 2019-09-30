import React, {Component} from 'react';
import * as UI from '@material-ui/core';
import Question from './Components/Question';
import QuestionDrawer from './Components/QuestionDrawer'

export default class Home extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			started: false
		};
	}
	
	componentDidMount()
	{
		document.title = "Home";
	}
	
	render()
	{
		if(!this.state.started)
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
				<UI.Grid container justify="center" align="center" direction="column" style={{height: '100%'}}>
					<UI.Grid item style={{height: '100%'}}>
						<UI.Paper style={{marginTop: '10%', padding: '20px', width: '60%', height: '40%'}}>
							<UI.Typography variant="h3">
								Welcome to the "Are you a cat?" quiz!
							</UI.Typography>
							<UI.Button onClick={() => this.setState({started: true})}>Start!</UI.Button>
						</UI.Paper>
					</UI.Grid>
				</UI.Grid>
			</>	
			);
		}
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
				<UI.Grid container justify="center" align="center" direction="column" style={{height: '100%'}}>
					<UI.Grid item style={{height: '100%'}}>
						<QuestionDrawer on={0} questions={[
							'What is your favorite thing to do?',
							'Why are you taking this quiz?',
							'What is your favorite type of pet?',
							'Do you think meows are cute?',
							'What is your favorite food?',
							'What is your favorite color?'
						]}/>
					</UI.Grid>
				</UI.Grid>
			</>
		);
	}
}