describe("users tests", function() {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8080/users", {
      statusCode: 200,
      body: [
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
      ]
    });

    cy.visit("http://localhost:3000");
  });

  it("should render user list", function() {
    cy.get("h2").should("contain", "用户列表");

    cy.get("li").should("have.length", 2);

    cy.get("li")
      .eq(0)
      .should("contain", "John Bret");

    cy.get("li")
      .eq(1)
      .should("contain", "Chelsey Kamren");
  });

  it("should render first user as default user", () => {
    //GIVEN there are 2 users in user system
    //When we visit the page
    //Then we would see the first user's details
    cy.get("h2").should("contain", "用户详情");
    cy.get("h3").should("contain", "John Bret");
    cy.contains("John.Bret@google.com");
    cy.contains("hildegard.org");
  });
});
