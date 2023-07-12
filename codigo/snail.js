const snail = arr => {
	let finalArray = [];
	while (arr.length) {
		finalArray.push(...arr.shift());
		arr.map(row => finalArray.push(row.pop()));
		arr.reverse().map(row => row.reverse());
	}
	return finalArray;
};

console.log(
	snail([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);

import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup(value = 0) {
	const actions = {
		onIncrement: jest.fn(),
		onDecrement: jest.fn(),
	};
	const component = shallow(<Counter value={value} {...actions} />);

	return {
		component: component,
		actions: actions,
		buttons: component.find('button'),
		p: component.find('p'),
	};
}

describe('Counter component', () => {
	it('should display count', () => {
		const { p } = setup();
		expect(p.text()).toMatch(/^Clicked: 0 times/);
	});

	it('first button should call onIncrement', () => {
		const { buttons, actions } = setup();
		buttons.at(0).simulate('click');
		expect(actions.onIncrement).toBeCalled();
	});

	it('second button should call onDecrement', () => {
		const { buttons, actions } = setup();
		buttons.at(1).simulate('click');
		expect(actions.onDecrement).toBeCalled();
	});

	it('third button should not call onIncrement if the counter is even', () => {
		const { buttons, actions } = setup(42);
		actions.onIncrement.mockClear();
		buttons.at(2).simulate('click');
		expect(actions.onIncrement).toHaveBeenCalledTimes(0);
	});

	it('third button should call onIncrement if the counter is odd', () => {
		const { buttons, actions } = setup(43);
		buttons.at(2).simulate('click');
		expect(actions.onIncrement).toBeCalled();
	});

	it('third button should call onIncrement if the counter is odd and negative', () => {
		const { buttons, actions } = setup(-43);
		buttons.at(2).simulate('click');
		expect(actions.onIncrement).toBeCalled();
	});

	it('fourth button should call onIncrement in a second', done => {
		const { buttons, actions } = setup();
		buttons.at(3).simulate('click');
		setTimeout(() => {
			expect(actions.onIncrement).toBeCalled();
			done();
		}, 1000);
	});
});

// add reducers accordingly
export default function(state = 0, action) {
   switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,696,6,4,3,2, 10];

const removeDuplicates = function (nums) {
	let uniqueNumbers = [];
	for (let i = 0; i < nums.length; i++) {
		if (uniqueNumbers.indexOf(nums[i]) === -1) {
			uniqueNumbers.push(nums[i]);
		}
	}
	return uniqueNumbers;
};

removeDuplicates(numbers);

const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = function (prices) {
	let maxProfit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i + 1] > prices[i]) {
			maxProfit += prices[i + 1] - prices[i];
		}
	}
	return maxProfit;
}

console.log(maxProfit(prices));

