let ifs = prompt("Вы жилаете купить игровую валюту за 5грн?")
let chep = 5
let name = "?"
let password = 000
    if (ifs == "да"){
        alert("Вы согласны задонатить " + chep + "грн?")
        let name = prompt("Введите название вашей карты")
        let password = prompt("Введите последние 3 цифры вашей карты")
        if (password != 000 && password < 1000){
            console.log(name)
            const arr = [name +" это имя карты.", password + " - последние три цифры карты."] 
            arr.forEach(i => console.log(i))
        }
    }