import '../App.css'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

export default function Home() {
	let [data, setData] = useState(null)
	
	useEffect(() => {
		fetch("/api/numofusers")
			.then(res => {
				return res.text()
			})
			.then(data => {
				setData(data)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])
	

	return (
		<div>
			<h1>My very bad and unsecure website</h1>
			{ data !== null ? <h3 style={{ fontWeight: "normal" }}>We boast a totally real suprising amount of { data } new users today!</h3> : <h3 style={{ fontWeight: "normal" }}>Loading...</h3> }
			{ data !== null ? <Link to="/signup" style={{ fontWeight: "bold" }}>Sign up today to join those { data } epic new users!</Link> : <Link to="/signup">Sign up</Link> }	
		</div>
	);
}
