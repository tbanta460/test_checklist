import React from 'react';
import './index.css'
const InfoBox = ({info, num}) => {
	return (
		<>
			<div className="i-info-box">
				<div className="info-box">
					<span className="info-ppl">{info}</span>
					<span className="info-nnl">{num}</span>
				</div>
			</div>
		</>
	)
}

export default InfoBox