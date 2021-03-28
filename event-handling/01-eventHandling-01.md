# 이벤트 핸들링

- DOM 요소들과 상호 작용하는 것을 말한다.

1. 리액트의 이벤트 시스템

   1. 주의 사항
      - 이벤트 이름은 카멜 표기법으로 작성
      - 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값 전달
      - DOM 요소에만 이벤트를 설정할 수 있음

2. 이벤트 핸들링 익히기

- 컴포넌트 생성 및 불러오기<br/>
  `EventPractice.js `

```
import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
      </div>
    );
  }
}

export default EventPractice;

```

`App.js`

```
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return <EventPractice />;
};

export default App;

```

- onChange 이벤트 설정

```
import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

- state에 input 값 담기

```
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
```

- 버튼을 누를 때 comment 값을 공백으로 설정

```
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
```
