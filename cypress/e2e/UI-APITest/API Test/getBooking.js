/// <reference types ='cypress'/>


describe('API Test suite', function () {

    let bookingUrl = Cypress.env("bookingUrl")

    it('Get all the bookings', function () {
        cy.request({
            method: 'GET',
            url: bookingUrl,
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        })

    })

})