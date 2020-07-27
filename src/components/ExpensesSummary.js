import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount > 1 ? 'expenses' : 'expense'
    return (
        <div>
            <h1>You have {expensesCount} {expenseWord} totaling {expensesTotal}</h1>
        </div>

    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses)).format('$0,0.00')
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
