import counterReducer from "./reducers/counterReducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './components/Counter';


const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          hello react, redux
        </h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
