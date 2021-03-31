import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Price(data) {
	let result = data.data.reduce(function(acc, curr) {	
	  let isElemExist = acc.findIndex(function(item) {
	    return item.date === curr.date;
	  })
	  if (isElemExist === -1) {
	    let obj = {};
	    obj.date = curr.date;
	    obj.count = 1;	    
	    acc.push(obj)
	  } else {
	    acc[isElemExist].count += 1	    
	  }
	  return acc;

	}, [])



	return (
		<ResponsiveContainer width="100%" height="100%">
	        <LineChart
		      width={900}
		      height={300}
		      data={result}
		      margin={{
		        top: 5,
		        right: 30,
		        left: 20,
		        bottom: 5
		      }}
		    >
		      <CartesianGrid strokeDasharray="3 3" />
		      <XAxis dataKey="date" />
		      <YAxis />
		      <Tooltip />
		      <Legend />
		      <Line
		        type="monotone"
		        dataKey="count"
		        stroke="#8884d8"
		        activeDot={{ r: 8 }}
		      />		     
		    </LineChart>     
		</ResponsiveContainer>
     	
	)
}

export default Price