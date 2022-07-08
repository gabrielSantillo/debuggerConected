let item_names = [`computer`, `table`, `chair`];
let item_prices = [599, 129, 89];
let in_stock = [true, false, true];

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

item_names.push('mouse');
item_prices.push(16);
in_stock.push(true);

let last_item_name = item_names.pop(3);
let last_item_price = item_prices.pop(3);
let last_item_stock = in_stock.pop(3);