import React from "react";
import stocksData from "../stock-data";

function Stock(props) {
  console.log("routerProps", props);
  let stockToDisplay = stocksData.filter((stock) => {
    // if the stock symbol from stocksData matchs a symbol passed down from routerProps,
    // then push that into the stockToDisplay array
    return stock.symbol === props.match.params.symbol;
  });

  let change = stockToDisplay[0].change;
  return (
    <div className="stock">
      {/* this displays the first stock that was filtered into the stockToDisplay array and grabs symbol and last price */}
      <p>{stockToDisplay[0].name}</p>
      <p>{stockToDisplay[0].symbol}</p>
      <p>${stockToDisplay[0].lastPrice}</p>
      <p>Change: ${change.toFixed(3)}</p>
    </div>
  );
}

export default Stock;
