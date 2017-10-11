

export default class Player {
    constructor(startingLife = 40, name = "error"){
        this.lifeTotal = startingLife;
        this.name = name;
    }

    updateLifeTotal(modifier){
        this.lifeTotal += modifier;
    }

    changeName(newName){
        this.name = newName;
    }
}