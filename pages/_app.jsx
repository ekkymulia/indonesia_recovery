import '../styles/globals.css'

// Redux
import { store } from '../redux/store/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
      
      <Component {...pageProps} />
    )
}

export default MyApp
