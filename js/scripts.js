const Fisherman = function() {
    let weight = 0,
        money = 0,
        energy = 100,
        coffee = 0,
        fish = 0,
        result,
        resultGram,
        resultWeight,
        stick = 1,
        stickInWater = false,
        sleep = false,
        bag = 15000,

    log = document.querySelector('.middle'),
    left1 = document.querySelector('.left1'),
    left2 = document.querySelector('.left2'),
    left3 = document.querySelector('.left3'),
    left4 = document.querySelector('.left4'),
    left5 = document.querySelector('.left5'),
    right1 = document.querySelector('.right1'),
    right2 = document.querySelector('.right2'),
    right3 = document.querySelector('.right3'),
    right4 = document.querySelector('.right4'),
    right5 = document.querySelector('.right5');

    

    let msg1,
        msg2,
        msg3,
        msg4,
        msg5,
        msg6;

    let welcomeGif = "<img src = './img/welcome.gif'>",
    fishGif = "<img src = './img/fisherman.gif'>",
    sellGif = "<img style = 'width: 270px;' src = './img/sell.gif'>",
    drinkCoffeeGif = "<img style = 'width: 270px;' src = './img/coffee.gif'>",
    buyCoffeeGif = "<img style = 'width: 160px;' src = './img/buyCoffee.gif'>",
    sleepGif = "<img src = './img/sleep.gif'>",
    danceGif = "<img style = 'width: 270px;' src = './img/dance.gif'>",
    sadGif = "<img style = 'width: 270px;' src = './img/sad.gif'>",
    shrekGif = "<img style = 'width: 200px;' src = './img/shrek.gif'>",
    lostGif = "<img style = 'width: 270px;' src = './img/lost.gif'>",
    tiredGif = "<img style = 'width: 270px; border-radius: 10px;' src = './img/tired.gif'>",
    gotGif = "<img style = 'width: 270px; border-radius: 10px;' src = './img/got.gif'>",
    parrotGif = "<img style = 'width: 270px;' src = './img/parrot.gif'>",
    parrot2Gif = "<img style = 'width: 270px; border-radius: 10px;' src = './img/parrot2.gif'>";
        
    let msg0 = 'Добро пожаловать! :)';
        log.innerHTML = msg0 + '<br/>' + welcomeGif;

    left1.addEventListener('click', this.info = function() { // Информация 

        if(weight > 999) {
            numWeight();
            msg1 = 'Общий вес пойманной рыбы: ' + weight / 1000 + ' кило' + resultWeight + '.';
        } else {
            numWeight();
            msg1 = 'Общий вес пойманной рыбы: ' + weight + ' ' + resultWeight + '.';
        }

        msg2 = 'Деньги: ' + Math.round((money) * 100) / 100  + '$';
        msg3 = 'Энергия: ' + energy + '%';
        numCoffee();
        msg4 = 'Кофе: ' + coffee + ' ' + result;

        if(stick == 1) {
            msg5 = 'Удочка: Бамбук СССР';
        } else if(stick == 2) {
            msg5 = 'Удочка: TeleStick 4000';
        } else if(stick == 3) {
            msg5 = 'Удочка: SuperCatcher Montana 3';
        } else console.log('error 404');

        if(bag == 15000) {
            msg6 = 'Сумка: Армейский вещмешок';
        } else if(bag == 20000) {
            msg6 = 'Сумка: Grizzli';
        } else if(bag == 30000) {
            msg6 = 'Сумка: Shanaman';
        } else console.log('error 404');

        log.innerHTML = msg1 + '<br/>' + msg2 + '<br/>' + msg3 + '<br/>' + msg4 + '<br/>' + msg5 + '<br/>' + msg6;
    });

    left2.addEventListener('click', this.throw = function() { // Забросить удочку
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }else if(energy <= 0) {
            msg1 = 'Нет сил, чтобы рыбачить!';
            msg2 = 'Чтобы восстановить, нужно поспать или выпить чашку кофе.';
            log.innerHTML = tiredGif + '<br/>' + msg1 + '<br/>' + msg2;
            return;
        } else if(stickInWater == true) {
            msg1 = 'Вы уже рыбачите в данный момент!';
            msg2 = 'Подождите...';
            log.innerHTML = fishGif + '<br/>' +  msg1 + '<br/>' + msg2;
            return;
        } else {
            throw1();
            setTimeout(throw2, 3300);
            setTimeout(throw3, 3300);
        }
    });

    const throw1 = function() {

        stickInWater = true;
        energy -= 5;
        msg1 = 'Оснастка заброшена в воду.';
        msg2 = 'Поклёвка...';

        log.innerHTML = fishGif + '<br/>' +  msg1 + '<br/>' + msg2;

        if(stick == 1) {
            setTimeout(bite, 3000);
        } else if (stick == 2) {
            setTimeout(bite2, 3000);
        } else if (stick == 3) {
            setTimeout(bite3, 3000);
        }
    };

    const throw2 = function() {
        if(weight >= bag) {
            msg1 = 'Пойманная рыба не влезла в инвентарь.';
            msg2 = 'Рыба отпущена.';
            log.innerHTML = lostGif + '<br/>' + msg1 + '<br/>' + msg2;
            return;
        } else weight += fish;
    };

    const throw3 = function() {
        stickInWater = false;
    };

    const bite = function() { // Поклевка
        fish = Math.ceil(Math.random() * (1000 - 20) + 20);
        numGram();
        msg1 = 'Поймана рыба на ' + fish + ' ' + resultGram + '.';
        log.innerHTML = gotGif + '<br/>' + msg1;
    };
    
    const bite2 = function() { // Поклевка на 2 удочку
        fish = Math.ceil(Math.random() * (3000 - 50) + 50);
        numGram();
        msg1 = 'Поймана рыба на ' + fish / 1000 + ' ' + 'кило' + resultGram + '.';
        log.innerHTML = gotGif + '<br/>' + msg1;
    };

    const bite3 = function() { // Поклевка на 3 удочку
        fish = Math.ceil(Math.random() * (7000 - 100) + 100);
        numGram();
        msg1 = 'Поймана рыба на ' + fish / 1000 + ' ' + 'кило' + resultGram + '.';
        log.innerHTML = gotGif + '<br/>' + msg1;
    };

    const numCoffee = function(num = 0) { // Функция правильного падежа для кофе
        let words = ['стаканчик', 'стаканчика', 'стаканчиков'],
            count = coffee % 100;

        if (count > 4 && count < 21) {
            result = words[2];
        } else {
            count = count % 10;
            if (count == 1) {
                result = words[0];
            } else {
                if (count > 1 && count < 5) {
                    result = words[1];
                } else {
                    result = words[2];
                }
            }
        }

        return result;
    };

    const numGram = function(num = 0) { // Функция правильного падежа для граммов
        let words = ['грамм', 'грамма', 'граммов'],
            count = fish % 100;

        if (count > 4 && count < 21) resultGram = words[2];
        else count = count % 10;
        if (count == 1) resultGram = words[0];
        else {
                if (count > 1 && count < 5) resultGram = words[1];
                else resultGram = words[2];
            }

        return resultGram;
    };

    const numWeight = function(num = 0) { // Функция правильного падежа для граммов
        let words = ['грамм', 'грамма', 'граммов'],
            count = weight % 100;

        if (count > 4 && count < 21) {
            resultWeight = words[2];
        } else {
            count = count % 10;
            if (count == 1) {
                resultWeight = words[0];
            } else {
                if (count > 1 && count < 5) {
                    resultWeight = words[1];
                } else {
                    resultWeight = words[2];
                }
            }
        }

        return resultWeight;
    };

    left3.addEventListener('click', this.sell = function() { // Продажа рыбы
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }else if(weight != 0) {

            money = Math.round((money + weight / 1000) * 100) / 100;
            msg1 = 'Вы продали всю пойманную рыбу.';
            msg2 = 'Выручка: ' + Math.round((weight / 1000) * 100) / 100 + '$';
            log.innerHTML = sellGif + '<br/>' + msg1 + '<br/>' + msg2;
            weight = 0;
        } else {
            msg1 = 'В инвентаре нет рыбы!';
            log.innerHTML = shrekGif + '<br/>' + msg1;
        }
    });

    const energy100 = function() { // Функция пополнения энергии
        energy = 100; 
    };

    const energy70 = function() { // Функция пополнения энергии
        energy += 70;
        if(energy > 100) {
            energy = 100;
        }
    };

    const wake = function() { 
        msg1 = 'Вы выспались и полны энергии!';
        log.innerHTML = danceGif + '<br/>' + msg1;
        sleep = false;
    };

    left5.addEventListener('click', this.sleep = function() { // Сон
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        } else if(energy == 100) {
            msg1 = 'Вы полны сил!';
            log.innerHTML = danceGif + '<br/>' +msg1;
            return;
        } else {
            sleep = true;
            msg1 = 'Вы легли спать.';
            msg2 = '*Ждем, пока вы проснетесь...*';
            log.innerHTML = sleepGif + '<br/>' + msg1 + '<br/>' + msg2;
        }

        setTimeout(energy100, 30000);

        setTimeout(wake, 30000);
    });

    right1.addEventListener('click', this.buyCoffee = function() { // Купить кофе
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' + msg1;
            return;
        }else if(money < 1.99) {
            msg1 = 'Недостаточно средств!';
            log.innerHTML = sadGif + '<br/>' + msg1;
            return;
        } else {
            msg1 = 'Вы купили стаканчик кофе.';
            log.innerHTML = buyCoffeeGif + '<br/>' + msg1;
            money -= 1.99;
            coffee += 1;
        }
    });

    left4.addEventListener('click', this.drinkCoffee = function() { // Выпить кофе
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }else if(coffee <= 0) {
            msg1 = 'В инвентаре нет кофе!';
            log.innerHTML = shrekGif + '<br/>' + msg1;
            return;
        } else {
            msg1 = 'Вы выпили стаканчик кофе.';
            log.innerHTML = drinkCoffeeGif + '<br/>' + msg1;
            coffee -= 1;
            energy70();
        }
    });

    right4.addEventListener('click', this.buyStick2 = function() { // Покупка удочки 2
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }else if(stick == 2 || stick == 3) {
            msg1 = 'У вас уже есть эта удочка!';
            log.innerHTML = parrot2Gif + '<br/>' + msg1;
            return;
        } else if (money < 100) {
            msg1 = 'Недостаточно средств!';
            log.innerHTML = sadGif + '<br/>' + msg1;
            return;
        } else {
            msg1 = 'Вы приобрели TeleStick 4000!';
            log.innerHTML = parrotGif + '<br/>' + msg1;
            money -= 100;
            stick = 2;
        }
    });

    right5.addEventListener('click', this.buyStick3 = function() { // Покупка удочки 3 
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }else if(stick == 3) {
            msg1 = 'У вас уже есть эта удочка!';
            log.innerHTML = parrot2Gif + '<br/>' + msg1;
            return;
        } else if (money < 500) {
            msg1 = 'Недостаточно средств!';
            log.innerHTML = sadGif + '<br/>' + msg1;
            return;
        } else {
            msg1 = 'Вы приобрели SuperCatcher Montana!';
            log.innerHTML = parrotGif + '<br/>' + msg1;
            money -= 500;
            stick = 3;
        }
    });

    right2.addEventListener('click', this.buyBag2 = function() { // Покупка сумки 2
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }
        if(bag == 20000 || bag == 30000) {
            msg1 = 'У вас уже есть этот рюкзак!';
            log.innerHTML = parrot2Gif + '<br/>' + msg1;
            return;
        } else {
            if(money < 100) {
                msg1 = 'Недостаточно средств!';
                log.innerHTML = sadGif + '<br/>' + msg1;
                return;
            } else {
                msg1 = 'Вы купили сумку Grizzli.';
                log.innerHTML = parrotGif + '<br/>' + msg1;
                money -= 100;
                bag = 20000;
            }
        }
    });

    right3.addEventListener('click', this.buyBag3 = function() { // Покупка сумки 3
        if(sleep == true) {
            msg1 = 'В данный момент вы отдыхаете...';
            log.innerHTML = sleepGif + '<br/>' +  msg1;
            return;
        }
        if(bag == 30000) {
            msg1 = 'У вас уже есть этот рюкзак!';
            log.innerHTML = parrot2Gif + '<br/>' + msg1;
            return;
        } else {
            if(money < 300) {
                msg1 = 'Недостаточно средств!';
                log.innerHTML = sadGif + '<br/>' + msg1;
                return;
            } else {
                msg1 = 'Вы купили сумку Shanaman.';
                log.innerHTML = parrotGif + '<br/>' + msg1;
                money -= 300;
                bag = 30000;
            }
        }
    });

    
};

