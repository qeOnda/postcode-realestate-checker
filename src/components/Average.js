import React from 'react'


function Average(data) {	
	const average = data.data.reduce((total, next) => total + next.price, 0) / data.data.length;
	const av = average.toFixed()

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	return (
		<div>
			<div>
				The average price: {numberWithCommas(av)}			
			</div>
			<div>
				Number sold: {data.data.length}
			</div>		
		</div>	
	)
}

export default Average