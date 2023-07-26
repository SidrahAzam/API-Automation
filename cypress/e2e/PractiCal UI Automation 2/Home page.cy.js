//Practical Home Page

it('Practical',() => {
cy.visit('https://stg.beta.practical.me/?code=TW_PRELAUNCH')

//Quiz A

cy.contains('Get Started').click()

//Male/Female
cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//Main Goal
cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//Activity Level
cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//Skipping Discount code
cy.get('.thanksPop > .MuiLink-root').click()
//Age
cy.get('.MuiBox-root > .MuiButtonBase-root').click()
//Weight
cy.get('.MuiBox-root > .MuiButtonBase-root').click()
//Average Meals
cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//Average Snacks
cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

//No. of Meals to be delivered
cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//No. of Snacks to be delivered
cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//No. of Days 
cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
//No. of Weeks
cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

//Skip ahead to Sign up & Pay
cy.get('.style_buttonWrapper__3f4fq > .MuiButtonBase-root').click()

//Sign Up Form

//Name
cy.get('#\:R96km\:').type('PractiCal')
//Surname
cy.get('#\:Ra6km\:').type('User')
//Phone
cy.get('#\:Rb6km\:').type('987456123654')
//Email
cy.get('#\:Rc6km\:').type('user001@mailinator.com')
//Password
cy.get('#\:Rd6km\:').type('Aa12345!')
//Confirm Password
cy.get('#\:Re6km\:').type('Aa12345!')
//Sign up
cy.get('.MuiButton-root').click()

//Quiz B







})