import { query } from "../db";

const checkUserExists = async (username: string, userEmail: string): Promise<boolean> => {
    const userResult = await query(
        'SELECT * FROM taskUser WHERE username = $1',
        [username]
    );
    const user = userResult.rows[0];

    if (username === user.username || userEmail === user.user_email) {
        return true;
    }
    
    return false;
}

export default checkUserExists;
