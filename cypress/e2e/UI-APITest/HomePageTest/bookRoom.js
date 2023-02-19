/// <reference types = 'cypress'/>

import homePageModel from "../../../Model/HomePageModel/HomePageModel"

describe("Book room suite", function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Book a room wihtout selecting the date ', function () {
        homePageModel.clickBookRoomButton()
        homePageModel.enterDetailsForBooking('Bob', 'Rob', 'bob@gmail.com', +31645579831)
        homePageModel.verifyErrorMessageWithoutSelectingBookingDate()
    })

    let bookingdatesCheckIn, bookingdatesCheckOut
    it('Create booking and verify same booking is unavailable', function () {
        homePageModel.createBookingAndVerifyBookingIsVisible(bookingdatesCheckIn, bookingdatesCheckOut)
    })

    it("Book again with same date and day and check room are booked", function () {
        homePageModel.clickBookRoomButton()
        homePageModel.verifyErrorMessageForSameBookingDate()
    })

    it('Validate error messages for all empty fields upon submission', function () {
        homePageModel.verifyErrorMessageForAllFields()

    })

})