let fisherman = new Fisherman();

// document.write('------------------ Основное' + ' ----------------------------' + '<br>');
// document.write('fisherman.info() - основная информация' + '<br>');
// document.write('fisherman.throw() - забросить оснастку в воду' + '<br>');
// document.write('fisherman.sell() - продать всю пойманную рыбу' + '<br>');
// document.write('------------------ Восполнение энергии' + ' -------------' + '<br>');
// document.write('fisherman.sleep() - лечь спать' + '<br>');
// document.write('fisherman.drinkCoffee() - выпить стакан кофе' + '<br>');
// document.write('------------------ Магазин' + ' ------------------------------' + '<br>');
// document.write('fisherman.buyCoffee() - купить стакан кофе (цена: 1.99$)' + '<br>');
// document.write('fisherman.buyBag2() - купить рюкзак Grizzli (ёмкость: 20 кг --- цена: 100$)' + '<br>');
// document.write('fisherman.buyBag3() - купить рюкзак Shanaman (ёмкость: 30 кг --- цена: 300$)' + '<br>');
// document.write('fisherman.buyStick2() - купить удочку TeleStick 4000 (цена: 100$)' + '<br>');
// document.write('fisherman.buyStick3() - купить удочку SuperCatcher Montana 3 (цена: 500$)' + '<br>');