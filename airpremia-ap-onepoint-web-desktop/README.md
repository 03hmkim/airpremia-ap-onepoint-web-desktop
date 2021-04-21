<!-- 개발환경, 개발툴 , phase 별 접속 주소, 빌드 방법, 테스트 방법, 배포 방법 -->

# Airpremia OnePoint Project

에어프레미아 데스크톱 / 모바일 홈페이지

# 개발 스텍

React, Next, Typescript,  
Redux, Redux-saga,  
Styled-components  
submodule,  
Axios, Storybook,  
Eslint, Prettier

# 프로젝트 구성

_프로젝트는 **git submodule**로 구성을 하고 프로젝트(web-desktop)에서 core 와 cdk submodule을 라이브러리 형태로 import 받아서 사용합니다._
[Submodule 참고](https://airpremia.atlassian.net/wiki/spaces/ONEPT/pages/163020845/GIT+Submodule)

- **core**: 공통으로 사용되는 데이터 구조(redux) 및 비동기 통신을 위한 미들웨어(redux-saga) 그리고 서버 endpoint 정보를 담고 있습니다.
  - ref: [core repository](https://bitbucket.org/airpremia/ap-onepoint-core/src/master/)
- **cdk**: 공통 atom component들을 포함합니다.
  - ref: [cdk repository](https://bitbucket.org/airpremia/ap-onepoint-cdk/src/master/), [storybook](https://alpha-onepoint-storybook.premia.kr)
- **web-desktop**: Onepoint **web** page 버전입니다.

## core

### 파일구조

    core
    ㄴ __test__
    ㄴ api
        ㄴ booking
        	ㄴ type
            ㄴ endpoint
        ㄴ ...
    ㄴ hooks
        ㄴ useXXX // 모바일과 데스크탑에서 공통으로 사용처리하는 비즈니스 로직 hooks
        ㄴ index.ts
    ㄴ lib
        ㄴ util.ts
        ㄴ auth.ts
        ㄴ ...
    ㄴ locale
        ㄴ en
        ㄴ ko
        ㄴ index.ts
    ㄴ store
        ㄴ models
        ㄴ sagas

## cdk (component developer kit) - 이름은 navitaire을 따랐음

> Atomic design pattern중 desktop과 mobile이 중복 되는 컴포넌트들의 집합

    cdk
    ㄴ components
        ㄴ atoms
        ㄴ molecules
        ㄴ index.ts
    ㄴ public
        ㄴ images
    ㄴ styles
        ㄴ color.ts

## web-desktop

### 파일구조

    ap-onepoint-web-desktop
    ㄴ cdk
    ㄴ core
    ㄴ .storybook
    ㄴ **core**
    ㄴ **cdk**
    ㄴ public
        ㄴ images
        ㄴ font
    ㄴ src
    	ㄴ components
            ㄴ molecules
            ㄴ organisms
            ㄴ templates
        ㄴ hooks
        	// desktop project 내에 비지니스 로직을 담당하는 hook을 관리
        	ㄴ useTicket
            ㄴ useAuth
            ㄴ useSsr
            ㄴ ...
        ㄴ pages
        	// Page 함수들의 집합이며, Directory path 가 곧 화면에 보이는 URL 경로임
        	ㄴ auth
            ㄴ checkin
            ㄴ dark
        ㄴ styles
        	// 화면에서 공통으로 쓰이는 스타일들이 정의 되어 있음
            ㄴ globalStyles.ts
            ㄴ nomalize.ts
            ㄴ reset.ts
            ㄴ ...
        ㄴ types
        ㄴ utils
        	ㄴ polyfills.js
        ㄴ ... 각종 설정 파일들

# 접속 주소

**Alpha/Beta/Production은 외부 주소에서는 vpn을 통해 접속 해야합니다.**

- **Develop**: localhost:3000
  -> endpoint: alpha-api.airpremia.com
- **Alpha**: alpha.airpremia.com
  -> endpoint: alpha-api.airpremia.com
- **Beta**: beta.airpremia.com
  -> endpoint: beta-api.airpremia.com
- **Production**: (미정) / (미정)

# 빌드 방법 (자세한 내용은 하단 confluence 참고)

### local 환경 실행

```
yarn && yarn dev
http://localhost 접속
```

### Develop

```
yarn build:dev          // build
yarn start:dev          // depoly
http://localhost 접속
```

### Alpha

```
yarn build:alpha        // build
yarn start:dev          // depoly
```

### Beta

```
yarn build:beta        // build
yarn start:dev         // depoly
```

### Production

```
yarn build:prod        // build
yarn start:prod        // depoly
```

# 참고

[Frontend Confluence 링크](https://airpremia.atlassian.net/wiki/spaces/ONEPT/pages/10355125/Frontend)
[Git Submodule 링크](https://airpremia.atlassian.net/wiki/spaces/ONEPT/pages/163020845/GIT+Submodule)
