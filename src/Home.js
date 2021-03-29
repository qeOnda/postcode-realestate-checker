import React from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Home({ data }) {

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ width: 300 }}>
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
	        </header>    
        </div>
	)
}