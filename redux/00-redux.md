# 개념 미리 정리하기

## 1.1 액션

- type 필드를 반드시 가지고 있어야 한다.

```
{
    type : 'ADD_TODO,
    data : {
        id : 1,
        text : '리덕스 배우기'
    }
}
{
    type : 'CHANGE_INPUT',
    text : '안녕하세요'
}
```

## 1.2 dortus todtjd gkatn

- 액션 객체를 만들어 주는 함수

```
function addTodo(data){
    return {
        type : 'ADD_TODO',
        data
    };
}

// 화살표 함수로도 만들 수 있습니다.
const changeInput = text => ({
    type : 'CHANGE_INPUT',
    text
})
```

## 1.3 리듀서

- 변화를 일으키는 함수
- 액션을 만들어서 발생시키면 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다.

```
const initialState = {
    counter : 1
};
function reducer(state = initialState, action){
    switch(action.type) {
        case INCREMENT :
        return {
            counter : state.counter + 1
        };
        default :
            return state;
    }
}
```

# 1.4 스토어

- 리덕스를 적용하기 위해 스토어를 만든다.
- 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다.

# 1.5 디스패치

- 스토어의 내장 함수 중 하나
- action 과 같은 형태로 액션 객체를 파라미터로 넣어서 호출

# 1.6 구독

- 스토어의 내장 함수 중 하나

```
const listener = () =>{
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subcribe(listener);

unsubcribe(); // 추후 구독을 비활성화할 때 함수를 호출
```
