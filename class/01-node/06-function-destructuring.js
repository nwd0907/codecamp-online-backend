// 1. 객체의 변수를 하나씩 할당
// const profile = {
//     name: "철수",
//     age: 13,
//     school: "다람쥐초등학교"
// }
// const name = profile.name
// const age = profile.age
// const school = profile.school

//
//
//
//
// 2. 구조분해할당
// const profile = {
//     name: "철수",
//     age: 13,
//     school: "다람쥐초등학교"
// }
// const { name, age, school } = profile

//
//
//
//
// 3. 함수의 매개변수를 구조분해하여 받기 - 1
// const myfunction = ({ name, age, school }) => {

// }

// const profile = {
//     name: "철수",
//     age: 13,
//     school: "다람쥐초등학교"
// }
// myfunction(profile)

//
//
//
//
// 4. 함수의 매개변수를 구조분해하여 받기 - 2
// const myfunction = ({ name, age, school }) => {

// }

// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"

// const profile = {
//     name: name,
//     age: age,
//     school: school
// }
// myfunction(profile)

//
//
//
//
// 5. 함수의 매개변수를 구조분해하여 받기 - 3
// const myfunction = ({ name, age, school }) => {

// }

// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"

// const profile = { name, age, school } // shorthand-property로 축약하기
// myfunction(profile)

//
//
//
//
// 6. 함수의 매개변수를 구조분해하여 받기 - 4
// const myfunction = ({ name, age, school }) => {

// }

// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"
// myfunction({ name, age, school })