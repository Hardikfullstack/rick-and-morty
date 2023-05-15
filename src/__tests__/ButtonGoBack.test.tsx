import React from "react";
import {  fireEvent, render, screen } from "@testing-library/react";
import ButtonGoBack from "../component/character/ButtonGoBack";

describe("Button Component" ,() => {
    const setToggle= jest.fn();
    render(<ButtonGoBack handleDetails={setToggle}/>);
    const button = screen.getByTestId("go_back"); 

    fireEvent.click(button); 
      
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Button Text", () => {
        expect(button).toHaveTextContent("Go Back"); 
    })
})