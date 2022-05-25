import React from 'react';
import './index.css';

const Error = ({message}) => {
    return (
        <>
            <div className="err">
				<span className="txt-err">{message}</span>
			</div>
        </>
    )
}

export default Error