import React from "react";
import { render } from "@testing-library/react";
import AliveButton from "../component/character/AliveButton";

test('Button should display correct background color based on status', () => {
    const characterDetail = {
      status: 'Alive',
    };
    
    const { getByText } = render(<AliveButton characterDetail={characterDetail} />);
    
    const button = getByText('Alive');
    
    expect(button).toHaveStyle('background-color: #50C878');
  });