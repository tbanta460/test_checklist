import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Components
import { ArrowPrev, ArrowNext } from '../../../'
const HeroSlide = ({dataBooks = [], titleGenre, id}) => {
	const settings = {
		dots: true,
		infinite: true,
    className:"center",
    centerMode:true,
		speed: 500,
		arrows:true,
    centerPadding: "60px",
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <ArrowPrev />,
		nextArrow: <ArrowNext />,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]

	}
	return(
		<>
			<div className="hs-books">
        <h2>{titleGenre}</h2>
				<Slider {...settings}>
          {
              dataBooks.length !== 0
              ? dataBooks.map((data, index) => {
                return <div id={`${id}-${index}`} className="slide-show-hero" key={data.idbook}><Link className="nav-link-hero" to={`/sinopsis/${data.idbook}/${data.title.split(" ").join("-")}`}><h3 className="title-books-genre-hero">{data.title}</h3><span className="exc-genre-hero">{data.author}</span><div className="bg-trans"><img src={`/${data.cover}`} alt="gambar cove" className="hi-cover"/></div></Link></div>
              })
              : null
          }
				</Slider>
			</div>
		</>
	)
}

export default HeroSlide