import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}


export default App;
