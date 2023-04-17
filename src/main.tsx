import ReactDOM from 'react-dom/client'

import Home from './pages/home'
import GlobalStyles from './shared/global-styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyles />
    <Home />
  </>,
)
