import React, { useEffect } from "react";
import "./App.css";
import Datafeed from "./trading-view/datafeed";
import TradingView from "./charting_library/charting_library.standalone";

function App() {
  // useEffect(() => {
  //   window.tvWidget = new TradingView.widget({
  //     symbol: "Bitfinex:BTC/USD", // default symbol
  //     interval: "1D", // default interval
  //     fullscreen: true, // displays the chart in the fullscreen mode
  //     container: "tv_chart_container",
  //     datafeed: Datafeed,
  //     library_path: "./charting_library/",
  //   });
  //   console.log(
  //     "__p",
  //     new TradingView.widget({
  //       symbol: "Bitfinex:BTC/USD", // default symbol
  //       interval: "1D", // default interval
  //       fullscreen: true, // displays the chart in the fullscreen mode
  //       container: "tv_chart_container",
  //       datafeed: Datafeed,
  //       library_path: "./charting_library/",
  //     })
  //   );
  // }, []); //eslint-disable-line

  return (
    <div className="App">
      <h1>hello</h1>
      <div id="tv_chart_container"></div>
    </div>
  );
}

export default App;
