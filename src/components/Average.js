import React from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});	


function Average(data) {	
	const classes = useStyles();
	const average = data.data.reduce((total, next) => total + next.price, 0) / data.data.length;
	const av = average.toFixed()

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<div>			
			<Title>Average price: </Title>			
			<Typography component="p" variant="h4" paragraph="True">
		        £{numberWithCommas(av)}			
		    </Typography>
			<Title>Number of Sales: </Title>			
			<Typography component="p" variant="h4">
		        {data.data.length}
		    </Typography>		    
		</div>	
	)
}

export default Average