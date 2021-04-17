# 컴포넌트 스타일링

## 1. 가장 흔한 방식, 일반 CSS

- 컴포넌트를 스타일링하는 가장 기본적인 방식
- css 클래스를 중복되지 않게 만드는 것이 중요

### 1.1 이름 짓는 규칙

- 컴포넌트 이름 - 클래스 형태로 이루어져 있다.

### 1.2 CSS Selector

- CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있다.

```
.App .logo {
    animation : App-logo-spin infinite 20s linear;
    height : 40vmin;
}
```

## 2. Sass 사용하기

- Synctacically Awesome Style Sheets (문법적으로 매우 멋진 스타일시트)는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 도와주고, 재활용성을 높여 주고 코드의 가독성을 높여준다.

```
//.sass
$font-stack : Helvetica, sans-serif
$primary-color : #333

body
    font : 100% $font-stack
    color : $primary-color

//.scss
$font-stack : Helvetica, sans-serif;
$primary-color : #333;

body {
    font : 100% $font-stack;
    color : $primary-color;
}
```

- .sass 확장자는 중괄호와 세미콜론을 사용하지 않는다.

## 3. CSS Module

- `[파일 이름]_[클래스 이름]_[해시값]` 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술

### 3.1 classnames

- CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리

```
yarn add classnames
```

`classnames 간략 사용법`

```
import classNames from 'classnames';

classNames('one','two'); // = 'one two'
classNames('one', {two : true}) // = 'one two'
classNames('one', {two : false}); // = 'one'
classNaems('one',['two','three']); // = 'one two three'

const myClass = 'hello';
classNames('one',myClass,{myCondition : true}); // = 'one hello myCondition'
```

## 4. styled-components

- 자바 스크립트 안에 스타일을 선언하는 방식 (CSS-in-JS)

```
yarn add styled-components
```

`StyledComponent.js`, `App.js`

### 4.1 Tagged 템플릿 리터럴

- 스타일을 작성할 때 `을 사용하여 만든 문자열에 스타일 정보를 넣어 사용한 문법을 Tagged 템플릿 리터럴이라고 부른다.
- 템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본 값을 그대로 추출 가능
- 컴포넌트의 props를 스타일 쪽에서 쉽게 조회할 수 있도록 한다.

```
`hello ${{foo:'bar'}} ${()='world'}!`
// 결과 : "hello [object Object] () => 'world'!"
```

### 4.2 스타일링된 엘리먼트 만들기

- 컴포넌트 파일의 상단에서 styled를 불러오고, styled.태그명을 사용

```
import styled from 'styled-components';

const MyComponent = styled.div`
    font-size : 2rem;
`;
```

```
//태그의 타입을 styled 함수의 인자로 전달
const MyInput = styld('input')`
    background : gray;
`
// 아예 컴포넌트 형식의 값을 넣어 줌
const StyledLink = styled(Link)`
    color : blue;
`
```

### 4.3 스타일에서 Props 조회하기
`StyledComponents.js` - Box 컴포넌트
```
const Box = styled.div`
  /* props로 넣어준 값을 직접 전달해 줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
```