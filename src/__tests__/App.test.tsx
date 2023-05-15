import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";

test("renders the landing page", () => {
  const {getByText} =render(
      <Provider store={store}>
      <App />
  </Provider>
  );

  const el = getByText('Rick ', { exact: false })
  expect(el.textContent).toEqual('Rick and Morty App');

});
