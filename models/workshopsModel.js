// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getWorkshops() {
  // Query the database and return all workshops

  // Define the SQL query to fetch all workshops from the 'workshops' table
  const queryText = "SELECT * FROM workshops";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

// export async function getResponseById(id) {
//   // Query the database and return the response with a matching id or null

//   // Define the SQL query to fetch the response with the specified id from the 'workshops' table
//   const queryText = "SELECT * FROM workshops WHERE id = $1";

//   // Use the pool object to send the query to the database
//   // passing the id as a parameter to prevent SQL injection
//   const result = await pool.query(queryText, [id]);

//   // The rows property of the result object contains the retrieved records
//   // If a response with the specified id exists, it will be the first element in the rows array
//   // If no response exists with the specified id, the rows array will be empty
//   return result.rows[0] || null;
// }

// export async function createResponse(response) {
//   // Query the database to create a response and return the newly created response

//   // Define the SQL query for inserting a new response into the 'workshops' table
//   const queryText = `
//       INSERT INTO workshops (cause, solution, error_id)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//   // Use the pool object to send the query to the database
//   // Parameterize the query to prevent SQL injection
//   const result = await pool.query(queryText, [
//     response.cause,
//     response.solution,
//     response.error_id,
//   ]);

//   // The rows property of the result object contains the inserted record
//   return result.rows[0];
// }

// export async function updateResponseById(id, updates) {
//   // Query the database to update a response and return the newly updated response or null

//   // Define the SQL query for updating the specified response in the 'workshops' table
//   const queryText = `
//       UPDATE workshops
//       SET cause = COALESCE($1, cause), solution = COALESCE($2, solution), error_id = COALESCE($3, error_id)
//       WHERE id = $4
//       RETURNING *;
//     `;

//   // Use the pool object to send the query to the database
//   // Parameterize the query to prevent SQL injection
//   const result = await pool.query(queryText, [
//     updates.cause,
//     updates.solution,
//     updates.error_id,
//     id,
//   ]);

//   // The rows property of the result object contains the updated record
//   // If no response exists with the specified id, the rows array will be empty
//   return result.rows[0] || null;
// }

// export async function deleteResponseById(id) {
//   // Query the database to delete a response and return the deleted response or null

//   // Define the SQL query for deleting the specified response from the 'workshops' table
//   const queryText = `
//       DELETE FROM workshops
//       WHERE id = $1
//       RETURNING *;
//     `;

//   // Use the pool object to send the query to the database
//   // Parameterize the query to prevent SQL injection
//   const result = await pool.query(queryText, [id]);
//   console.log("Hello");
//   console.log(result.rows[0]);

//   // The rows property of the result object contains the deleted record
//   // If no response exists with the specified id, the rows array will be empty
//   return result.rows[0] || null;
// }