const input1  = prompt("ведить довжину катетів трикутника через пробіл")
if(input !== null) {
    const res1 = input1.split(' ')
    const first1 = Number(res1[0] )
    const second1 = Number(res1[1])

    if (!isNaN(first1) && !isNaN(second1) && res1.length === 2 && first1 > 0 && second1 > 0) {
        const hypotenuse = Math.sqrt((first1 ** 2) + (second1 ** 2)).toFixed((2))
        alert(`Гіпотенуза: ${hypotenuse}`)
    } else {
        alert('Данні нажаль не вірні. Вам потрібно впісати два числа через пробіл і більше 0')
    }
}else {
    alert('Ви не ввели данні ')
}
