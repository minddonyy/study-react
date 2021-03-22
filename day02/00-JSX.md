# 코드 이해하기

src/App.js 파일을 연다.

```
import React from 'react';
```
* 프로젝트를 만들 때 node_modules라는 디렉터리에 react 모듈이 함께 생성되는데, import 구문을 통해 리액트를 불러와서 사용할 수 있는 것 
* Node.js에서는 import가 아닌 required로 불러올 수 있다.
* 브라우저에서도 사용하기 위해 번들러를 사용한다.


리액트를 불러오는 코드 하단에는 svg 파일과 css 파일을 import 하는 코드가 존재

```
import logo from './logo.svg';
import './App.css';
```
* 웹팩을 사용하면 SVG 파일과 CSS 파일도 사용할 수 있다. 
* 파일을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당
* 로더는 원래 직접 설치하고 설정해야 하지만 create-react-app이 작업을 대신한다. 



```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
이 코드는 App이라는 컴포넌트를 만들어 준다. function 키워드를 사용하여 만든 컴포넌트를 **함수형 컴포넌트**라고 부른다. 
컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타낸다. 위와 같은 코드를 JSX라고 부른다. 
