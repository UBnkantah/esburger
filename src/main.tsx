import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { getTotals } from './app/CartSlice.tsx'

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
      <Provider store={store}>
      <App />  
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
