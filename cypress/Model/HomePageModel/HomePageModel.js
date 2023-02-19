
let bookingdatesCheckIn;
let bookingdatesCheckOut;

class HomePageModel {

    elements = {
        firstName: () => cy.get('input[name="firstname"]'),
        lastName: () => cy.get('input[name="lastname"]'),
        email: () => cy.get('input[name="email"]'),
        phoneNumber: () => cy.get('input[name="phone"]'),
        button: () => cy.get('button[type="button"]'),
        errorMessageDialog: () => cy.get('.alert')
    }
    clickBookRoomButton() {
        this.elements.button().should('contain.text', 'Book this room').click({ multiple: true })
    }

    selectDateForBooking() {
        cy.get('.rbc-today').drag(':nth-child(5) > .rbc-row-bg > :nth-child(2)')
    }

    enterDetailsForBooking(firstName, lastName, email, phoneNumber) {
        this.selectDateForBooking()
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.email().type(email)
        this.elements.phoneNumber().type(phoneNumber)
        cy.get('.btn-outline-primary.float-right.book-room').should('contain.text', 'Book').click()
    }
    verifyErrorMessageWithoutSelectingBookingDate() {
        this.elements.errorMessageDialog().should('contain.text', 'must not be null')
    }

    verifySuccessDialog() {
        cy.get('div[role="dialog"]').find('div').should('contain.text', 'Booking Successful!')

    }

    verifyErrorMessageForSameBookingDate() {
        this.createBookingAndVerifyBookingIsVisible()
    }

    verifyErrorMessageForAllFields() {
        this.elements.button().should('contain.text', 'Book this room').click({ multiple: true })
        cy.get('.btn-outline-primary.float-right.book-room').should('contain.text', 'Book').click()
        this.elements.errorMessageDialog().should('contain.text', 'Lastname should not be blank')
        this.elements.errorMessageDialog().should('contain.text', 'Firstname should not be blank')
        this.elements.errorMessageDialog().should('contain.text', 'size must be between 3 and 18')
        this.elements.errorMessageDialog().should('contain.text', 'size must be between 11 and 21')
        this.elements.errorMessageDialog().should('contain.text', 'size must be between 3 and 30')
        this.elements.errorMessageDialog().should('contain.text', 'must not be null')
        this.elements.errorMessageDialog().should('contain.text', 'Email may not be blank')
        this.elements.errorMessageDialog().should('contain.text', 'must not be empty')
    }

    createBookingAndVerifyBookingIsVisible() {
        cy.request({
            method: 'POST',
            url: 'https://automationintesting.online/booking/',
            failOnStatusCode: false,
            body: {
                "roomid": 1,
                "firstname": "Maya",
                "lastname": "Jac",
                "email": "patilnisha3939@gmail.com",
                "phone": "+31648873231",
                "depositpaid": false,
                "bookingdates":
                {
                    "checkin": "2023-02-15",
                    "checkout": "2023-02-17"
                }
            }
        }).then((res) => {
            if (res.status === 201) {
                expect(res.status).to.eq(201)
                let bookingid = res.body.bookingid
                bookingdatesCheckIn = res.body.booking.bookingdates.checkin
                bookingdatesCheckOut = res.body.booking.bookingdates.checkout
                expect(res.body).has.property('bookingid', bookingid)
                cy.log("Booking Successfully!")
                this.verifyBookingLabelIsVisible(bookingdatesCheckIn, bookingdatesCheckOut)
            } else if (res.status === 409) {
                expect(res.status).to.eq(409)
                cy.log('The room dates are either invalid or are already booked for one or more of the dates that you have selected.')

            }

        })
    }

    verifyBookingLabelIsVisible(bookingdatesCheckIn, bookingdatesCheckOut) {
        this.clickBookRoomButton()
        cy.request({
            url: 'https://automationintesting.online/report/room/1',
            method: 'GET',
            qs:
            {
                "start": bookingdatesCheckIn,
                "end": bookingdatesCheckOut,
                "title": "Unavailable"
            },
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.report[res.body.report.length - 1]).has.property("start", bookingdatesCheckIn)
            expect(res.body.report[res.body.report.length - 1]).has.property("end", bookingdatesCheckOut)
            expect(res.body.report[res.body.report.length - 1]).has.property("title", "Unavailable")

        })

    }
}


module.exports = new HomePageModel()



