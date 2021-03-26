# 컴포넌트

## props

- properties 를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
- 해당 컴포넌트를 부러와 사용하는 부모 컴포넌트에서 설정할 수 있음

1. JSX 내부에서 props 렌더링

- props를 렌더링할 때 JSX 내부에서 { }기호로 감싸 주면 된다.

```
import React from "react";

const MyComponent = props =>{
  return <div>안녕하세요, 제 이름은 {props.name} 입니다. </div>
};

export default MyComponent;
```

2. 컴포넌트를 사용할 때 props 값 지정하기

```
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" />;
};
export default App;
```

3. props 기본값 설정 : defaultProps

- props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 방법

```
import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name} 입니다. </div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

4. 태그 사이의 내용을 보여 주는 children

- 컴포넌트 태그 사이의 내용을 보여 주는 props가 children<br>
  App.js

```
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
export default App;
```

MyComponent.js

```
import React from "react";

const MyComponent = (props) => {
  return (
      <div>
      안녕하세요, 제 이름은 {props.name} 입니다. <br/>
      children 값은 {props.children}
      입니다.
      </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

5. 비구조화 할당 문법을 통해 props 내부 값 추출하기

- 더 짧은 코드로 사용할 수 있음
- 비구조화 할당이라고 부르며, 구조 분해 문법이라고도 불린다.
- 함수의 파라미터 부분에서도 사용할 수 있다.

```
import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

6. propTypes를 통한 props 검증
   - props를 지정하거나 props의 타입(type)을 지정할 때는 propTypes를 사용
   - propTypes를 사용하려면 import 구문을 사용해야 한다.

- isRequired를 사용하여 필수 propTypes 설정
  - propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 된다.

```
MyComponent.propTypes = {
  name: PropTypes.string,
  favortieNumber: PropTypes.number.isRequired,
};
```

```
const App = () => {
  return(
      <MyComponent name="React" favortieNumber={1}>
          리액트
      </MyComponent>
  );
};
```
