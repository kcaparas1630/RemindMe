import pg from 'pg'

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

const query = (text: any, params?: any[]): Promise<any> => client.query(text, params);

export default query;
