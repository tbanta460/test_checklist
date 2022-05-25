import React from 'react';
import './index.css';

const CoverImg = ({srcImg, altImg, sizeCover}) => {
    return(
        <img className={sizeCover} src={srcImg} alt={altImg}/>
    )
}

export default CoverImg