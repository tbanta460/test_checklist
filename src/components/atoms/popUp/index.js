import React from 'react';
import './index.css';

const PopUp = ({text, buttonTitle, ...rest}) => {
    return(
        <>
            <div className="ct-popup"{...rest}>
                <div className="sc-one">
                    <span className="txt-popup">
                        {text}
                    </span>
                    <button className="btn-popup">{buttonTitle}</button>
                </div>
            </div>
        </>
    )
}

export default PopUp