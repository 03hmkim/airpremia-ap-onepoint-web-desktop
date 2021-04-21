import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import models, { IStoreState } from './models';

import rootSaga from './sagas';

const bindMiddleware = (middleware: any) => {
  if (process.env.STAGE !== 'production') {
    const {
      composeWithDevTools,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
    } = require('redux-devtools-extension');
    return composeWithDevTools(
      applyMiddleware(...middleware),
    );
  }
  return applyMiddleware(...middleware);
};

export default function configureStore(): Store<
  IStoreState
> {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    models,
    bindMiddleware([sagaMiddleware]),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export type RootStore = ReturnType<typeof models>;
