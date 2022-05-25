import React from 'react';
import './index.css';

const CoverImage = ({altImage,srcImage, ...rest}) => {
	return (
		<>
			<div className="cover-image-book" {...rest}>
				<img src={srcImage} alt={altImage} className="image-book"/>
			</div>
		</>
	)
} 

export default CoverImage