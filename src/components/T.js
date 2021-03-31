import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
	background: theme.palette.background.paper,
	height: 240,
  },    
}));

function T() {
	const classes = useStyles();

	return (
		<Box className={classes.root} >			
			<Grid
				container 				
				spacing={3}
				alignItems="center"
				justify="center"
				style={{ minHeight: '80vh', maxWidth: '100%' }}
				
			>	
				<Grid item xs={12} md={9} align="center">					
					<Paper>
					Gell	
					</Paper>
				</Grid>		
			</Grid>	
		</Box>
	)
}

export default T