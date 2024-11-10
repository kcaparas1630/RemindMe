import pg, { QueryResult } from 'pg'

const { Client } = pg;



const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
});

const connectClient = async () => {
    try {
        await client.connect();
        console.log('Connected to DB');
    } catch (err) {
        console.log(err);
    }
}

connectClient();

const query = (text: any, params?: any[]): Promise<QueryResult> => client.query(text, params);
const addData = async (
    id: number,
    task_name: string,
    task_description: string,
    task_progress: string
): Promise<QueryResult> => {
    const queryText: string = `
        INSERT INTO task (id, task_name, task_description, task_progress)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;
    const values: any[] = [id,task_name, task_description, task_progress];
    return query(queryText, values);
}

export { query, addData };
