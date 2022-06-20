function qqq(){
    console.log("안녕하세요 qqq 함수를 실행하셨습니다.")
}

function qqq(){
    console.log("안녕하세요 qqq 함수를 실행하셨습니다. - 호이스팅 문제가 발생!!")
}

qqq() // 호이스팅문제 발생으로 두번째 qqq 출력(첫번째 qqq는 무시됨) => 앞으로 함수표현식 또는 화살표함수 등을 사용할 것임!