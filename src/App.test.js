// Resume.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Adjusted import statement
import Resume from './Resume';
import SecondTestPage from './SecondTestPage';
import TestPage from './TestPage';

test('renders View My Resume link', () => {
  render(<Resume />);
  
  // Check if the link is in the document
  const linkElement = screen.getByText(/View My Resume/i);
  expect(linkElement).toBeInTheDocument();
  
  // Check if the link has the correct href attribute
  expect(linkElement.closest('a')).toHaveAttribute('href', 'LeviDeutschTechnicalResume.pdf');
  
  // Check if the link opens in a new tab
  expect(linkElement.closest('a')).toHaveAttribute('target', '_blank');
});



test('renders text from SecondTestPage.js', () => {
    render(<SecondTestPage />)

    // check if specific text exist in div element
    const textInDiv = screen.getByText(/econd test page adding new data to main branch adding MORE new data/i );
    expect(textInDiv).toBeInTheDocument()
})


test('button exists and toggles text', () => {
  render(<SecondTestPage />);

  // Custom function to provide a more descriptive error message
  const getButtonByText = (text) => {
      const button = screen.queryByRole('button', { name: text });
      if (!button) {
          throw new Error(`Expected to find a button with text "${text}", but did not find one.`);
      }
      return button;
  };

  // Check if the button exists and has the initial text "open"
  const button = getButtonByText(/open/i);
  expect(button).toBeInTheDocument();

  // Simulate a click on the button
  fireEvent.click(button);

  // Check if the button text changes to "close"
  const closeButton = getButtonByText(/close/i);
  expect(closeButton).toBeInTheDocument();

  // Simulate another click on the button
  fireEvent.click(closeButton);

  // Check if the button text changes back to "open"
  const openButton = getButtonByText(/open/i);
  expect(openButton).toBeInTheDocument();
});


// Test page test
test("test page text", () => {
  render(<TestPage />)

  const theDivHasText = screen.queryByText(/this is the test component new line created/i)
  expect(theDivHasText).toBeInTheDocument()
})


test("make sure ha button displays both its true and its false", () => {
  render(<TestPage />)


  const trueButton = screen.getByRole("button", {name: /its true/i})
  expect(trueButton).toBeInTheDocument()

  fireEvent.click(trueButton);

  const falseButton = screen.getByRole("button", {name: /its false/i})
  expect(falseButton).toBeInTheDocument()

  

})