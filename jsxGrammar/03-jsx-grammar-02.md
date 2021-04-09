# JSX 문법

## undefined를 렌더링하지 않기

- 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 된다.
- 어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하면 오류를 방지할 수 있음.
- JSX 내부에서 undefined를 렌더링하는 것은 괜찮음.

## 인라인 스타일링

- DOM 요소에 스타일을 적용할 때는 객체 형태로 넣어야 한다.
- '-' 문자가 포함되는 것들은 문자를 없애고 카멜 표기법으로 작성해야 한다.

```
import React from 'react';

function App(){
    const name = '리액트';
    return (
        <div
            style={{
                backgroundColor : 'black',
                color : 'aqua',
                fontSize : '48px',
                fontWeight : 'bold',
                padding : 16 //단위를 생략하면 px로 지정
            }}
        >
        {name}
        </div>
    );
}

export default App;
```

## class 대신 className

- 일반 HTML과 다르게 class가 아닌 className으로 설정해 주어야 한다.

```
.react {
    background : aqua;
    color : black;
    font-size : 48px;
    font-weight : bold;
    padding : 16px;
}
```

```
import React from 'react';
import './App.css';

function App(){
    const name = '리액트';
    return <div className="react">{name}</div>;
}

export default App;
```

## 꼭 닫아야 하는 태그

- JSX는 input 태그를 닫아주어야 한다.
- 태그 사이에 별도의 내용이 들어가지 않는 경우 < input/> 처럼 작성할 수 있는데 이러한 태그를 self-closing 태그라고 부른다.

## 주석

- ```{/* 내용 */}```와 같은 형식으로 작성한다.
