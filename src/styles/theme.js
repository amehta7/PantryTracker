import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize the primary color
    },
    secondary: {
      main: '#dc004e', // Customize the secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize the font
  },
})

export default theme
