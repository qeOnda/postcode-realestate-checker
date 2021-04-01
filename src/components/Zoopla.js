import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaleCard from './Card'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
	background: theme.palette.background.paper,
	minWidth: "100%",
  },  
  fixedHeight: {
    height: 240,
  },
  fixedPie: {
    height: 300,
    padding: theme.spacing(2),
  },
  zoopHeight: {
    height: 720,
  },
  typestyle: {
  	color: theme.palette.text.secondary
  }  
}));







function Zoopla(id) {
	const [data, setData] = useState([])
  	const [listings, setListings] = useState([])
  	const [load, setLoad] = useState(false)

  	const classes = useStyles();  	

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

	console.log(listings)
	
	return (			
		<Box className={classes.root}>			
			
			<Grid
				container 				
				spacing={3}
				direction="row"
				alignItems="stretch"
				justify="center"				
			>	
				
				<Grid item xs={12} md={3} align="center">					
	                <SaleCard {...listings[0]}/>	              	
				</Grid>  
				<Grid item xs={12} md={3} align="center">					
	                <SaleCard {...listings[1]}/>	              	
				</Grid>  
				<Grid item xs={12} md={3} align="center">					
	                <SaleCard {...listings[2]}/>	              	
				</Grid>
				<Grid item xs={12} md={3} align="center">					
	                <SaleCard {...listings[3]}/>	              	
				</Grid>  
			</Grid>  			
		</Box>
	)
}


export default Zoopla

