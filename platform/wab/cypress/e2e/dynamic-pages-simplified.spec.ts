import {
  createTutorialDataSource,
  getSelectedElt,
  removeCurrentProject,
  setSelectByLabel,
  setupNewProject,
  TUTORIAL_DB_TYPE,
  withinTopFrame,
} from "../support/util";

describe("dynamic-pages-simplified", function () {
  beforeEach(() => {});

  afterEach(() => {
    removeCurrentProject();
  });

  it("simplified works", () => {
    createTutorialDataSource(TUTORIAL_DB_TYPE);
    setupNewProject({
      name: "dynamic-pages",
    });
    cy.withinStudioIframe(() => {
      cy.createNewPageInOwnArena("Greeter", {
        template: "Dynamic page",
        after: () => {
          cy.get("#data-source-modal-pick-integration-btn").click();
          withinTopFrame(() => {
            setSelectByLabel("dataSource", "TutorialDB");
            // In this within(), for some reason, .contains() doesn't work.
            // It internally uses :cy-contains(), and for some reason it's just not matching the elements.
            // But these selectors continue to work.
            cy.get("button:contains(Confirm)").click();
          });
          setSelectByLabel("dataTablePickerTable", "products");

          cy.get("button:contains(product_id)").should("be.visible");
          cy.get(
            "button:not([disabled]):contains(Create dynamic page)"
          ).click();
        },
      }).then((frame) => {
        cy.contains("Page data").click();

        cy.get('[data-test-id="page-path"] input').should(
          "have.value",
          "/products/[product_id]"
        );

        getSelectedElt().should("have.text", "1");
        cy.get('[data-test-id="page-param-name"] input').should(
          "have.value",
          "1"
        );

        cy.contains("View different record").click();
        cy.contains("Show filters").click();
        cy.contains("Sort by").should("be.visible");
        const viewButtonsSel =
          ".bottom-modals tbody tr[data-row-key] td:contains(View):nth-child(1)";
        cy.get(viewButtonsSel).should("have.length.gte", 10);
        cy.get(viewButtonsSel).eq(1).click();
        cy.wait(200);

        getSelectedElt().should("have.text", "2");
        cy.get('[data-test-id="page-param-name"] input').should(
          "have.value",
          "2"
        );
      });
    });
  });
});
