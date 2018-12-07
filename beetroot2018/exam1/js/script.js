alert ("hello");

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