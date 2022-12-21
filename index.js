const input  = prompt("ведить довжину катетів трикутника через пробіл")

if(input !== null) {
    const res = input.split(' ')
    const first = Number(res[0])
    const second =Number(res[1] * 1)

    if (!isNaN(first) && !isNaN(second) && res.length === 2 && first > 0 && second > 0) {
        const result = (first ** 2) + (second ** 2)
        let hypotenuse;
        let x1 = result / 2;
        do {
            hypotenuse = x1;
            x1 = (hypotenuse + (result / hypotenuse)) / 2;
        } while (hypotenuse !== x1);
        alert(`Гіпотенуза: ${hypotenuse.toFixed(2)}`)
    } else {
        alert('Данні нажаль не вірні. Вам потрібно впісати два числа через пробіл і більше 0')
    }
}else {
    alert('Ви не ввели данні ')
}
