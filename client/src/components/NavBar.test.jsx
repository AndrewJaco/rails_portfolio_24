import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";



describe('NavBar', () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter })};

  test('renders both links', () => {
    //render the navbar
    renderNavBar();
    //expect the links to be there or something
    expect(screen.getByText('Runners')).toBeInTheDocument();
    expect(screen.getByText('New Runner')).toBeInTheDocument();
  });})