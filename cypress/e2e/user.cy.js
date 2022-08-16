describe("users tests", function() {
  it("should render user list", function() {
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

    cy.get("li").should("have.length", 2);

    cy.get("li")
      .eq(0)
      .should("contain", "John Bret");

    cy.get("li")
      .eq(1)
      .should("contain", "Chelsey Kamren");
  });
});
