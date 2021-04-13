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

## Sass 사용하기

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

- .sass 화장자는 중괄호와 세미콜론을 사용하지 않는다.
