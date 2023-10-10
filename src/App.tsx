import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Login from 'views/Login';
import store, { persistor } from 'redux/store';
import MaterialThemeUi from 'theme/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MaterialThemeUi>
          <Login />
        </MaterialThemeUi>
      </PersistGate>
    </Provider>
  );
};

export default App;
