# TypeSript 

* install
전역으로 typescript 를 설치해줍니다
```bash
$ npm install -g typescript
```

* 실행
현재 directory에 있는 파일들을 tsconfig.json에 맞춰 컴파일 하게 됩니다.
```bash
  $ tsc
```
특정 파일만 컴파일 하고 싶다면 파일을 명시해줄 수 있습니다
tsconfig.json 의 영향을 받지 않습니다.
```bash
  $ tsc test.ts
```
..
## config 
```bash
$ tsc --init
```
명령어을 통해서 tsconfig.json 파일을 생성해주게 됩니다.
해당 JSON 파일에서 `compilerOptions` 의 옵션들이 `ts -> js 을 컴파일을 하면서 어떤 옵션을 적용` 할지 설정값을 가지고 있게 됩니다.
기본값들과 주석으로 설명이 되어있고 기본적인 명령을 알아보겠습니다
### compilerOptions
* target
  - 컴파일된 코드가 어떤 환경에서 실행될 지 정의합니다.
  ex ) es6 에서 사용되는 arrow function 이나 Destructuring 를 사용하고 있을때
    - target : es5 -> 일반 function 이나 __spreadArray 와 같은 함수의 생성으로 변환이 됩니다.
    - target : es6 -> 기존의 코드 es6 스타일을 그대로 유지하게 됩니다. 
  - 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'.

* module
  - 컴파일 된 코드가 어떤 모듈 시스템을 사용할지 정의합니다.
  이 값을 common 으로 하면
  ```javascript
    export default Sample
    // 과 같은 코드는
    // common : es2020 에서는 그대로 유지하게 되지만
    // common : module 에서
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Module; 
    // 과 같은 식으로 변하게 됩니다.
  ```
  - 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'

* strict
  - 타입-체킹 옵션을 활성화 한다는 것을 의미합니다.
* esModuleInterop
  - commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해줍니다.
* outDir
  - 컴파일된 파일들을 저장할 경로를 지정해주게 됩니다.
  - 설정하지 않으면 기존 파일이 있는 위치에 저장됩니다.


### files / include / exclude
어떤 파일에 ts compiler 를 적용을 할지 설정해주게 됩니다.
```json
  {
    "compilerOptions" : {},
    "files" : [
      "config/module.ts" 
    ],
    "include" : [
      "src/**/*"
    ],
    "exclude" : [
      "node_modules",
      "**/*.spec.ts"
    ]
  }
```
  - files 은 개별 파일은 지정하여 추가해줄수 있으며
  - include 는 파일 패턴 목록을 추가할 수 있습니다
    - 사용할 수 있는 와일드카드
      - * : 0개 이상의 문자와 매칭 ( 디렉토리 구분 (/) 기호 제외)
      - ? : 1개의 문자와 매칭 ( 디렉토리 구분 기호 제외)
      - **/ : 반복적으로 모든 하위 디렉토리와 매칭
  - options 에서 `allowJS` 에 따라 `.js` , `.jsx` 등을 포함하여 컴파일 할지 정하게 됩니다.



### Reference

[컴파일 옵션](https://geonlee.tistory.com/214)
