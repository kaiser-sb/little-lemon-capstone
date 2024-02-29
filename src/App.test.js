import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './App';

test('initializeTimes function returns the correct expected value', () => {
    const expectedValue = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];
    const result = initializeTimes();

    expect(result).toEqual(expectedValue);
});

test('updateTimes function returns the same value as provided in the state', () => {
    const currentState = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];

    const result = updateTimes(currentState);

    expect(result).toEqual(currentState);
});

