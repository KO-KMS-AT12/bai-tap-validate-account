function checkAccount(str) {
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) console.log('Account hop le');
    else console.log('Account khong hop le');
}

checkAccount('123abc_');
checkAccount('_abc123');
checkAccount('______');
checkAccount('123456');
checkAccount('abcdefg');
checkAccount('1231');
checkAccount('1234_');
checkAccount('abcde');