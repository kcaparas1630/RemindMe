import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import TaskInterface from '../Interface/TaskInterface';


const getTasks = async (userName: string, token: string | null): Promise<TaskInterface[]> => {
  const response = await axios.get(`http://localhost:3000/api/task/user/${userName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const GetTasksDueToday = (userName: string, token: string | null) => {
  const {
    data: users,
    isPending,
    isError,
    error,
  }: UseQueryResult<TaskInterface[], Error> = useQuery({
    queryKey: ['tasks', userName],
    queryFn: () => {
      return getTasks(userName, token);
    },
    enabled: !!userName,
  });

  return { users, isPending, isError, error };
};

export default GetTasksDueToday;
