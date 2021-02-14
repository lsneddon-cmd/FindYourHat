const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  _field;

  constructor(_field) {
    this._field = _field;
    console.log('in constructor');
  }

  printField = () => {
    let line = '';
    for(let i = 0; i < this._field.length; i++) {
      for(let j = 0; j < this._field[i].length; j++) {
        line += this._field[i][j];
      }
      console.log(line);
      line = '';
    }
  }
}

const matrix = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

matrix.printField();
