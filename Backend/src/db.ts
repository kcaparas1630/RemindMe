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
  task_name: string,
  task_description: string,
  task_progress: string,
  task_due_date: Date,
  task_completed: Date | null
): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO task (task_name, task_description, task_progress, task_due_date, task_completed)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, task_name, task_description, task_progress, task_due_date, task_completed
    `;
  const values: (string | Date | null)[] = [
    task_name,
    task_description,
    task_progress,
    task_due_date,
    task_completed,
  ];
  return query(queryText, values);
};

const addUserData = async (
  first_name: string,
  last_name: string,
  username: string,
  user_password: string,
  user_email: string
): Promise<QueryResult> => {
  const queryText: string = `
        INSERT INTO taskUser (first_name, last_name, username, user_password, user_email)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, first_name, last_name, username, user_password, user_email
    `;
  const values: string[] = [first_name, last_name, username, user_password, user_email];
  return query(queryText, values);
};

export { query, addTaskData, addUserData };
