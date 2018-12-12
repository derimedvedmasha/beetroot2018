alert ("hello");
promt - принимает значение от пользователя

console.log("hello");
VM193:1 hello


var a = "111";


console.log (a)
VM236:1 111

// переопределяет значение
var a = { };
var y = x;
undefined
a
{}
y
{}
x.prop = true;

// солнечная ситема

<script>
		var solarSystem = {
	earth: {
		population: 7000000000,
		countries: {
			ukraine: {
				population: 48000000,
			},
			usa: {
				population: 150000000,
				states: ['New York', 'California']
			}
        }
    }
};

solarSystem.earth.countries.usa.states[1];
"California"
console.log("solarSystem");
	</script>

	var planet = 'earth';
undefined

solarSystem[planet];
{population: 7000000000, countries: {…}}

// 

// МАССИВ
// 1 variant
var list = [
	'item1',
	'item2',
];

list[0];
"item1"

// list.length  колво элементов в массиве
// 
// 2 variant
var list = [
	'item1',
	[
	'item2',
	'item3',
	]
];

обратиться ко 2му элементу
undefined
list[1][1];
"item3"

list[1].length;

// push - добаввить элемент в конец
var list = [1,2,3];
undefined
list
(3) [1, 2, 3]
list.push(4);
4
list
(4) [1, 2, 3, 4]

// или 

var list = [1,2,3];
undefined
list[3]
undefined
list[3] = 4;
4
// или если мы не знвем колво элементов
list[list.length] = 4; - кол-во элементов в массиве
// 

// порядковый номер 
var list = [1,2,3];
undefined
list.indexOf(3)
2


//  ФУНКЦИИ
if (1 > 2) {
		console.log('hello');
    } else {
		console.log('hello2');
    };

// 
   function add (x, y) {
	if (typeof x === 'number') {
	return x + y;
    } else {
		console.log('error');
    }
}

add({},2);
// 
var a = Math.round(Math.random();
if (a) {// или (!!a)
console.log('орел');
}
console.log('решка');
}


play() {
  var a = Math.round(Math.random());
  console.log(a);
if (a) {// или (!!a)
return 'орел';
}
return 'решка';
}
console.log(play());

// 
var maxNumber = prompt('Введите максимальное значение ') ;
var result = Math.floor(Math.random() * maxNumber + 1);
console.log(result);
// 
function random() {
var maxNumber = +prompt('Введите максимальное значение ') ;
if (isNaN(maxNumber)) {
	random();
	 return; //текущее выполнение ф-и прекратилось
}

var result = Math.floor(Math.random() * maxNumber + 1);
console.log(result);
}

random();
// 
function random(repeat) {
	var str ='Введите максимальное значение';
	var strRepeat = 'Введите только число!';

if (repeat) {
	var message = str + '\n' + strRepeat;
} else {
	var message = str;
}

var maxNumber = +prompt(message) ; // !!!!!!!!!!!!!!!!!!!!!!1
if (isNaN(maxNumber)) {
	random(true);
	return;
}

console.log(Math.floor(Math.random() * maxNumber + 1));
}

random(false);
// или сократить так

function random(repeat) {
	var str ='Введите максимальное значение';
	var strRepeat = 'Введите только число!';

 var message = (repeat) ? str + '\n' + strRepeat : str; //!!!!!!!!!!!!!!!!!!11

var maxNumber = +prompt(message) ;
if (isNaN(maxNumber)) {
	random(true);
	return;
}

console.log(Math.floor(Math.random() * maxNumber + 1));
}

random(false);
//

моя ф-я
vvar login = prompt("Введите логин");


 	if (login == null) {
		alert("Вход отменен")  ;
    }	;

// 	if (login ! == "Админ") {
// 		alert("Я вас не знаю!")  ;
//     }	;
	
	if (login == "Админ") {
// 	 	message = password;
	var password = prompt("Введите пароль");

		if (password == "Черный Властелин") {
			alert("Добро пожаловать!");
		
		if (password == null) {
			alert("Вход отменен")  ;
    	} ;

        } else  {
 			alert('Пароль не верен!');
	}
		
	 
} else  {
 	alert('Я вас не знаю!');
 }
    

// можно ф-ю вызывать раньше чем она объяывлена 


smth();

function smth() {
	return 1;
}
// 

var smth = function hello() {   
	hello();   yes
}

hello();		no
// 
аргументы

function smth(x, y) {
	console.log(arguments);
};
undefined

smth(1, 2);
// 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script>
		var solarSystem = {
	earth: {
		population: 7000000000,
		countries: {
			ukraine: {
				population: 48000000,
			},
			usa: {
				population: 150000000,
			}
        }
    }
};
console.log("solarSystem");
	</script>
</head>
<body>
	
</body>
</html>
// 