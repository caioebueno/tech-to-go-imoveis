import '../styles/globals.css'

// MATERIAL UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// THEME CREATION
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0056DA'
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
