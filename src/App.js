import './App.css';
import { Provider } from 'react-redux';
import { configstore } from './component/store';
import Counter from './container/Counter';

function App() {

  const store = configstore();
  return (
    <div >
      <Provider store={store}>

        <Counter />
      </Provider>

    </div>
  );
}

export default App;
