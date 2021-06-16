function pizzaOven(crust, sauce, cheese, toppings){
    var new_pizza = {
        crust,
        sauce,
        cheese,
        toppings
    }
    return new_pizza
}


console.log(pizzaOven("stuffed", "marinara", "mozzarella", ["olive", "bacon"]))
console.log(pizzaOven("hand tossed", "marinara",['feta, american'] , ["olive", "bacon"]))