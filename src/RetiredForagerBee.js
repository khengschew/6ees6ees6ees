class RetiredForagerBee extends ForagerBee {
  constructor (canFly = false, job = 'gamble', age = 40, color = 'grey') {
    super(canFly, job, age, color);
    this.treasureChest = [];
  }

  forage () {
    return 'I am too old, let me play cards instead';
  }

  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
};
