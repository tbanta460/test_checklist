import React from 'react';
import './index.css';

const Input = ({forId, titleLabel, typeInput, idInput, placeHolder, hide = false, isStyle,...rest}) => {
	return(
		<>
			<label htmlFor={forId} className={`mf-label ${hide ? "display-none" : null}`}>{titleLabel}</label>
			<input className={`mf-input ${isStyle}`}type={typeInput} id={idInput} placeholder={placeHolder} {...rest}/>
		</>
	)
}

export default Input