import React from 'react'


function OldNew(data) {
	let result = data.data.reduce(function(acc, curr) {
	  let isElemExist = acc.findIndex(function(item) {
	    return item.age === curr.age;
	  })
	  if (isElemExist === -1) {
	    let obj = {};
	    obj.age = curr.age;
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

	const listItems = result.map((d) => <li key={d.age}>{d.age} | {numberWithCommas(Math.trunc(d.price/d.count))}</li>);

	console.log(result)

	return (
		<div>
			Old or new?
			{listItems}
		</div>
	)
}

export default OldNew