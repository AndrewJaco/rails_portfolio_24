import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

describe('AppRoutes', () => {

  test("root path renders nothing", () => {
    render(<AppRoutes />, { wrapper: MemoryRouter });
    expect(screen.queryByText('Runner List')).not.toBeInTheDocument();
  }

})