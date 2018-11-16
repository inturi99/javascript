var empty_object = {};
var stooge = {
    'first-name': 'krishna',
    'last-name': 'inturi'
};

stooge['middle-name'] = 'Rao';
//console.log(stooge)
var x = stooge;
x.nickname = 'Krish';
//console.log(x);
console.log(stooge['middle-name']);
var flight = {
    airline: 'Oceanic',
    number: 1234,
    departure: {
        IATA: 'SYD',
        time: '2015-04-21 14:20',
        city: 'sydney'
    },
    arrival: {
        IATA: 'LAX',
        time: '2015-04-22 10:20',
        city: 'Los Angeles'
    }

};

