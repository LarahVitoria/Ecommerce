import { Provider } from 'react-redux'
import { GlogalStyle } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import '../styles/vendors/index.scss'
import { theme } from '../styles/theme'
import { store } from '../store/store'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlogalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
