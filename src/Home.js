import React, { useState } from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
	spacing: 8,
  },  
  typestyle: {
	color: theme.palette.text.secondary
  }  
}));

export default function Home({ data }) {	
	const classes = useStyles();
	const [postcode, setPostcode] = useState()	

	return (				
		<Grid 
			container 			
			alignItems="center"
			justify="center"
			style={{ minHeight: '70vh', maxWidth: '100%' }}
			direction="column"
			className={classes.root}
			>
			<Container maxWidth="xs">
				<Box component="span" m={1} align="center" className={classes.typestyle}>			
					<h1>Enter a London Postcode:</h1>	
					<Typography component="p" variant="h6">
		        		Placeholder something about what the search does.
		    		</Typography>							
				</Box>				
				<Box component="span" m={1}>			
					<Autocomplete					
						id="clickable postcode"				      
						disableClearable				      
						options={data.map((option) => option.postcode)}
						onChange={(event, value) => setPostcode(value)}						
						renderOption={(option) => (
							<React.Fragment>
								<span
									style={{ cursor: "pointer" }}
									onClick={() => {
										window.location.href = option;
									}}												
									>
									{option}
								</span>
							</React.Fragment>	
						)}
						renderInput={(params) => (
							<TextField
							{...params}
							label="Postcode eg: TXXX"
							margin="normal"
							variant="outlined"
							InputProps={{ ...params.InputProps, type: 'search' }}
							/>
						)}
					/>					
				</Box>
				<Box align="right">
					<Button variant="contained" onClick={() => {window.location.href = postcode;}}>Default</Button>	
				</Box>	
			</Container>	
		</Grid>			          	  		                
	)
}