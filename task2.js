   
function checkPrimeNumber (a) {
    let alertMessage = 'Это простое число!';
    let badDataMessage = 'Данные не верны!';
    let badMessage = 'Это не простое число!';
    if (a > 1000) {
        alertMessage = badDataMessage;
    } else if (a == 1 || a == 0) {
        alertMessage = badMessage;
    } else {
        for (let i = 2; i <= a / 2 ; i++) {
            if (a%i==0) {
                alertMessage = badMessage;
            } 
        };
    }
    return alert(alertMessage);
}


checkPrimeNumber(2);
