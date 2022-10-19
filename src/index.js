import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = (document.getElementById('root'));
function Home(){
  return( 
    <div>
      <App />
    </div>
  )
}
 
ReactDOM.render(<Home /> ,root);
