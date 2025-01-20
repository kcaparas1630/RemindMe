import { Request, Response } from 'express';
import { addUserData, query } from '../db';
import { hashPassword, verifyHashPassword } from '../Helper/hash';
import checkUserExists from '../Helper/UserExists';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import DoneFunction from '../Interface/doneFuncType';

const getAllUser = async (req: Request, res: Response): Promise<void> => {
  const userQuery = await query('Select * from taskuser');
  const body = userQuery.rows.map((row: object) => {
    return row;
  });
  res.status(200).send(body);
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.body.id;

    if (!userId) {
      res.status(400).json({ error: 'User Id is required' });
      return;
    }

    const result = await query('SELECT * FROM taskuser WHERE id = $1', [userId]);

    if (result.rowCount === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(result.rows[0]);
  } catch (error: unknown | null) {
    res.status(500).json({
      error: 'Failed to fetch user',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, userName, userPassword, userEmail } = req.body;
    console.log('Received data:', { firstName, lastName, userName, userPassword, userEmail });
    const hashedPasssword = await hashPassword(userPassword);
    const lowerCaseEmail = userEmail.toLowerCase();
    console.log(lowerCaseEmail);
    const userExists = await checkUserExists(userName, userEmail);

    if (userExists) {
      res.status(403).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    const result = await addUserData(firstName, lastName, userName, hashedPasssword, userEmail);

    // Send success response
    res.status(201).json({
      success: true,
      message: 'User has succesfully been added',
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to register user',
      message: error instanceof Error ? error.message : 'Unknown Error',
    });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName, userPassword } = req.body;
    console.log("Received Data: ", userName, userPassword)
    const userResult = await query(
      'SELECT "userName", "userPassword" FROM taskuser WHERE "userName" = $1',
      [userName]
    );
    // check if user exists
    if (userResult.rows.length === 0) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
      return;
    }
    const user = userResult.rows[0];

    // verify password
    const isPasswordCorrect = await verifyHashPassword(userPassword, user.userPassword);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      res.status(401).send({
        success: false,
        message: 'Invalid Credentials',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Login Successful',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to login user',
      message: error instanceof Error ? error.message : 'Unknown Error',
    });
  }
};

passport.use(
  new BasicStrategy(async (userName: string, userPassword: string, done: DoneFunction) => {
    try {
      const userResult = await query(
        'SELECT id, username, user_password, first_name, last_name FROM taskuser WHERE username = $1',
        [userName]
      );

      if (userResult.rows.length === 0) {
        return done(null, false, {
          message: 'User not found',
        });
      }

      const user = userResult.rows[0];

      const isPasswordCorrect = await verifyHashPassword(userPassword, user.user_password);

      if (!isPasswordCorrect) {
        return done(null, false, {
          message: 'Incorrect username or password',
        });
      }

      // valid password, return user
      return done(null, user);
    } catch (error: unknown | null) {
      if (error instanceof Error) {
        return done(error);
      }
      return done(new Error('An unknown error occurred'));
    }
  })
);

export { getAllUser, getUserById, registerUser, loginUser };
