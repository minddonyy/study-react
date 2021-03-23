# JSX 문법

## 감싸인 요소

- 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.

오류가 나타나는 코드

```
import React from 'react';

function App() {
    return {
        <h1>리액트 안녕!</h1>
        <h2>잘 작동하니?</h2>
    }
}
```

정상적으로 작동하는 코드

```
import React from 'react';

function App() {
    return {
        <div>
            <h1> 리액트 안녕! </h1>
            <h2> 잘 작동하니? </h2>
        </div>
    }
}
export deault App;
```

- 리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 감싸 주어야 할까?
  - Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문
  - 리액트 v16 이상부터는 Fragment 사용 가능

```
import React, {Fragment} from 'react';

function App(){
    return
        <Fragment>
            <h1> 리액트 안녕! </h1>
            <h2> 잘 작동하니? </h2>
        </Fragment>
    );
}

export default App;

import React from 'react';

function App() {
    return (
        <>
            <h1> 리액트 안녕! </h1>
            <h2> 잘 작동하니? </h2>
        </>
    );
}
```

## 자바스크립트 표현

- 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 된다.

```
import React from 'react';

function App() {
    const name = '리액트';
    return (
        <>
            <h1>{name} 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </>
    );
}
export default App;
```

## if 문 대신 조건부 연산자

- JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부연산자를 사용

```
import React from 'react';

function App(){
    const name = '리액트';
    return (
        <div>
            {name === '리액트' ?(
                <h1>리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    );
}
```

## AND 연산자(&&)를 사용한 조건부 렌더링

```
import React from 'react';

function App(){
    const name = '뤼액트';
    return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
}

export default App;
```

- name 값을 리액트로 설정해야 값이 나타날 것이다.
- 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문에 && 연산자로 조건부 렌더링을 할 수 있음.
- falsy한 값인 0은 예외적으로 화면에 나타난다.
