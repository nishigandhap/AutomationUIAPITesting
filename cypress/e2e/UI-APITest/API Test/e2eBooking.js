/// <reference types = 'cypress' />


describe('Create booking, update and delete booking', function () {
    let bookingUrl = Cypress.env('bookingUrl')

    it('Create booking', function () {
        cy.request({
            method: 'POST',
            url: bookingUrl,
            body: {
                "firstname": "Jam",
                "lastname": "Hash",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2023-02-01",
                    "checkout": "2023-02-05"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            let bookingid = res.body.bookingid
            expect(res.body).has.property('bookingid', bookingid)

            // Update the booking
            cy.request({
                method: 'PUT',
                url: bookingUrl + bookingid,
                headers: {
                    "Authorization": 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                },
                body: {
                    "firstname": "Jam new",
                    "lastname": "Hash new",
                    "totalprice": 101,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2023-02-01",
                        "checkout": "2023-01-01"
                    },
                    "additionalneeds": "Breakfast"
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                cy.log(bookingid)
            })
            // delete the booking
            cy.request({
                method: 'DELETE',
                url: bookingUrl + bookingid,
                headers: {
                    "Authorization": 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                },
            }).then((res) => {
                expect(res.status).to.eq(201)
                cy.log(bookingid)
            })
            //Get the deleted booking and verify no booking is present
            cy.request({
                method: 'GET',
                url: bookingUrl + bookingid,
                failOnStatusCode: false
            }).then((res) => {
                expect(res.status).to.eq(404)
                cy.log('No booking present for ' + bookingid)

            })

        })

    })


})
