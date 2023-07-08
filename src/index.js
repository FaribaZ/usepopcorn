import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         size={30}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={10} color="red" size={30} />
    <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
