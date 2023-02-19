
class ContactInfoModel {

    elements = {
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        phoneNumber: () => cy.get('#phone'),
        subject:()=> cy.get('#subject'),
        message:()=> cy.get('#description'),
        submitButton:()=> cy.get('#submitContact'),
        errorMessageDialog:()=> cy.get('.alert')
    }

    enterDetailsForContact(name, email, phoneNumber, subject, message){
        this.elements.name().type(name)
        this.elements.email().type(email)
        this.elements.phoneNumber().type(phoneNumber)
        this.elements.subject().type(subject)
        this.elements.message().type(message)
        this.elements.submitButton().click()
    }

    verifyAcceptMessage (){
        cy.get('.row.contact div h2').should('contain.text','Thanks for getting in touch Bob!')

    }

    verifyErrorMessageForAllFields(){
        this.elements.submitButton().click()
        this.elements.errorMessageDialog().should('contain.text', 'Phone may not be blank')
        this.elements.errorMessageDialog().should('contain.text','Subject may not be blank')
        this.elements.errorMessageDialog().should('contain.text','Name may not be blank')
        this.elements.errorMessageDialog().should('contain.text','Message must be between 20 and 2000 characters.')
        this.elements.errorMessageDialog().should('contain.text','Message may not be blank')
        this.elements.errorMessageDialog().should('contain.text','Subject must be between 5 and 100 characters.')
        this.elements.errorMessageDialog().should('contain.text','Email may not be blank')
        this.elements.errorMessageDialog().should('contain.text','Phone must be between 11 and 21 characters.')
    }

}

module.exports = new ContactInfoModel()