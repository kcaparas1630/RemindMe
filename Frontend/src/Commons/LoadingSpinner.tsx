/**
 * @params isDarkMode - a theme for either dark mode or light mode.
 * @returns A ReactNode, renders an html element.
 * @author @Kcaparas
 */

import { FC } from 'react';
import Spinner from './StyledCommons/StyledSpinner';
import isDarkMode from '../Interface/isDarkMode';

const LoadingSpinner: FC<isDarkMode> = ({ isDarkMode }) => {
  return <Spinner isDarkMode={isDarkMode} />;
};

export default LoadingSpinner; 
