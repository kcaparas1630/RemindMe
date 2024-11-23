import { Request, Response } from 'express';
import { addUserData, query } from '../db';
import { hashPassword, verifyHashPassword } from '../Helper/hash';


const getAllUser = async (req: Request, res: Response): Promise<void> => {
    const userQuery = await query('Select * from taskUser');
    const body = userQuery.rows.map((row: any) => row);
    res.status(200).send(body);
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.body.id;

        if (!userId) {
            res.status(400).json({ error: "User Id is required" });
            return;
        }

        const result = await query (
            "SELECT * FROM taskUser WHERE id = $1",
            [userId]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.status(200).json(result.rows[0]);
    } catch (error: any) {
        res.status(500).json({
            error: "Failed to fetch user",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};

const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { first_name, last_name, username, user_password, user_email } = req.body;
        console.log('Received data:', { first_name, last_name, username, user_password, user_email });
        const hashedPasssword = await hashPassword(user_password);

        const result = await addUserData(
            first_name,
            last_name,
            username,
            hashedPasssword,
            user_email
        );

        // Send success response
        res.status(201).json({
            success: true,
            message: 'User has succesfully been added',
            data: result.rows[0],
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to register user',
            message: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {username, user_password} = req.body;
        const userResult = await query(
            'SELECT id, username, user_password, first_name, last_name FROM taskUser WHERE username = $1',
            [username]
        );
        // check if user exists
        if (userResult.rows.length === 0) {
            res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
            return;
        }
        const user = userResult.rows[0];

        // verify password
        const isPasswordCorrect = await verifyHashPassword(user_password, user.user_password);

        if (!isPasswordCorrect) {
            res.status(401).send({
                success: false,
                message: 'Invalid Credentials'
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Login Successful'
        })
        
    } catch (error) {
         res.status(500).json({
            error: 'Failed to register user',
            message: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};

export { getAllUser, getUserById, registerUser, loginUser };
