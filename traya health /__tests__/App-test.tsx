/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {fireEvent, render} from "@testing-library/react-native"


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// it('renders correctly', () => {
//   render(<App />);
// })
 

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = (
      <App />
    );

    render(component);

    const header = await screen.findByText('Login');
    
    expect(header).toBeOnTheScreen();
   
  });

  
});