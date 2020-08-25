import React from "react";
import { Link } from "react-router-dom";
import stocksData from "../stock-data";

function Dashboard() {
  const linkStyle = {
    color: "black",
  };

  //   console.log(stocksData);
  let list = stocksData.map((stock, index) => {
    return (
      <div className="stocks" key={index}>
        <p>
          <Link style={linkStyle} to={`/stocks/${stock.symbol}`}>
            {stock.name} - {stock.symbol}
          </Link>
        </p>
      </div>
    );
  });

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      {list}
    </div>
  );
}

export default Dashboard;
