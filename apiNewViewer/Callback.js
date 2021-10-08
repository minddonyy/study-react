function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);

  increase(0, (result) => {
    console.log(result);
  });
}
//1초에 걸쳐서 10,20,30,40 과 같은 형태로 처리하고 싶다면 콜백 함수를 중첩하여 구현

function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

console.log("작업 시작");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      console.log("작업 완료");
    });
  });
});
