import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Header.css';

function Header() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h2: {
        fontWeight: 200,
        fontSize: "4.5rem",
        lineHeight: 1.2
      },
      body1: {
        fontWeight: 200,
        fontSize: "1.5rem"
      },
    },
  });


  return (
    <Box 
    className="headermain"
    sx={{ 
      width: '100%', 
      backgroundColor: '#e9ecef', 
      padding: '64px',
      marginBottom: 5
      }}

    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" component={'h1'}>
          Vacation Destinations WishList
        </Typography>
        <Typography variant="body1">
        Found exciting places to visition on your next vacation? Use the form below to add them to your wishlist
        </Typography>
      </ThemeProvider>
    </Box>
  )
}

export default Header;