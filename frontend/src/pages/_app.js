import { GlogalStyle } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import '../styles/vendors/index.scss'
import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlogalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
