class Car {
    constructor (name = '', color ='', id = ''){
        this.name = name;
        this.color = color;
        this.id = id;
    }

    get name(){
        return `${this.name}`;
    }

    get color(){
        return `${this.color}`;
    }

    get id(){
        return `${this.id}`;
    }

    set name(name){
         this.name = name;
    }

    set color(color){
        this.color = color;
    }
}