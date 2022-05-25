import React from 'react';
import './index.css';

const Upload = ({img, ...rest}) => {
	return (
		<>
			<div className="main">
				{
					img && <img src={img} alt="image-preview" className="image-preview" />
				}
				<input type="file" {...rest}/>
			</div>
		</>
	)
}

export default Upload