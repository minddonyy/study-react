# 컴포넌트의 라이프사이클 메서드

## 1.라이프사이클 메서드의 이해

Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드이고, Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되는 메서드

## 마운트

DOM이 생성되고 웹 브라우저상에 나타나는 것 - constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드 - getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드 - render : 우리가 준비한 UI를 렌더링하는 메서드 - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

## 업데이트

컴포넌트는 네 가지 이유로 업데이트한다.

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링 트리거할 때

- `getDerivedStateFromProps` : props의 변화에 따라 state 값에도 변화를 주고 싶을 때
- `shouldComponentUpate` : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드. true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 중지. 만약 특정 함수에서 this.forceUpdate() 함수를 호출하면 과정 생략하고 바로 render 호출
- `render` : 컴포넌트를 리렌더링
- `getSnapshotBeforeUpdate` : 컴포넌트 변화를 DOM에 반영하기 직전에 호출하는 메서드
- `componentDidUpdate` : 업데이트 작업이 끝난 후 호출하는 메서드

## 언마운트

마운드의 반대 과정, DOM에서 제거하는 것

- `componentWillUnmount` " 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
