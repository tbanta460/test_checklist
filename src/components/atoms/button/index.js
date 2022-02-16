import React from 'react';
import './index.css'
const Button = ({title, iSstyle,...rest}) => {
	return (
		<>
			<div>
				<button className={`btn ${iSstyle}`} {...rest}>{title}</button>
			</div>
		</>
	)

}

export default Button