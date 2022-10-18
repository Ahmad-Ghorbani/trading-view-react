// Datafeed implementation, will be added later
import Datafeed from "./datafeed.js";
import { TradingView } from "../charting_library/charting_library.standalone";

window.tvWidget = new TradingView.widget({
  symbol: "Bitfinex:BTC/USD", // default symbol
  interval: "1D", // default interval
  fullscreen: false, // displays the chart in the fullscreen mode
  container: "tv_chart_container",
  datafeed: Datafeed,
  library_path: "../charting_library/",
});
