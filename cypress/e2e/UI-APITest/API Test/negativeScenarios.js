/// <reference types = 'cypress'/>


describe('Negative scenarios', function () {

    let bookingUrl = Cypress.env('bookingUrl')

    it('Test the invalid booking by sending invalid booking id in url', function () {
        cy.request({
            method: 'GET',
            url: bookingUrl + '232223',
            failOnStatusCode: false,

        }).then((res) => {
            expect(res.status).to.eq(404)
        })

    })

    it('Attempt to access a protected resource with incorrect authentication credentials', function () {
        cy.request({
            method: 'DELETE',
            url: bookingUrl + '1909',
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eq(403)
        })

    })
    it('Send a request to the API with an unsupported HTTP method to URL', function () {
        cy.request({
            method: 'DELETE',
            url: bookingUrl + '23923',
            failOnStatusCode: false,
            headers: {
                "Authorization": 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            },
        }).then((res) => {
            expect(res.status).to.eq(405)

        })

    })


})