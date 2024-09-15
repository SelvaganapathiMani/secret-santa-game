const { expect } = require('chai');
const { assignSecretSantas } = require('../controllers/santaController');

describe('Secret Santa Assignment', () => {
    it('should not allow an employee to be assigned to themselves', () => {
        const employees = [{ Employee_Name: 'Alice' }, { Employee_Name: 'Bob' }];
        const previous = [];
        const result = assignSecretSantas(employees, previous);
        expect(result[0].Secret_Child_Name).to.not.equal('Alice');
        expect(result[1].Secret_Child_Name).to.not.equal('Bob');
    });
});
