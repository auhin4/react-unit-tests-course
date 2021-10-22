import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);
        //Act
        //...nothing
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders It\'s good to see you if button was not clicked', () => {
        render(<Greeting />);
        const goodToSeeYouElement = screen.getByText('good to see you', {exact: false});
        expect(goodToSeeYouElement).toBeInTheDocument();
    });

    test('renders Changed! if button was clicked', () => {
        //Arrange
        render(<Greeting />);
        
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const changedElement = screen.getByText('Changed!');
        expect(changedElement).toBeInTheDocument();
    });

    test('makes sure good to see you is not displayed if the button is clicked', () => {
        render(<Greeting />);

        const goodToSeeYouElement = screen.getByText('good to see you', {exact: false});

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        expect(goodToSeeYouElement).not.toBeInTheDocument();
    });
});

