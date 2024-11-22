import { Request, Response } from 'express';
import { addUserData, query } from '../db';

const getAllUser = async (req: Request, res: Response): Promise<void> => {
    const userQuery = await query('Select * from user');
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
            "SELECT * FROM user WHERE id = $1",
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

export { getAllUser, getUserById };
