
Cypress.Commands.add('loginbytoken', () => {
    const token = Cypress.env('LABELLERR_TOKEN')

    Cypress.log({
        name: 'loginbytoken',
        message: 'Logging in using token'
    })

    cy.intercept('GET', '**/auth/user*', {
        statusCode: 200,
        body: {
            uuid: 'test-user-123',
            email: 'test@gmail.com',
            first_name: 'admin',
            last_name: 'admin',
            role: 'admin'
        }
    }).as('getUser')

    cy.visit(`https://testing1.labellerr.com/?token=${token}`, { log: false })

    cy.wait('@getUser')
})

