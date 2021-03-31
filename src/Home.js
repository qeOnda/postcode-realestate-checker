import React from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },  
}));

export default function Home({ data }) {	
	const classes = useStyles();

	return (		
		<div className={classes.root}>
			<Grid 
				container 
				spacing={3}
				alignItems="center"
				justify="center"
				style={{ minHeight: '80vh', maxWidth: '100%' }}
				direction="column"
			>
				<Grid item xs={12} align="center">					
					<h1>Enter a London Postcode:</h1>								
				</Grid>				
				  <Grid item xs={12}>
					<div style={{ width: 300, }} align="center">
			            <Autocomplete
					      freeSolo
					      id="clickable postcode"				      
					      disableClearable				      
					      options={data.map((option) => option.postcode)}
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
		          	</div>
		        </Grid>  	
	        </Grid>  	          	          		        
        </div>	        
	)
}