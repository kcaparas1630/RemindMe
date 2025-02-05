// import pg, { QueryResult } from 'pg';
// import { env } from 'process';

// const { Client } = pg;

// const client = new Client({
//   user: env.POSTGRES_USER,
//   password: env.POSTGRES_PASSWORD,
//   host: env.POSTGRES_HOST,
//   database: env.POSTGRES_DATABASE,
// });

// const connectClient = async () => {
//   try {
//     await client.connect();
//     console.log('Connected to DB');
//   } catch (err) {
//     console.log(err);
//   }
// };

// connectClient();
// /**
//  *
//  *
//  * @param {string} text = Query Text. For example, 'Select * from table'
//  * @param {((string | Date | null)[])} [params] -- Params to based on the query Text, for example "userName" = [userName]
//  * @return {*}  {Promise<QueryResult>}
//  */
// const query = (text: string, params?: (string | Date | null)[]): Promise<QueryResult> => {
//   return client.query(text, params);
// };

// /**
//  *
//  *  ADD TO DB TASK DATA
//  * @param {string} taskName
//  * @param {string} taskDescription
//  * @param {string} taskProgress
//  * @param {Date} taskDueDate
//  * @param {(Date | null)} taskCompleted
//  * @return {*}  {Promise<QueryResult>}
//  */
// const addTaskData = async (
//   taskName: string,
//   taskDescription: string,
//   taskProgress: string,
//   taskDueDate: Date,
//   taskTodayDate: Date,

// ): Promise<QueryResult> => {
//   const queryText: string = `
//         INSERT INTO task ("taskName", "taskDescription", "taskProgress", "taskTodayDate", "taskDueDate")
//         VALUES ($1, $2, $3, $4, $5)
//         RETURNING id, "taskName", "taskDescription", "taskProgress", "taskTodayDate", "taskDueDate"
//         `;
//   const values: (string | Date | null)[] = [
//     taskName,
//     taskDescription,
//     taskProgress,
//     taskTodayDate,
//     taskDueDate,
//   ];
//   return query(queryText, values);
// };

// /**
//  *
//  *  ADD TO DB USER DATA
//  * @param {string} firstName
//  * @param {string} lastName
//  * @param {string} userName
//  * @param {string} userPassword
//  * @param {string} userEmail
//  * @return {*}  {Promise<QueryResult>}
//  */
// const addUserData = async (
//   firstName: string,
//   lastName: string,
//   userName: string,
//   userPassword: string,
//   userEmail: string
// ): Promise<QueryResult> => {
//   const queryText: string = `
//         INSERT INTO taskuser ("firstName", "lastName", "userName", "userPassword", "userEmail")
//         VALUES ($1, $2, $3, $4, $5)
//         RETURNING id, "firstName", "lastName", "userName", "userPassword", "userEmail"
//     `;
//   const values: string[] = [firstName, lastName, userName, userPassword, userEmail];
//   return query(queryText, values);
// };

// export { query, addTaskData, addUserData };


import { PrismaClient } from "@prisma/client";
import { DatabaseError } from "pg";

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

prisma.$connect()
  .then(() => {
    return console.log('Connected to DB');
  })
  // change error with a custom error handler
  .catch((error: DatabaseError) => {
     throw new Error(`Database connection error: ${error} `);
  })

export class DatabaseService {
  // add task
  static async addTask(
    taskName: string,
    taskDescription: string,
    taskProgress: 'NOTSTARTED' | 'STARTED' | 'COMPLETED',
    taskDueDate: Date
  ) {
    return prisma.task.create({
      data: {
        taskName,
        taskDescription,
        taskProgress,
        taskDueDate
      }
    })
  }
  // Add user
  static async addUser(
    firstName: string,
    lastName: string,
    userName: string,
    userPassword: string,
    userEmail: string
  ) {
    return prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        userPassword,
        userEmail,
      },
    });
  }

  // Get all tasks
  static async getTasks() {
    return prisma.task.findMany({
      include: {
        user: true // Include related user data if needed
      }
    })
  }
  // Get all Users
  static async getUsers() {
    return prisma.user.findMany({
      include: {
        tasks: true // Include related task data if needed
      }
    })
  }

  // Get Task by taskName
  static async getTaskByTaskName(taskName: string) {
    return prisma.task.findUnique({
      where: {
        taskName,
      },
      include: {
        user: true // include user data if needed
      }
    })
  }

  // Get User by UserId
  static async getUserByUserId(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        tasks: true // Include user's tasks if needed 
      }
    })
  }

  // Get User by UserName (For Login and JWT Auth)
  static async getUserByUserName(userName: string) {
    return prisma.user.findFirst({
      where: {
        userName
      }
    })
  }

  // Check if User Exists
  static async checkUserExists(userName: string, userEmail: string) {
    return prisma.user.findFirst({
      where: {
        OR: [
          {
            userName: userName
          },
          {
            userEmail: userEmail
          }
        ],
      },
    }).then((count: number) => {
     return count > 0
    })
  }
}
