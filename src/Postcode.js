import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Average from './components/Average'
import Types from './components/Types'
import OldNew from './components/OldNew'
import PPD from './components/PPD'


const fetch = require('node-fetch')

function Postcode(match) {
	let { id } = useParams()
	
	const [data, setData] = useState([])

	useEffect(() => {
    	fetch("/transfers.json")
		    .then((response) => response.json())
		    .then((data) => setData(data.filter(d => d.postcode === id)))
	}, [id])

	console.log(data)

	return(
		<div>
			<Link to="/">HOME</Link>
			<div>
				<h1>POSTCODE</h1>
				<p>Hi {id}</p>
				<Average data={data} />
				<Types data={data} />  		
				<OldNew data={data} />  		
				<PPD data={data} /> 
			</div>	
		</div>
	)
}

export default Postcode