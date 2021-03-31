import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

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
		<ResponsiveContainer width="95%" height={200}>
			<PieChart >	      
		      <Pie
		        dataKey="count"
		        data={result}
		        cx="50%" 
		        cy="50%"
		        innerRadius={40}
		        outerRadius={80}
		        fill="#82ca9d"
		        label={(entry) => entry.type} 
		      />
		      <Tooltip />
		    </PieChart>		   
		</ResponsiveContainer>
	)
}


export default Types