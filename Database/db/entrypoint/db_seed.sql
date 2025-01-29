CREATE TABLE IF NOT EXISTS task (
  ID SERIAL PRIMARY KEY,
  "taskName" VARCHAR(30) NOT NULL,
  "taskDescription" VARCHAR(30) NOT NULL,
  "taskProgress" VARCHAR(30) NOT NULL,
  "taskDueDate" DATE NOT NULL,
  "taskCompleted" DATE
);

CREATE TABLE IF NOT EXISTS taskuser (
  ID SERIAL PRIMARY KEY,
  "firstName" VARCHAR(30) NOT NULL,
  "lastName" VARCHAR(30) NOT NULL,
  "userName" VARCHAR(30) NOT NULL,
  "userPassword" VARCHAR(128) NOT NULL,
  "userEmail" VARCHAR(100) NOT NULL 
);
