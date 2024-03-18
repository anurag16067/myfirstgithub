class ToyotaCar {
    start() {
        console.log("Start");
    }
    stop () {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

// create object from class
//syntex = let myObj = newMyclass();
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");