// 1. 6자리 인증토큰 만들기
// const mytoken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// console.log(mytoken)

//
//
//
//
// 2. 자릿수 조정하기
// const mytoken = String(Math.floor(Math.random() * 10 ** 4)).padStart(4, "0")
// console.log(mytoken)

//
//
//
//
// 3. 인증토큰생성기 만들기
const createTokenOfPhone = (myphone) => {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return
    }

    // 2. 핸드폰 토큰 6자리 만들기
    const aaaa = 6
    if(aaaa === undefined){
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!")
        return
    } else if(aaaa <= 0){
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
        return
    } else if(aaaa > 10){
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!")
        return
    }

    const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(aaaa, "0")
    console.log(result)

    // 3. 핸드폰번호에 토큰 전송하기
    console.log(myphone + "번호로 인증번호" + result + "를 전송합니다!!!")
}

createTokenOfPhone("01012345678")
