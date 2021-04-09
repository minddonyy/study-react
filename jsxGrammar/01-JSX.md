# JSX란? 
* 자바스크립트의 확장 문법이며 XML과 비슷하게 생겼다. 
* 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용해 자바스크립트 형태의 코드로 변환

JSX
```
function App(){
  return {
    <div>
      Hello <b>react</b>
    </div>
  );
}
```

변환된 코드
```
function App(){
  return React.createElement("div", null, "Hello ", React.createElement("b",null, "react"));
}
```
JSX를 사용하면 매우 편하게 UI를 렌더링할 수 있다.

# JSX의 장점
* 보기 쉽고 익숙하다
  * 가독성이 높고 작성하기 쉽다
  * 자바스크립트 요소들을 일일이 만들지 않아도 됨

* 더욱 높은 활용도
  *  div나 span 같은 HTML 태그를 사용할 수 있을 뿐 아니라, 컴포넌트도 JSX 안에서 작성할 수 있음
