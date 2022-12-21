let input  = prompt("ведить довжину катетів трикутника через пробіл")

let res = (input.split(' '))
let first = res[0]*1
let second = res[1]*1

if(!isNaN(first) && !isNaN(second)&& res.length === 2 && first> 0 && second >0) {
    let result = (first ** 2) + (second ** 2)
    let hypotenuse;
    let x1 = result / 2;
    do {
        hypotenuse = x1;
        x1 = (hypotenuse + (result / hypotenuse)) / 2;
    } while (hypotenuse !== x1);
    alert(`Гіпотенуза: ${hypotenuse.toFixed(2)}`)
}else {
    alert('Данні нажаль не вірні. Вам потрібно впісати два числа через пробіл і більше 0')
}
