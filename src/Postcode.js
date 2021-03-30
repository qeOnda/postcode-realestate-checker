import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const fetch = require('node-fetch')

function Postcode(match) {
	let { id } = useParams()
	
	const [data, setData] = useState([])

	useEffect(() => {
    	fetch("/transfers.json")
		    .then((response) => response.json())
		    .then((data) => setData(data))
	}, [])

	console.log(data)
	return(
		<div>
			<Link to="/">HOME</Link>
			<div>
				<h1>POSTCODE</h1>
				<p>Hi {id}</p>
				{data.filter(d => d.postcode === id).map(filtered => (
					<li>
						{filtered.price} | {filtered.date}
					</li>
				))}
			</div>	
		</div>
	)
}

export default Postcode