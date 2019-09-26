import React, {Component} from 'react';
import style from './Page404.css';

export default class Page404 extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	componentDidMount()
	{
		document.title = '404';
	}
	
	render()
	{
		return <h1 className={style.header}>404 -- page not found ;-;</h1>;
	}
};
