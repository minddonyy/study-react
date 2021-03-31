# ref:DOM에 이름 달기

HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이 ref 개념이다.

## 1. ref는 어떤 상황에서 사용해야 할까?

- DOM을 직접적으로 건드려야 할 때

  1.1 예제 컴포넌트 생성

`ValidationSample.css`

```
.success {
  background-color: lightgreen;
}

.failure {
  background-color: lightcoral;
}
```

`ValidationSample.js`

```
import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
```

1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

```
import React, { Component } from "react";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return <ValidationSample />;
  }
}
export default App;
```

1.3 DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

## 2. ref 사용

- 콜백 함수를 통한 ref 설정

```
<input ref={(ref) => {this.input=ref}}/>
```

- createRef를 통한 ref 설정
  - 리액트에 내장되어 있는 createRef 함수를 사용(v16.3부터)

```
import React, {Component} from 'react';

class RefSample extends Component{
    input = React.crateRef();

    handleFocust = () => {
        this.input.current.focus();
    }

    render(){
        return (
            <div>
                <input ref={this.input}>/>
            </div>
        );
    }
}
export default RefSample;
```


## 3. 컴포넌트에 ref 달기

- DOM을 컴포넌트 외부에서 사용할 때 쓴다.

  3.1 사용법

```
<MyComponent
  ref = {(ref)=>{this.myComponent=ref}}
>
```

3.2 컴포넌트 초기 설정  
`ScrollBox.js`

```
import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
```

`App.js`

```
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox />
      </div>
    );
  }
}
export default App;
```
3.3 컴포넌트에 메서드 생성
```
import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
            다음 코드와 같은 의미입니다.
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
        */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render(){
    (...)
  }
export default ScrollBox;
```
5.4 컴포넌트에 ref 달고 내부 메서드 사용
```
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
export default App;
```
