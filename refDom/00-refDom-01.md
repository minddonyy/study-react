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
