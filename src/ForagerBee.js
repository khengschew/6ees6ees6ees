class ForagerBee extends Bee {
  constructor (canFly = true, job = 'find pollen', age = 10, color) {
    super(job, age, color);
    this.canFly = canFly;
    this.treasureChest = [];
  }

  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
