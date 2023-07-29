import React from 'react';
//  import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StateProvider} from './StateProvider';
import reducer,{initialState} from './reducer';

import ReactDOM from 'react-dom';


// const root=createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App/>
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
<>

<React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
      </StateProvider>
      </React.StrictMode>
</>
  );
