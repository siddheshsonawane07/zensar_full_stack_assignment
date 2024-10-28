// import { useEffect, useState } from "react";
// import axios from "axios";

// const DisplayCategories = () => {
//   const [categoryList, setCategory] = useState();

//   useEffect(() => {
//     axios
//       .get("/api/customers")
//       .then((response) => {
//         setCategory(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div>x
//       {categoryList ? (
//         <ul>
//           {data.map((product_id) => (
//             <li key={category_name}>
//               <strong>Name:</strong> {product.name}, <strong
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>loading</p>
//       )}
//     </div>
//   );
// };
// export default DisplayCategories;
