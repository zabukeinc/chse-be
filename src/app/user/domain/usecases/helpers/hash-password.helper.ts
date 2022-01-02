const bcrypt = require('bcrypt');

export class HashPassword {
  constructor(protected property: string) { }

  hash(): string {
    return bcrypt.hashSync(this.property, 10)
  }
}