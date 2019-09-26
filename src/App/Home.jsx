import React, {Component} from 'react';
import style from './Home.css';

export default class Home extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	componentDidMount()
	{
		document.title = "Home";
	}
	
	render()
	{
		return (
			<h1>hi</h1>	
		);
	}
}