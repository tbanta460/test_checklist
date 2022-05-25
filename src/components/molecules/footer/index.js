import React from 'react';
import './index.css'

import {Logo, Facebook, Instagram, Twitter} from "../../../assets";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="mf">
					<div className="ptf">
						<img src={Logo} alt="Logo"  className="lgf"/>
						<p>RWB adalah sebuah platform untuk menuangkan ide-ide ke dalam bentuk tulisan, RWB tidak memberikan batasan ke pada user untuk menuangkan ide mereka. Tidak peduli sebanyak atau sedikit teks yang akan mereka tuangkan, RWB juga memberikan pilihan ke pada pengguna atau user untuk mempublikasikan tulisan mereka atau menyimpanya dalam bentuk private.</p>
					</div>
					<div className="pof">
						<div className="cpo">
							<span className="qm">Pintasan</span>
							<ul className="pintasan">
								<li>
									<span>Browse</span>
								</li>
								<li>
									<span>My Books</span>
								</li>
								<li>
									<span>Shop</span>
								</li>
								<li>
									<span>Order</span>
								</li>
							</ul>
						</div>
						<div className="cpt">
							<span className="sm">Social Media</span>
							<ul className="social-media">
								<li>
									<img alt="logo social media facebook" src={Facebook}/>
								</li>
								<li>
									<img alt="logo social media twitterk" src={Instagram}/>
								</li>
								<li>
									<img alt="logo social media instagram" src={Twitter}/>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
			</footer>
		</>
	)
}

export default Footer