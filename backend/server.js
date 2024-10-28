import express, { json, query } from "express";
import cors from "cors";
import { createConnection } from "mysql2";
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "Apple@5044",
  database: "zensar_test",
  insecureAuth: true,
});

//middleware
app.use(cors());
app.use(json());

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/api/hello", (req, res) => {
  res.send("hello from server");
});

//login for customer
app.post("/api/customer/login", (req, res) => {
  const { id, name, address, email_id, password } = req.body;
  const query =
    "INSERT INTO customer (id, name, address, email_id, password) VALUES (?, ?, ?, ?, ?)";
  const values = [parseInt(id), name, address, email_id, password];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      res.status(500).send("Error inserting data into the database");
      return;
    }

    res.status(200).send(`Customer with ID ${id} added successfully.`);
  });
});

//get all the customers data
app.get("/api/customers", (req, res) => {
  connection.execute("SELECT * FROM customer", (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Server Error");
      return;
    }
    res.send(results);
  });
});

//add a product via admin
app.post("/api/admin/product", (req, res) => {
  const { product_id, product_price, product_name, category_name } = req.body;
  const query =
    "INSERT INTO products (product_id, product_price, product_name, category_name) VALUES (?, ?, ?, ?)";
  const values = [
    parseInt(product_id),
    product_price,
    product_name,
    category_name,
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      res.status(500).send("Error inserting data into the database");
      return;
    }

    res.status(200).send(`Product with ID ${product_id} added successfully.`);
  });
});

//get all products
app.get("/api/products/", (req, res) => {
  connection.execute("SELECT * FROM products", (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Server Error");
      return;
    }
    res.send(results);
  });
});

//sort products by category
app.get("/api/products/category/:category_name", (req, res) => {
  const category = req.params.category_name;

  const query = "SELECT * FROM products having category_name =  ?";

  connection.query(query, category, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Server Error");
      return;
    }
    res.status(200).send(results);
  });
});

//add a discount to the product
app.post("/api/admin/products/:product_id/:discount", (req, res) => {
  // const category = req.params.category_name;
  const product_id = req.params.product_id;
  const discount_price = req.params.discount;

  const product_price = "fetch product price from database using product_id: ";

  const values =
    "calculate discounted price using product price and discounted price";

  const updateDiscount = "update the discounted price in the database";

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Server Error");
      return;
    }
    res.send(results);
  });
});

app.get("/api/products/:category/priceChange", (req, res) => {
  const category_type = req.params.category;
  const query =
    "SELECT product_price, discount, category_name FROM products where category_name =  ?";

  // const query =
  //   "SELECT product_price, product_name, discount FROM products HAVING category_name = ?";
  const values = category_type;

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Server Error");
      return;
    }
    res.send(results);
  });
});
