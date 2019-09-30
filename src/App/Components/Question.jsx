import React, {Component} from 'react';
import * as UI from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Redirect } from 'react-router-dom';

export default class Question extends Component
{
	constructor(props)
	{
		super(props);
		
		this.intendedText = 'meow ';
		
		this.state = {
			inputText: '',
			question: `${props.number}. ${props.text}`,
			finished: false
		};
	}
	
	textGiven(e)
	{
		this.setState({
			inputText: this.state.inputText + this.intendedText[this.state.inputText.length % this.intendedText.length]
		});
	}
	
	prev()
	{
		this.props.prev();
	}
	
	next()
	{
		this.props.next();
	}
	
	render()
	{
		if(this.state.finished)
		{
			return <Redirect to="/results" />;
		}
		return (
			<UI.Paper style={{width: '35%', padding: '20px', marginTop: '10%'}}>
				<UI.Typography align="center" variant="h5">
					{this.state.question}
				</UI.Typography>
				<br />
				<UI.Grid container justify="space-around" alignItems="center">
					<UI.Grid item>
						{
							this.props.number != 1 ?
								<UI.IconButton onClick={() => this.prev()}>
									<Icons.ArrowLeft />
								</UI.IconButton> : ''
						}
					</UI.Grid>
					<UI.Grid item xl={10}>
						<UI.TextField
							id="standard-multiline-flexible" 
							onChange={(e) => this.textGiven(e)}
							multiline
							value={this.state.inputText}
							onSubmit={() => this.nextQuestion()}
							label="Enter your response here...">
							
						</UI.TextField>
					</UI.Grid>
					<UI.Grid item>
						{
							this.props.number != this.props.max ?
								<UI.IconButton onClick={() => this.next()}>
									<Icons.ArrowRight />
								</UI.IconButton>
								:
								<UI.Button onClick={()=>this.setState({finished: true})}>Finish</UI.Button>
						}
					</UI.Grid>
				</UI.Grid>
			</UI.Paper>
		);
	}
};
