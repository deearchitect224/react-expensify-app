import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default set', () => {
    const state = expensesReducer(undefined, {type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add expense', () => {
    const expense = {
        id:'4',
        description: 'test expense',
        note: '',
        amount: 295,
        createdAt: moment(0).add(10, 'days')  
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

test('should edit expense for given id', () => {
    const updates = {
        description: 'test expense'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: "1",
        updates: updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{
        ...expenses[0],
        ...updates
    }, expenses[1], expenses[2]]);
});

test('should not edit expense if id not found', () => {
    const updates = {
        description: 'test expense'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: "-1",
        updates: updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});