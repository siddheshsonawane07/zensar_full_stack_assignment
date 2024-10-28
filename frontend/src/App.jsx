import React, { useState, useEffect } from "react";
import LoginComponent from "./components/customers/login";
// import DisplayCategories from "./components/customers/DisplayCategories";

// function App() {
//   const [data, setData] = useState(null); // Initialize state to null

//   useEffect(() => {
//     // Fetch data from the Express server
//     axios
//       .get("/api/customers")
//       .then((response) => {
//         setData(response.data); // Set the fetched data to state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to run the effect only once after the initial render

//   return (
//     <div>
//       <h1>Customer Data:</h1>
//       {data ? (
//         <ul>
//           {data.map((customer) => (
//             <li key={customer.id}>
//               <strong>Name:</strong> {customer.name}, <strong>Email:</strong>{" "}
//               {customer.email_id}, <strong>Address:</strong> {customer.address}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router> */}
      <LoginComponent />
      {/* <DisplayCategories /> */}
    </div>
  );
}
export default App;
