import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Typography from '@material-ui/core/Typography';
import Title from './Title'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  typestyle: {
  	color: theme.palette.text.secondary
  }  
}));


function PPD (data) {
	const classes = useStyles();
	let result = data.data.reduce(function(acc, curr) {	
	  let isElemExist = acc.findIndex(function(item) {
	    return item.ppd === curr.ppd;
	  })
	  if (isElemExist === -1) {
	    let obj = {};
	    obj.ppd = curr.ppd;
	    obj.count = 1;
	    obj.price = curr.price;
	    acc.push(obj)
	  } else {
	    acc[isElemExist].count += 1
	    acc[isElemExist].price += curr.price
	  }
	  return acc;

	}, [])

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const listItems = result.map((d) => <li key={d.ppd}>{d.ppd} | {numberWithCommas(Math.trunc(d.price/d.count))}</li>);

	
	return (
		<Box>			
			<Title>Type of Transaction*:</Title>					
			<ResponsiveContainer width="95%" height={200}>
				<PieChart >	      
			      <Pie
			        dataKey="count"
			        data={result}
			        cx="50%" 
			        cy="50%"
			        innerRadius={40}
			        outerRadius={70}
			        fill="#82ca9d"
			        nameKey="ppd"
			        label={(entry) => entry.ppd} 
			      />
			      <Tooltip  />
			    </PieChart>		   
			</ResponsiveContainer>
			<Typography component="p" variant="caption" paragraph="True" className={classes.typestyle}>
		        *Additional includes transfers under a power of sale/repossessions, buy-to-lets and transfers to non-private individuals.			
		    </Typography>
		</Box>	
	)
}

export default PPD;