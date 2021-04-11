# Hooks

## 1. useState

- 가장 기본적인 Hook
- 함수형 컴포넌트에서 상태를 관리해야 한다면 이 Hook을 사용

## 2. useEffect

- 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

```
useEffect(()=>{
    ...
})
```

### 2.1 마운트될 때만 실행하고 싶을 때

- 업데이트될 때는 실행하지 않으려면 함수의 두 번째 피라미터로 비어 있는 배열을 넣어 주면 된다.
  `Info.js`

```
useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);
```

### 2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

```
componentDidUpdate(prevProps,prevState){
    if(prevProps.value!== this.props.value){
        doSomething();
    }
}
```

- props 안에 들어 있는 value 값이 바뀔 때만 특정 작업을 수행
- 이러한 작업을 useEffect안에서 하고 싶으면, 두 번째 파라미터로 전달되는 배열 안에 값을 넣어 주면 된다.

```
  useEffect(() => {
    console.log(name);
  }, [name]);
```

### 2.3 뒷정리하기

- useEffect는 기본적으로 렌더링되고 난 직후마다 실행
- 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐
- 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 함수의 두 번째 파라미터에 비어있는 배열을 넣는다.

```
 useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  },[name]);
```

## 3. useReducer

- 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용

```
function reducer(state,action){
  return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환
}
{
  type : 'INCREMENT',
  // 다른 값들이 필요하다면 추가로 들어감
}
```

## 4. useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.
- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용한다.

## 5.useCallback

- useMemo 와 비슷한 함수
- 렌더링 성능을 최적화해야 하는 상황에서 사용
- Hooks를 사용하면 이벤트 핸들러 함수를 필요할 때만 생성
- 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고, 함수를 재사용하려면 useCallbakc을 사용

```
useCallback(()=>{
  console.log('hello world!');
},[])

useMemo(()=>{
  const fn = () =>{
    console.log('hello world!');
  };
  return fn;
},[])
```

## 6. useRef

- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 준다.

### 6.1 로컬 번수 사용하기

- 로컬 변수를 사용해야 할 때도 useRef를 사용할 수 있다.

```
import React, {useRef} from 'react';

const RefSample = () =>{
  const id = useRef(1);
  const setId = (n) =>{
    id.current = n;
  }
  const printId = () =>{
    console.log(id.current);
  }
  return (
    <div>
      refsample
    </div>
  );
};

export default Refsample;
// 렌더링과 관련되지 않은 값을 관리할 때만 이런 방식으로 사용
```

## 7. 커스텀 Hooks 만들기

- 비슷한 기능을 공유할 경우, 나만의 Hook으로 작성하여 로직을 재사용할 수 있다.
