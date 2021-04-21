# Store 작성 방법

## 구성

### models

- 1 level 분류된 값들이 위치한다. (auth, ticket, accident, common ...);
- 2 level 에는 아래의 동일한 값들이 존재한다.
  1.  **actions.ts**: action type과 action들을 갖습니다.
  2.  **reducer.ts**: reducer 및 initalState가 존재하며, 데이터의 update는 여기서 이루어 진다. 다른 스토어에 대한 업데이트는 saga에서 한다. (아래 이어지는 내용 참고)
  3.  **types.ts**: axios request/response, initalState, action들의 타입을 관리한다.
  4.  **index.ts**: 위에 선언한 내용들을 export 하기위해 쓰임

### sagas

- 1 level에 각종 사가 파일들이 위치하며, index.ts 파일은 rootSaga가 존재한다.

### index.ts

- Redux store가 export 된다. (applied middleware들이 포함된다.)
  1.  middleware - chrome dev tools / redux-saga 적용
- 모든 스토어의 타입값을 묶어주는 RootStore가 존재한다.

---

## 설정방법

### example 이라는 model(store)를 생성 하는 예를 아래에 작성해보겠습니다. (API는 api 디렉토리를 참고)

_- API는 domain별 endpoint 와 type으로 구성되어 있음._

1. stores > models 하위에 example 디렉토리 생성
2. example 디렉토리 하위에 아래 네개의 파일 생성
   - actions.ts
   - reducer.ts
   - types.ts
   - index.ts
3. types.ts 진입

   ```
   import { ActionType } from 'typesafe-actions';
   import * as actions from './actions';
   import {
     IListReq,
     iListResp,
   } from '../../../api/example/types';

   export type IExampleAction = ActionType<typeof actions>;

   export interface IExampleState {
     list: Number[];
     isRequest: boolean;
   }

   ```

4. actions.ts 진입

   - import 되어지는 위에 두줄은 고정이 되게 되고, types는 response type이 있을 경우 작성됩니다.
   - Axios Request/ Response 할 행위에 대해 action 및 type을 선언합니다.

     **Async type선언**

   ```
   import { createAsyncAction } from 'typesafe-actions';
   import { AxiosError } from 'axios';

   import { IListReq, IListResp } from '../../../api/example/types';

   // action type 선언
   export const LIST_REQUEST = 'example/LIST_REQUEST';
   export const LIST_SUCCESS = 'example/LIST_SUCCESS';
   export const LIST_FAILURE = 'example/LIST_FAILURE';

   // actions 선언
   // 하위의 generic에 req또는 rep 데이터가 없을 경우에는 undefined로 작성
   export const listActions = createAsyncAction(
     LIST_REQUEST,
     LIST_SUCCESS,
     LIST_FAILURE,
   )<IListReq, IListResp[], AxiosError>();
   ```

   **일반 type선언**

   ```
   import { createAction } from 'typesafe-actions';

    export const STORE_UPDATE = 'common/STORE_UPDATE';

    export const handleStoreUpdate = createAction(
      STORE_UPDATE,
    )();

   ```

5. reducer.ts 진입

   ```
   import { createReducer } from 'typesafe-actions';
   import produce from 'immer';
   import {
     LIST_REQUEST,
     LIST_SUCCESS,
     LIST_FAILURE,
   } from './actions';
   import { IExampleState, IExampleAction } from './types';

   const initialState = {
     list: [];
     isRequest: false,
   };

   const example = createReducer<
     IExampleState,
     IExampleAction
   >(initialState, {
     [LIST_REQUEST]: (state) =>
       produce(state, (draft) => {
         draft.isRequest = true;
       }),

     [LIST_SUCCESS]: (state, action) =>
       produce(state, (draft) => {
         draft.isRequest = false;
         draft.list = action.payload;
       }),

     [LIST_FAILURE]: (state) =>
       produce(state, (draft) => {
         draft.isRequest = false;
       }),
   });

   export default example;

   ```

6. index.ts 작성

   ```
   export { default } from './reducer';
   export * from './actions';
   export * from './types';
   ```

7. saga 작성 (sagas > XXX.ts 작성 - saga 작성의 경우는 두개정도로 구분해서 작성될 가능성이 있음) 아래의 예는 login

   **일반 Request 용도 (try / catch 문을 모듈화함)**

   ```
   import { takeLatest } from 'redux-saga/effects';
   import {
     loginActions,
     LOGIN_REQUEST,
   } from '../models/auth/actions';
   import { postUserTokenMember } from '../../api';
   import createAsyncSaga from '../../lib/createAsyncSaga';

   const loginSaga = createAsyncSaga(
     loginActions,      // actions
     postUserTokenMember,   // api
   );

   export default function* authSaga() {
     yield takeLatest(LOGIN_REQUEST, loginSaga);
   }
   ```

   **Request 이후에 put(dispatch)나 다른 store 업데이트가 필요한 경우**

   ```
   import { takeLatest, select } from 'redux-saga/effects';
   import {
     loginActions,
     LOGIN_REQUEST,
   } from '../models/auth/actions';
   import { postUserTokenMember } from '../../api';
   import createAsyncSaga from '../../lib/createAsyncSaga';

   function* handleLogin(
     action: ReturnType<typeof loginActions.request>,
   ) {
     try {
       // redux-saga select 사용 등 추가 적인 부분이 필요할때
       const userProfile: ILoginRep = yield call(
         postUserTokenMember,
         action.payload,
       );
       yield put(loginActions.success(userProfile));
       yield put(languageActions.change('en'));
     } catch (e) {
       yield put(loginActions.failure(e));
     }
   }

   export default function* authSaga() {
     yield takeLatest(LOGIN_REQUEST, handleLogin);
   }
   ```

8. Saga 까지 작성이 완료되면 작성된 saga를 export한다.

   1. stores > sagas > index.ts

   ```
   import { all } from 'redux-saga/effects';

   import accidentSaga from './accidentSaga';
   import authSaga from './authSaga';

   export default function* rootSaga() {
     yield all([
       accidentSaga(),
       authSaga(),
       exampleSaga(), // 추가됨
     ]);
   }
   ```

9. 필요한 곳에서 사용 (hook 디렉토리참고)
