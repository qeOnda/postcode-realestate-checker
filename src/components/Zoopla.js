import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Zoopla(id) {
	const [data, setData] = useState([])
  	const [listings, setListings] = useState([])
  	const [load, setLoad] = useState(false)

	useEffect(() => {
	    axios.get(`http://api.zoopla.co.uk/api/v1/property_listings.json?postcode=${id.id}&area=London&api_key=xbfxvjmxffcrr33st82cr4zb`)	    
	      .then((response) => {
	      	setData(response)
	      	const properties = response.data.listing
	      	setListings(properties)
	      	setLoad(true)	      	
	    })
	}, [])	
	
		
	const listItems = listings.map((d) => <li key={d}>{d.displayable_address} | {d.details_url}</li>);

	
	return (			
		<div>
			<ul>				
			{listItems}
			</ul>
		</div>
	)
}


export default Zoopla

