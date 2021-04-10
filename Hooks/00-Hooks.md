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
