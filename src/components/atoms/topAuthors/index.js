import React from 'react';
import './index.css';
import { Avatar } from '../../../assets'
const TopAuthors = ({data = []}) => {
    return(
        <>
        <div className="wrp-ath">
            <h4 className="nm-bk-typ lbg-txt">Top Authors</h4>
            <div className="ct-wtp-ath">
                {data.length !== 0 
                ? data.map((users, i) => { 
                return i <= 8 && (
                    <div key={users.userId}className="ath-ct">
                        <div className="ath-chd">
                            <img className="ath-img"src={Avatar} alt="Gambar dari top authors"/>
                            <span className="ath-txt">{users.username}</span>
                        </div>
                    </div>
                    )
                })
            :null}
            </div>
        </div>
        </>
    )
}

export default TopAuthors