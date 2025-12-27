
/// <reference types="cypress"/>

describe('Labellerr Workspace - Programmatic Auth', () => {
    beforeEach(() => {
        cy.loginbytoken()
    })

    it('lands directly on workspace', () => {
        //create project
        cy.get(':nth-child(1) > .quick-action-card > .flex-1 > .font-weight-bold').click()
        cy.wait(4000)
        //public dataset
        cy.get('#mat-tab-label-0-1 > .mdc-tab__content > .mdc-tab__text-label > .ng-star-inserted > .m-0').click()
        //select dataset
        cy.get(':nth-child(4) > app-dataset-card > .card > .d-flex').click()
        cy.get('.ml-3 > .mat-button').click()
        //adding objects for annotation
        cy.get('[data-cy="add-object-btn"]').click()
        //type the object name
        cy.get('[data-cy="object-name-input-field"]').type('obj1')
        //save the obj
        cy.get('.pr-2 > .mat-mdc-tooltip-trigger').click()
        //next step
        cy.get('.ml-3 > .mat-button').click()
        //template naming
        cy.get('.mat-mdc-dialog-content > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').clear().type('Labellerr assignment')
        //click proceed button
        cy.get('[data-cy="proceed-template-creation-btn"]').click()
        cy.wait(2000)
        //enetr project name
        cy.get('.form-input').type('Labellerr')
        //create project with labeller ai
        cy.get('.ai-button').click()
    })
})