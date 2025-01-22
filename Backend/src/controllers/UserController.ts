import { Request, Response } from 'express';
import { addUserData, query } from '../db';
import dotenv from 'dotenv';
import { hashPassword, verifyHashPassword } from '../Helper/hash';
import checkUserExists from '../Helper/UserExists';
import jwt from 'jsonwebtoken';

dotenv.config();

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
    // eslint-disable-next-line no-undef
    if (!process.env.JWT_SECRET) {
      res.status(500).send('Server configuration error');
      return;
    }
    const { userName, userPassword } = req.body;
    console.log('Received Data: ', userName, userPassword);
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

    const token = jwt.sign(
      {
        sub: user._id,
        email: user.email,
      },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET,
      { expiresIn: '20m' }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to login user',
      message: error instanceof Error ? error.message : 'Unknown Error',
    });
  }
};


export { getAllUser, getUserById, registerUser, loginUser };
