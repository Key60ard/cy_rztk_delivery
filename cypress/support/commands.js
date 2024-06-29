Cypress.Commands.add('safeClick', (locator) => {
    cy.window()
     .document()
       .then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () {
              doc.location.reload()
            }, 2000)
          })
          cy.get(locator).click({force:true})
        })
   })  