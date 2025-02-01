import pg, { QueryResult } from 'pg';
import { env } from 'process';

const { Client } = pg;

const client = new Client({
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DATABASE,
});

const connectClient = async () => {
  try {
    await client.connect();
    console.log('Connected to DB');
  } catch (err) {
    console.log(err);
  }
};

connectClient();
/**
 *
 *
 * @param {string} text = Query Text. For example, 'Select * from table'
 * @param {((string | Date | null)[])} [params] -- Params to based on the query Text, for example "userName" = [userName]
 * @return {*}  {Promise<QueryResult>}
 */
const query = (text: string, params?: (string | Date | null)[]): Promise<QueryResult> => {
  return client.query(text, params);
};

/**
 *
 *  ADD TO DB TASK DATA
 * @param {string} taskName
 * @param {string} taskDescription
 * @param {string} taskProgress
 * @param {Date} taskDueDate
 * @param {(Date | null)} taskCompleted
 * @return {*}  {Promise<QueryResult>}
 */
const addTaskData = async (
  taskName: string,
  taskDescription: string,
  taskProgress: string,
  taskDueDate: Date,
  taskTodayDate: Date,

): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO task ("taskName", "taskDescription", "taskProgress", "taskTodayDate", "taskDueDate")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, "taskName", "taskDescription", "taskProgress", "taskTodayDate", "taskDueDate"
        `;
  const values: (string | Date | null)[] = [
    taskName,
    taskDescription,
    taskProgress,
    taskTodayDate,
    taskDueDate,
  ];
  return query(queryText, values);
};

/**
 *
 *  ADD TO DB USER DATA
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} userName
 * @param {string} userPassword
 * @param {string} userEmail
 * @return {*}  {Promise<QueryResult>}
 */
const addUserData = async (
  firstName: string,
  lastName: string,
  userName: string,
  userPassword: string,
  userEmail: string
): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO taskuser ("firstName", "lastName", "userName", "userPassword", "userEmail")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, "firstName", "lastName", "userName", "userPassword", "userEmail"
    `;
  const values: string[] = [firstName, lastName, userName, userPassword, userEmail];
  return query(queryText, values);
};

export { query, addTaskData, addUserData };
