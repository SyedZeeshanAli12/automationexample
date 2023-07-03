import { Signup } from "../POM/SignUp";
import { Logout } from "../POM/Logout";

import {faker} from '@faker-js/faker';


const signup = new Signup()
const logout = new Logout()

const email = faker.internet.email()
const fakename = faker.name.fullName()
const firstname = faker.name.firstName()
const lastname = faker.name.lastName()


describe('Sign up page test', () => {
    beforeEach(()=>{
        signup.navigate('https://www.automationexercise.com/')
    })
    it('SignupForm', () => {
       signup.SignUpButton()
       cy.wait(2000)
       signup.EnterName(fakename)
       cy.wait(2000)
       signup.EnterEmail(email)
       cy.wait(2000)
       signup.SignUp()
       cy.wait(2000)
       signup.SelectGender()
       cy.wait(2000)
       signup.EnterPassword('johnny123456')
       cy.wait(2000)
       signup.DayofBirth()
       cy.wait(2000)
       signup.MonthofBirth()
       cy.wait(2000)
       signup.YearofBirth()
       cy.wait(2000)
       signup.NewsLetter()
       cy.wait(2000)
       signup.SpecialOffer()
       cy.wait(2000)
       signup.FirstName(firstname)
       cy.wait(2000)
       signup.LastName(lastname)
       cy.wait(2000)
       signup.Company('Nexus Berry')
       cy.wait(2000)
       signup.Address('363 phase 2 cambridge road')
       cy.wait(2000)
       signup.Country()
       cy.wait(2000)
       signup.State('Torronto')
       cy.wait(2000)
       signup.City('Cambridge')
       cy.wait(2000)
       signup.ZipCode('54000')
       cy.wait(2000)
       signup.MobileNumber('+1347863349332')
       cy.wait(2000)
       signup.CreateAccount()
       cy.wait(4000)
       signup.Continue()
       logout.Logout()
  })
})