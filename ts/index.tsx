import React from 'React'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { ThemeProvider, GlobalStyle } from './theme'

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
