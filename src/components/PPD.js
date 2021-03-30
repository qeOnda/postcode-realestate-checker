import React from 'react'


function PPD (data) {
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
		<div>
			PPD:
			{listItems}
		</div>
	)
}

export default PPD;