// 1. 값을 되돌려주는 return
// const myfunction = (aaa, qqq) => {
//     return aaa + qqq // 10 + 20
// }

// const result = myfunction(10, 20)
// console.log(result) // 30

//
//
//
//
// 2. 함수의 종료 의미로 사용되는 return
const myfunction2 = () => {
    console.log("함수를 종료합니다!")
    return
}
myfunction2()