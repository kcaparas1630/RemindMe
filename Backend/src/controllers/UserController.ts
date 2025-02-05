import { Request, Response } from 'express';
import { DatabaseService } from '../db';
import dotenv from 'dotenv';
import { hashPassword, verifyHashPassword } from '../Helper/hash';
import checkUserExists from '../Helper/UserExists';
import jwt from 'jsonwebtoken';
import User from '../Interface/userInteface';

dotenv.config();
/**
 *
 *  GET METHOD FOR USERS
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
const getAllUser = async (req: Request, res: Response): Promise<void> => {
  const userQuery = await DatabaseService.getUsers();
  const body = userQuery.map((row: object) => {
    return row;
  });
  res.status(200).send(body);
};
/**
 *
 *  GET METHOD WITH ID
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.body.id;

    if (!userId) {
      res.status(400).json({ error: 'User Id is required' });
      return;
    }

    const result = await DatabaseService.getUserByUserId(userId);

    if (!result) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(result);
  } catch (error: unknown | null) {
    res.status(500).json({
      error: 'Failed to fetch user',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
/**
 *
 *  POST METHOD FOR USER
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      userName,
      userPassword,
      userEmail,
    }: {
      // Made it as User['firstName'] so that when we change anything in the interface, it will not cause any error, or not be a hassle to change everything.
      firstName: User['firstName'];
      lastName: User['lastName'];
      userName: User['userName'];
      userPassword: User['userPassword'];
      userEmail: User['userEmail'];
    } = req.body;
    console.log('Received data:', { firstName, lastName, userName, userPassword, userEmail });
    const hashedPasssword = await hashPassword(userPassword);
    const lowerCaseEmail = userEmail.toLowerCase();
    console.log(lowerCaseEmail);
    const userExists = await checkUserExists(userName, userEmail);
    // if user exists send status 403 (Forbidden)
    if (userExists) {
      res.status(403).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    const result = await DatabaseService.addUser(
      firstName,
      lastName,
      userName,
      hashedPasssword,
      lowerCaseEmail
    );

    console.log(result);
    // Send success response
    res.status(201).json({
      success: true,
      message: 'User has succesfully been added',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to register user',
      message: error instanceof Error ? error.message : 'Unknown Error',
    });
  }
};
/**
 *
 *  ALSO A POST METHOD FOR USER BUT FOR LOGIN PURPOSES
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // eslint-disable-next-line no-undef
    if (!process.env.JWT_SECRET) {
      res.status(500).send('Server configuration error');
      return;
    }
    const {
      userName,
      userPassword,
    }: { userName: User['userName']; userPassword: User['userPassword'] } = req.body;
    console.log('Received Data: ', userName, userPassword);
    // Checks if user exists in the postgresql database using the userName params
    const userResult = await DatabaseService.getUserByUserName(userName);
    // check the result if not null or empty string
    if (!userResult) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
      return;
    }
    // assigns the userResult into a user variable.
    const user: User = userResult;

    // verify password
    const isPasswordCorrect = await verifyHashPassword(userPassword, user.userPassword);

    if (!isPasswordCorrect) {
      res.status(401).send({
        success: false,
        message: 'Invalid Credentials',
      });
      return;
    }

    const token = jwt.sign(
      {
        sub: user.userName,
        email: user.userEmail,
      },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET as string,
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

export { getAllUser, getUserById, loginUser, registerUser };
