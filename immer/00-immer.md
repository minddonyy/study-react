# immer

## 사용법

- 불변성을 유지하는 작업을 간단하게 처리할 수 있다.
- 불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것

```
import produce from 'immer';
const nextState = produce(originalState, draft => {
    //바꾸고 싶은 값 바꾸기
    draft.somewhere.deep.inside = 5;
})
```

```
import produce from 'immer';

const originalState = [
    {
        id : 1,
        todo : '전개 연산자와 배열 내장 함수로 불변성 유지하기',
        checked : true,
    },
    {
        id : 2,
        todo : 'immer로 불변성 유지하기',
        checked : false,
    }
];

const nextState = produce(originalState, draft=>{
    //id 가 2인 항목의 checked 값을 true로 설정
    const todo = draft.find(t => t.id === 2); //id로 항목 찾기
    todo.checked = true;
    // 혹은 draft[1].checked = true;

    //배열에 새로운 데이터 추가
    draft.push({
        id : 3,
        todo : '일정 관리 앱에 immer 적용하기',
        checked : false,
    });

    //id = 1인 항목을 제거하기
    draft.splice(draft.findIndex(t=>t.id === 1),1);
})
```

## useState의 함수형 업데이트와 immer 함께 쓰기

```
const [number, setNumber] = useState(0);
//prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(
    ()=>setNumber(prevNumber => prevNumber + 1),
    [],
);
```

```
const update = produce(draft =>{
    draft.value = 2;
});
const originalState = {
    value : 1,
    foo : 'bar',
};
const nextState = update(originalState);
console.log(nextState); // {value : 2, foo : 'bar'}
```
