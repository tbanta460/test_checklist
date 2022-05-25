import React from 'react';
import { Routes, Route} from "react-router-dom";

// Element
import {Login, Register, Home, Dashboard, MyBooks, Shop, Order, CreateBook, Chapters, CreateChap, ReadChap, SomethingWrong} from "../../pages";
// Component
import { PageNotFound, PresistLogin, RequireAuth } from '../../components'
const Routess = () => {
	const roles = {
		user: 4512,
		admin: 6523
	}
	return (
		<>
				<Routes>
					<Route path="/login" element={<Login />}/>
					<Route path="/register" element={<Register />}/>
					<Route element={<PresistLogin/>}>
						<Route element={<RequireAuth />}>
							<Route path="/browse" element={<Dashboard/>} />
							<Route path="/my-books" element={<MyBooks/>} />
							<Route path="/shop" element={<Shop/>} />
							<Route path="/order" element={<Order />} />
							<Route path="/create-chapter/:idbook/:bookname" element={<CreateChap />} />
							<Route path="/my-books/create" element={<CreateBook/>} />
						</Route >
						<Route path="/sinopsis/:idbook/:bookname" element={<Chapters />} />
						<Route path="/read/:idchap/:bookname" element={<ReadChap/>} />
						<Route path="/" element={<Home />} />
						<Route path="/*" element={<PageNotFound />} />
						<Route path="/somethingwrong" element={<SomethingWrong />} />
					</Route>
				</Routes>
		</>
	)
}

export default Routess