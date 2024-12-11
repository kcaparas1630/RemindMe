import { query } from '../db';

const checkUserExists = async (username: string, userEmail: string): Promise<boolean> => {
  console.log('Received username:', username);

  // Query the database
  const userResult = await query(
    'SELECT username, user_email FROM taskUser WHERE username = $1 OR user_email = $2',
    [username, userEmail]
  );

  // Return true if a user is found, false otherwise
  return userResult.rows.length > 0;
};

export default checkUserExists;
