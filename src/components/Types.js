import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Typography from '@material-ui/core/Typography';
import Title from './Title'
import Box from '@material-ui/core/Box';



function Types(data) {
	let result = data.data.reduce(function(acc, curr) {	
	  let isElemExist = acc.findIndex(function(item) {
	    return item.type === curr.type;
	  })
	  if (isElemExist === -1) {
	    let obj = {};
	    obj.type = curr.type;
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

	const listItems = result.map((d) => <li key={d.type}>{d.type} | {numberWithCommas(Math.trunc(d.price/d.count))}</li>);


	return (		
		<Box>			
			<Title>Property Types: </Title>			
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
			        nameKey="type"
			        label={(entry) => entry.type} 
			      />
			      <Tooltip  />
			    </PieChart>		   
			</ResponsiveContainer>
		</Box>	
	)
}


export default Types