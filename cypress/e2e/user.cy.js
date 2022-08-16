describe("users tests", function() {
  const mockUsers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Bret",
      email: "John.Bret@google.com",
      website: "hildegard.org"
    },
    {
      id: 2,
      firstName: "Chelsey",
      lastName: "Kamren",
      email: "Chelsey.Kamren@google.com",
      website: "demarco.info"
    }
  ];
  beforeEach(() => {
    cy.intercept("GET", Cypress.env("API"), {
      statusCode: 200,
      body: mockUsers
    });

    cy.visit('/');
  });

  it("should render user list", function() {
    cy.get("h2").should("contain", "用户列表");

    cy.get("li").should("have.length", 2);

    cy.get("li")
      .eq(0)
      .should("contain", `${mockUsers[0].firstName} ${mockUsers[0].lastName}`);

    cy.get("li")
      .eq(1)
      .should("contain", `${mockUsers[1].firstName} ${mockUsers[1].lastName}`);
  });

  it("should render first user as default user", () => {
    //GIVEN there are 2 users in user system
    //When we visit the page
    //Then we would see the first user's details
    cy.get("h2").should("contain", "用户详情");
    cy.get("h3").should("contain", `${mockUsers[0].firstName} ${mockUsers[0].lastName}`);
    cy.contains(`${mockUsers[0].email}`);
    cy.contains(`${mockUsers[0].website}`);
  });
});
