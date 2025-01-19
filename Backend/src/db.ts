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

const query = (text: string, params?: (string | Date | null)[]): Promise<QueryResult> => {
  return client.query(text, params);
};
const addTaskData = async (
  taskName: string,
  taskDescription: string,
  taskProgress: string,
  taskDueDate: Date,
  taskCompleted: Date | null
): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO task (taskName, taskDescription, taskProgress, taskDueDate, taskCompleted)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, taskName, taskDescription, taskProgress, taskDueDate, taskCompleted
        `;
  const values: (string | Date | null)[] = [
    taskName,
    taskDescription,
    taskProgress,
    taskDueDate,
    taskCompleted,
  ];
  return query(queryText, values);
};

const addUserData = async (
  firstName: string,
  lastName: string,
  userName: string,
  userPassword: string,
  userEmail: string
): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO taskuser (firstName, lastName, userName, userPassword, userEmail)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, firstName, lastName, userName, userPassword, userEmail
    `;
  const values: string[] = [firstName, lastName, userName, userPassword, userEmail];
  return query(queryText, values);
};

export { query, addTaskData, addUserData };
