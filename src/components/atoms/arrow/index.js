import React from 'react';
import './index.css';

export const ArrowPrev = (props) => {
	const {onClick} = props
	return(
		<>
			<div className="bg-arrow" onClick={onClick}>
				<div className="arrow-prev arrow">
				</div>
			</div>
		</>
	)
} 

export const ArrowNext = (props) => {
	const {onClick} = props
	return(
		<>
			<div className="bg-arrow" onClick={onClick}>
				<div className="arrow-next arrow">
				</div>
			</div>
		</>
	)
}