# 컴포넌트의 라이프사이클 메서드

## 1. render() 함수

```
render() {...}
```

- 컴포넌트 모양새를 정의
- this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환
- 요소는 div 같은 태그가 될 수도 있고, 따로 선언한 컴포넌트가 될 수도 있음
- 아무것도 보여주고 싶지 않다면 null 값이나 false 값을 반환
- 이벤트 설정이 아닌 곳에서 setState를 사용하면 안 되며, 브라우저의 DOM에 접근해서도 안 된다.

## 2. constructor 메서드

```
constructor(props){...}
```

- 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행, 초기 state를 정할 수 있음

## 3. getDerivedStateFromProps 메서드

- v16.3 이후에 라이프사이클 메서드
- props로 받아 온 값을 state에 동기화시키는 용도

```
static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.value !== prevState.value){ // 조건에 따라 특정 값 동기화
        return {value : nextProps.value};
    }
    return null; // state를 변경할 필요가 없다면 null을 반환
}
```

## 4. componentDidMount 메서드

```
componentDidMount(){...}
```

- 컴포넌트를 만들고, 첫 렌더링을 다 마친 후에 실행

## 5. shouldComponentUpdate 메서드

```
shouldComponentUpdate(ndextProps, nextState){...}
```

- props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
- 반드시 true 값 또는 false 값을 반환해야 한다

## 6. getSnapshotBeforeUpdate 메서드

- v16.3 이후 메서드
- render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출

## 7. componentDidUpdate 메서드

```
componentDidUpdate 메서드
```

- 리렌더링을 완료한 후 실행
-

## 8. componentWillUnMount 메서드

```
componentWillUnmount(){...}
```

- 컴포넌트를 DOM에서 제거할 때 실행
- componentDidMount에서 등록한 이벤트, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야함

## 9. componentDidCatch 메서드

- v16에서 새롭게 도입
- 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄 수 있게 해 준다.

```
componentDidCatch(error,info){
    this.setState({
        error : true
    });
    console.log({error, info});
}
```

# 라이프사이클 메서드 사용하기

## 1. 예제 컴포넌트 생성

`LifeCycleSample.js`

```
import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
```

`App.js`

```
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
```
