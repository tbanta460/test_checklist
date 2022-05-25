import React, { useEffect, useState } from 'react';
import './index.css'
// Image
import { Avatar } from '../../../assets'

const McMyBooks = ({ dataUser}) => {
	const [createdUser,setCreatedUser] = useState("")
	useEffect(() => {
		const dateArray = []
		if(Object.keys(dataUser).length !== 0){
			const createsr = dataUser.createdAt;
			let copp = [...createsr]
			for(let i = 0; i < copp.length; i++){
				if(copp[i].match(/[a-zA-Z]/i)){
					break;
				}else {
					dateArray.push(copp[i])
				}
			}

			setCreatedUser(dateArray.join(""))
		}
		
	},[dataUser])
	return (
		<>
			<div className="my-books-profile">
				<div className="child-profile">
					<div className="picture-profile">
						<img src={Avatar} alt="foto profile"/>
					</div>
					<div className="info-user-profile"> 
						<div className="iup-part-two iup">
							<div className="lg-text">
								<h4>{dataUser.fullname}</h4>
								<h5>Menulis adalah bagaimana cara menuangkan sebuah perasaan.</h5>
							</div>
							<div className="sml-txt">
								<span ><span className="tx">Bergabung Pada:</span>{createdUser}</span>
							</div>
						</div>
						<div className="iup-part-three iup">
							<div className="dkt">
								<span>Diikuti</span>
								<span>330</span>
							</div>
							<div className="pkt">
								<span>Pengikut</span>
								<span>870</span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</>
	)
	
}

export default McMyBooks