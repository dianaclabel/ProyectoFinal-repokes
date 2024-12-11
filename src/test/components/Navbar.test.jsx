import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

describe("Test <NavBar/>", () => {
  test("Mostrar los items ded nav", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const item = screen.getByTestId("home");
    const item2 = screen.getByTestId("favoritos");
    const item3 = screen.getByTestId("ReportarPokemon");

    expect(item).toBeDefined();
    expect(item2).toBeDefined();
    expect(item3).toBeDefined();
  });
});
