import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render Expenses Summary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={10}/>);
    expect(wrapper).toMatchSnapshot();
}); 

test('should render Expenses Summary with empty message', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
}); 

test('should render Expenses Summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={50}/>);
    expect(wrapper).toMatchSnapshot();
}); 