/// <reference types= 'cypress'/> 


describe("Partial update the bookings", function () {

    let bookingUrl = Cypress.env('bookingUrl')

    it('Partial booking update', function () {
        //Create new booking
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
                    "checkout": "2023-01-07"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            let bookingid = res.body.bookingid
            let firstname = res.body.booking.firstname
            expect(res.body).has.property('bookingid', bookingid)
            cy.log(firstname)

            //Update partial booking
            cy.request({
                method: 'PATCH',
                url: bookingUrl + bookingid,
                headers: {
                    "Authorization": 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                },
                body: {
                    "firstname": "James updated",
                    "lastname": "Brown"
                },
            }).then((res) => {
                expect(res.status).to.eq(200)
                let firstname = res.body.firstname
                cy.log(firstname)

            })
        })
    })


})