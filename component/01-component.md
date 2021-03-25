# 컴포넌트

## 클래스형 컴포넌트

- 컴포넌트를 선언하는 방식은 함수형, 클래스형이 있다.

```
import React, {Component} from 'react';

class App extends Component{
    render() {
        const name = 'react';
        return <div className="react">{name}</div>
    }
}

export default App;
```

- 클래스형
  - state 기능 및 라이프사이클 기능을 사용할 수 있음
  - 임의 메서드를 정의할 수 있음
  - render 함수가 꼭 있어야 하고, JSX를 반환해야 한다.

## 어떤 상황에 함수형 컴포넌트를 사용해야 할까?

- 함수형 컴포넌트 장점
  - 클래스형보다 선언하기 편하다.
  - 메모리 자원도 덜 사용한다.
  - 프로젝트를 빌드한 후 배포할 때도 함수형을 사용하는 것이 파일 크기가 더 작다.
- 함수형 컴포넌트의 단점
  - state와 라이프 사이클 API 사용이 불가(v16.8 업데이트 이후 Hooks 기능 사용으로 해결)

## 컴포넌트 생성

1. src 디렉터리에 MyComponent.js 파일 생성

```
import React from "react";

const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};

export default MyComponent;
```

- 함수를 작성할 때 function 대신에 () => {}를 사용
- 큰 차이는 없지만 간결하기 때문에 이 책에서는 화살표 함수 문법을 사용

2. 모듈 내보내기(export)
   방금 작성한 컴포넌트의 맨 아래 코드, 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다.

```
export default MyComponent;
```

3. 모듈 불러오기 (import)

```
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};
export default App;
```
