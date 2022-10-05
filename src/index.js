import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SocketProvider } from './context/socketContext';
import AuthProvider from './context/authContext';
import { ThemeProvider } from 'styled-components';
import theme from './theme/defaultTheme';
import GlobalStyle from './theme/globalStyle';
import { ConfigProvider } from 'antd';

import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
  theme : {
    primaryColor: theme.backgroundPrimary[0],
    errorColor: '#922B21',
    warningColor: '#B7950B',
    successColor: '#1E8449',
    infoColor: '#5bc0de',
    backgroundColor : theme.backgroundPrimary[0],
    
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SocketProvider>
    <AuthProvider>
      <ThemeProvider
        theme={ theme }
      >
        <GlobalStyle/>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </ThemeProvider>
    </AuthProvider>
  </SocketProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
