import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

// Components
import { SmallListBooks } from '../../'

const ListByGenre = ({romance, action, mystery}) => {
    let newArr = [
        {
            title:"Action",
            data: action,
            id: 120942
        },
        {
            title:"Romance",
            data:romance,
            id:142957
        },
        {
            title:"Mystery",
            data: mystery,
            id:125831
        }
    ]
    return(
        <>
            <div className="lbg-ct">
                <div className="lbg-chd">
                    <h4 className="nm-bk-typ lbg-txt">Genres</h4>
                    <div className="lbg-gnr">
                        {
                            newArr.map((books, index) => {
                                return(
                                    <div key={books.id} className={`wrp-lbg lbg-${index}`}>
                                        <h5 className="lbg-ttl">{books.title}</h5>
                                        {
                                            books.data !== undefined 
                                            ?books.data.map((data, i) => {
                                                return i <= 4 && (
                                                    <div className="slide-show" key={data.idbook}><Link className="nav-link" to={`/sinopsis/${data.idbook}/${data.title.split(" ").join("-")}`}><SmallListBooks  authorBook={data.author} titleBook={data.title} srcc={data.cover} altt={`ini adalah cover dari gambar ${data.title}`}/></Link></div>
                                                )
                                            })
                                            : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListByGenre