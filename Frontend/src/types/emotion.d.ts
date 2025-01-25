// FOR Theme Context of NavLink. Changing NavLink dynamic css throws an error from the DOM
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    isDarkMode: boolean;
  }
}
