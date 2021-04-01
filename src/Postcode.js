import React from 'react'
import { useParams, Link } from 'react-router-dom'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react'
import Average from './components/Average'
import Types from './components/Types'
import OldNew from './components/OldNew'
import PPD from './components/PPD'
import Price from './components/Price'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Zoopla from './components/Zoopla'
import T from './components/T'




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

const fetch = require('node-fetch')

function Postcode(match) {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	let { id } = useParams()
	
	const [data, setData] = useState([])

	useEffect(() => {
    	fetch("/transfers.json")
		    .then((response) => response.json())
		    .then((data) => setData(data.filter(d => d.postcode === id)))
	}, [id])

	

	return(
		<Box className={classes.root} p={6}	>			
			<Grid
				container 				
				spacing={3}
				direction="row"
				alignItems="stretch"
				justify="center"				
			>	
				<Grid item xs={12} align="center">		
					<Typography component="p" variant="h4" className={classes.typestyle}>POSTCODE: {id}</Typography>		    							
				</Grid>			
				<Grid item xs={12} md={9} >					
					<Paper className={fixedHeightPaper}>
						<Price data={data} />									
					</Paper>	
		        </Grid>				
		        <Grid item xs={12} md={3} >				
	              <Paper className={fixedHeightPaper}>
	                <Average data={data} />
	              </Paper>		            
		        </Grid>    		        
				
		        <Grid item xs={12} md={4}>					
					<Paper className={classes.fixedPie}>
						<OldNew data={data} />						
					</Paper>		
				</Grid>        			
				<Grid item xs={12} md={4}>					
					<Paper className={classes.fixedPie}>
						<Types data={data} />
					</Paper>		
				</Grid>
				<Grid item xs={12} md={4} >					
					<Paper className={classes.fixedPie}>
						<PPD data={data} />
					</Paper>		
				</Grid>
				
				<Grid item xs={12}  style={{ height: "100%" }}>										
					<Zoopla id={id}/>	        	
				</Grid>				
		    </Grid>  													
		</Box>
	)
}

export default Postcode