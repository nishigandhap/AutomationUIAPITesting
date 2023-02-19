/// < reference types ='cypress'/>

import contactInfoModel from "../../../Model/HomePageModel/ContactInfoModel"

describe('Contact Info suite', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl'))

    })

    it('Submitting valid contact information and verifying correct feedback message.', function(){
        contactInfoModel.enterDetailsForContact('Bob', 'bob@gmail.com', +31763736734, 'Inquiry', 'Thank you. Looking forward to hearing from you.')
        contactInfoModel.verifyAcceptMessage()
    })

    it('Validate error messages for all empty fields upon submission.', function(){
        contactInfoModel.verifyErrorMessageForAllFields()

    })
})
