# 컴포넌트

## state

- 컴포넌트 내부에서 바뀔 수 있는 값을 의미
- 클래스형 컴포넌트가 지니고 있는 state, 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state가 있다.

### 클래스형 컴포넌트의 state <br/>

Counter.js

```
constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }
```

- state 를 설정할 때는 constructor 메서드를 작성하여 설정
- 클래스형 컴포넌트에서 constructor을 작성할 때는 반드시 super(props)를 호출해야 함.
- 컴포넌트의 state는 객체 형식이어야 한다.

```
  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
```

- 현재 state를 조회할 때는 this.state를 조회하면 된다.<br/>
  App.js

```
import React from "react";
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
```

### state 객체 안에 여러 값이 있을 때

```
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber} </h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
```

### state를 constructor에서 꺼내기

```
    state = {
      number: 0,
      fixedNumber: 0
    };
```

constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다.

### this.setState에 객체 대신 함수 인자 전달하기

- this.setState를 사용하여 state 값을 업데이트할 때는 비동기적으로 업데이트된다.

```
onClick ={()=>{
    // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
    this.setState({number : number+1});
    this.setState({number : this.state.number +1 });
}}
```

setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭해도 1씩 더해진다.<br/>
해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣는 것

```
this.setState((prevState, props)=>{
    return {
        // 업데이트하고 싶은 내용
    }
})

 <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            //위 코드와 아래 코드는 완전히 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
```

### this.setState가 끝난 후 특정 작업 실행하기

- setState의 두 번째 파라미터로 콜백 함수를 등록하여 특정 작업을 할 수 있음

### 함수형 컴포넌트에서 useState 사용하기

- 함수형 컴포넌트에서도 useState라는 함수를 사용하여 state를 사용할 수 있게 되었음

### 배열 비구조화 할당

- 배열 안에 있는 값을 쉽게 추출할 수 있게 해 주는 문범

```
const array = [1,2];
const [one, two] = array;
```

### useState 사용하기

Say.js

```
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
```

App.js

```
import React from "react";
import Say from "./Say";

const App = () => {
  return <Say />;
};

export default App;

```

### 한 컴포넌트에서 useState 여러 번 사용하기

```
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
```
