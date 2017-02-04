//var birds = ["Dove", "Parrot", "Chicken", "Eagle"];

//add class report
//add class sells

function Store() {
    const QUANTITY = 0;
    const PRICE = 1;
    const SOLD = 2;
    //var types = ["Dove", "Parrot"];
    var store = {Dove:[1,2,3], Parrot:[1,2,3]};
    this.getTypes = function() {
        return Object.keys(store);
    };
    this.addBird = function(type, quantity, price){
        quantity = parseInt(quantity);
        price = parseInt(price);
        if (!(type in store)) {
            store[type] = [quantity, price, 0];
        } else {
            store[type][QUANTITY] += quantity;
            store[type][PRICE] = price;
        }
    };
    this.sellBird = function(type, quantity) {
        quantity = parseInt(quantity);
        if (!(type in store)) {
            alert("No such bird!!!")
        } else {
            store[type][QUANTITY] -= quantity;
            store[type][SOLD] += quantity;
        }
    }
    this.getBird = function(type) {
        if (!(type in store)) {
            alert("No such bird!!!")
        } else {
            return store[type];
        }
    }
}

function Transactions() {
    const SELL = 0;
    const ADD = 1;
    var operation = 0;
}

var fillSelect = function(store, id) {
    var select = document.getElementById(id);
    select.innerHTML = "";
    store.getTypes().forEach(function(el) {
        var option = document.createElement("option");
        option.text = el;
        select.add(option);
    });
}

var fillStockTable = function(store, id) {
    var table = document.getElementById(id);
    table.innerHTML = '<tr><th>Type</th><th>In stock</th><th>Price</th><th>Sold</th></tr>';

    store.getTypes().forEach(function(type) {
        var bird = store.getBird(type);
        var row = table.insertRow();
        var c1 = row.insertCell(0);
        c1.innerHTML = type;
        var c2 = row.insertCell(1);
        c2.innerHTML = bird[0];
        var c3 = row.insertCell(2);
        c3.innerHTML = bird[1];
        var c4 = row.insertCell(3);
        c4.innerHTML = bird[2];
    });
}

var store = new Store();

function addBird() {
    var type = document.getElementById("add-type");
    var quantity = document.getElementById("add-quantity");
    var price = document.getElementById("add-price");
    store.addBird(type.value, quantity.value, price.value);
    fillSelect(store, "type-select");
    fillStockTable(store, "stock-table");
}

function sellBird() {
    var type = document.getElementById("type-select");
    var quantity = document.getElementById("buy-quantity");
    store.sellBird(type.value, quantity.value);
    fillSelect(store, "type-select");
    fillStockTable(store, "stock-table");
}

//fillSelect(store, "buy-select");
fillSelect(store, "type-select");
fillStockTable(store, "stock-table");

//updateTable()