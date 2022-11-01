import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login/Login';


const Index = () => {
  return (
    <div>index

      <Login/>
    </div>
  )
}

export default Index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />

);


