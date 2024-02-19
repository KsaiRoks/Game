function isGameOver() {
    return student.life <= 0 || rooms[roomId].actions.length === 0;
}

function restart() {
    document.getElementById('roomTitle').innerHTML = 'Игра окончена';
    var button = document.createElement('button')
    button.innerHTML = 'Попробуешь ещё раз?';
    button.addEventListener('click', function () {
        student.life = 100;
        roomId = 'start';
        gotoRoom()
    });
    document.getElementById('actions').appendChild(button);
}

function gotoRoom() {
    var room = rooms[roomId];
    document.getElementById('roomTitle').innerHTML = room.title;
    document.getElementById('roomImage').scr = room.image;
    document.getElementById('roomDescription').innerHTML = room.description;
    document.getElementById('studentLife').innerHTML = student.life;
    document.getElementById('studentMoney').innerHTML = student.money
    document.getElementById('actions').innerHTML = ' ';
    if (isGameOver()) {
        restart();
        return;
    }

    for (var i = 0; i < room.actions.length; i++) {
        (function (i) {
            var action = room.actions[i];
            var button = document.createElement('button')
            button.innerHTML = action.title;
            button.addEventListener('click', function () {
                student.life -= action.cost;
                roomId = action.id;
                gotoRoom();
            });
            document.getElementById('actions').appendChild(button);
        })(i);
    }

    if (room.canFoundMoney === true) {
        var money = Math.round(Math.random() * 100);
        var button = document.createElement('button');
        button.addEventListener('click', function () {
            student.money += money;
        })
        // создать кнопку
        // подпись поднять количество монет
        // событие 
    }

    if (room.spendMoney) {
        var input = document.createElement('input');
        var button =
            button.addEventListener('click', function () {
                var money = input.value = 0;
                var action = spendMoney(money);
                if (action) {
                    room.actions.push(action);
                }
                gotoRoom();
            })
    }
}

function spendMoney(money) {
    student.money -= money;
    student.life += Math.round(Math.random() * 10) * (money / 2);
}