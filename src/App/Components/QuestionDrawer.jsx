import React, { Component } from 'react';
import * as UI from '@material-ui/core';
import Question from './Question';

export default class QuestionDrawer extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			question: 0,
			questions: props.questions.map((q, index) => {
				return (
					<Question number={index + 1} text={q} key={index} max={props.questions.length} next={() => this.nextQuestion()} prev={() => this.prevQuestion()} />
				);
			})
		};
	}
	
	nextQuestion()
	{
		this.setState({
			question: this.state.question + 1
		});
	}
	
	prevQuestion()
	{
		this.setState({
			question: this.state.question - 1
		});
	}
	
	render()
	{
		return (
			<>
				{this.state.questions[this.state.question]}
			</>
		);
	}
};
