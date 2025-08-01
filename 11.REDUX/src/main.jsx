import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

