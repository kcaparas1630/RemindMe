import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import UserInterface from '../Interface/UserInterface';


const getTasks = async (userName: string, token: string | null): Promise<UserInterface> => {
  const response = await axios.get(`http://localhost:3000/api/user/${userName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const GetUser = (userName: string, token: string | null) => {
  const {
    data: users,
    isPending,
    isError,
    error,
  }: UseQueryResult<UserInterface, Error> = useQuery({
    queryKey: ['users', userName],
    queryFn: () => {
      return getTasks(userName, token);
    },
    enabled: !!userName,
  });

  return { users, isPending, isError, error };
};

export default GetUser;
