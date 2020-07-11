import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a535c',
    },
    secondary: {
      main: '#d6c254',
    },
    success: {
      main: '#43a047',
    },
    info: {
      main: '#1976d2',
    },
    warning: {
      main: '#ffa000',
    },
  },
});

export const theme: Theme = merge(defaultTheme, {
  palette: {
    table: {
      row: {
        main: '#ddd',
      },
    },
  },
} as Theme);
