// 객체 데이터
const hyowon = {
  name : 'HYOWON',
  age : 98,
  // 메소드 (Method)
  getName : function () {
    return this.name;
  }
};

const sheName = hyowon.getName();
console.log(sheName); // HYOWON
//혹은
console.log(hyowon.getName()); // HYOWON