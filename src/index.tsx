import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProfileProvider } from './contexts/profile';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
