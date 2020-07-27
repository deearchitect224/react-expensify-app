import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 for empty expenses', () =>{
    const total = selectExpensesTotal([]);
    expect(total).toEqual(0);
});

test('should correctly add up single expense', () =>{
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});


test('should correctly add up multiple expenses', () =>{
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
});