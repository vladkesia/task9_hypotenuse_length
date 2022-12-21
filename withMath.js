let input1  = prompt("ведить довжину катетів трикутника через пробіл")

let res1 = (input1.split(' '))
let first1 = res[0]*1
let second1 = res[1]*1

if(!isNaN(first1) && !isNaN(second1)&& res1.length === 2 && first1> 0 && second1 >0) {
    let hypotenuse = Math.sqrt((first1**2)+(second1**2))
    alert(`Гіпотенуза: ${hypotenuse.toFixed(2)}`)
}else {
    alert('Данні нажаль не вірні. Вам потрібно впісати два числа через пробіл і більше 0')
}
