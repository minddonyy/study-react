# 컴포넌트 반복

## 1. 자바스크립트 배열의 map() 함수

1. 문법

```
arr.map(callback, [thisArg])
```

- callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지
  - currentValue : 현재 처리하고 있는 요소
  - index : 현재 처리하고 있는 요소의 index 값
  - array : 현재 처리하고 있는 원본 배열
- thisArg(선택 항목) : callback 함수 내부에서 사용할 this 레퍼런스

## 2. 데이터 배열을 컴포넌트 배열로 변환하기

1. 컴포넌트 수정하기  
   `IterationSample.js`

```
import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

`App.js`

```
import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}
export default App;
```

## 3. key

- 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용

1. key 설정

- key 값은 언제나 유일해야 한다.

## 4. 응용

1. 초기 상태 설정하기, 데이터 추가 기능 구현  
   `ItrationSample.js`

```
import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(""); //inputText를 비운다.
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
```

2. 데이터 제거 기능 구현하기

- filter 함수

```
const numbers = [1,2,3,4,5,6];
const biggerThanThree = numbers.filter(number => number > 3);
// 결과 [4,5,6]
```

`IterationSample.js`

```
import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(""); //inputText를 비운다.
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
```
