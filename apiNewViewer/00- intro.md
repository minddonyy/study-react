## 1. 비동기 작업의 이해

- 서버의 API를 사용해야 할 때는 송수신 과정에서 시간이 걸리기 때문에 이 과정에서 비동기적으로 처리하게 된다.
- 비동기적으로 처리한다면 웹 애플레케이션이 멈추지 않기 때문에 여러가지 요청 처리가 가능하며 기다리는 과정에서 다른 함수를 호출할 수 있다.

```
function printMe(){
    console.log('Hello World');
}
setTimeout(printMe,3000);
```

### 1.1 콜백 함수

```
./Callback.js
```

### 1.2 Promise

```
./Promise.js
```

### 1.3 async/await

```
./Async_Await.js
```
