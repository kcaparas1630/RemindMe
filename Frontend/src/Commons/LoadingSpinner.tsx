import { FC } from 'react';
import Spinner from './StyledCommons/StyledSpinner';

const LoadingSpinner: FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return <Spinner isDarkMode={isDarkMode} />;
};

export default LoadingSpinner; 
