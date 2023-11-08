import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
// polyfill some js features like String.matchAll()
import "core-js";
import * as React from "react";
import tmp from "tmp";
import { Site } from "../../../classes";
import { Bundler } from "../../bundler";
import { codegen } from "../codegen-tests-util";
// Exported from https://studio.plasmic.app/projects/uhASAhKsCsKUuxeJL6gacV
import todomvcBundle from "./bundles/todomvc.json";

describe("todolist blackbox codegen", () => {
  todomvcBundle.version = "some-version";
  const site = new Bundler().unbundle(todomvcBundle, "") as Site;

  // NOTE: automatic cleanup via setGracefulCleanup doesn't work with jest.
  // here we're manually removing the folder after the test.
  const dir = tmp.dirSync({ unsafeCleanup: true });
  afterEach(() => {
    dir.removeCallback();
  });

  it("should work", async () => {
    const importFromProject = await codegen(dir.name, site);
    // Import the root component from js
    const ThemeContext = await importFromProject(
      "PlasmicGlobalVariant__Theme.js"
    );
    const component = await importFromProject("TodoApp.js");

    // Render the component using @testing-library
    render(
      React.createElement(ThemeContext.default.Provider, { value: "light" }, [
        React.createElement(component.default),
      ])
    );

    // Some basic sanity checks
    expect(screen.getByText("todos")).toBeDefined();
    expect(screen.getByPlaceholderText("Some placeholder text")).toBeDefined();
  }, 300000);
});
