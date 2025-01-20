import { query } from '../db';

const checkUserExists = async (username: string, userEmail: string): Promise<boolean> => {
  console.log('Received username:', username);

  // Query the database
  const userResult = await query(
    'SELECT "userName", "userEmail" FROM taskuser WHERE "userName" = $1 OR "userEmail" = $2',
    [username, userEmail]
  );

  // Return true if a user is found, false otherwise
  return userResult.rows.length > 0;
};

export default checkUserExists;
