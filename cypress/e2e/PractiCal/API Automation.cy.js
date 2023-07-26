const { expect, assert } = require("chai");


describe('Quiz A',() => {

  //Dynamic variable for url
  const HomePageUrl= 'https://stg.beta.practical.me/';
  const BaseUrl= 'https://stg.admin.practical.me';
  

  //Generating random phone number
  function generateRandomPhoneNumber() {
    let phoneNumber = "";
    const digits = "0123456789";
  
    for (let i = 0; i < 10; i++) 
    {
      phoneNumber += digits.charAt(Math.floor(Math.random() * digits.length));
    }
  
    return phoneNumber;
  }
  
  const randomPhoneNumber = generateRandomPhoneNumber();
  //console.log(randomPhoneNumber);
  

       
  
      //Test Case 1
      //PractiCal Get Request
      before('each execution of the rest of the PractiCal APIs, this block of code should be executed',() => {
  
        //loop to execute the request 5 times
        var i = 0;
        for (i = 0; i < 5 ; i++) 
        //adding code inside the loop block to execute n times
        {
  
       cy.request('GET', HomePageUrl)     //this syntax can also be used if we don't have to send body
  
       //Assertions
       .its('status')
       .should('equal',200);
        }
      
       
      })//EOB 1
  
  
  
        //Test Case 2
      //Quiz A Post Request
      it ('Should perform Quiz A', ()=>
       {
       cy.request({
              method: 'POST', //method type should be in all caps
              url: BaseUrl + '/api/quiz',
              body:
               {
                  "gender": "Female",
                  "main_goal": "Lose weight / Get lean",
                  "average_daily_activity_level": "Medium",
                  "age": 35,
                  "weight": 65,
                  "weight_unit": "kgs",
                  "average_meals_day": "3",
                  "average_snacks_day": "3",
                  "meals_deliver_per_day": "4",
                  "snacks_deliver_per_day": "2",
                  "meal_days_per_week": 6,
                  "meal_plan_require_weeks": 2,
                  "quiz_type": "quiz_a"
               }
  
                  })
  
              //Assertions
              //Created a variable named reponse to store the response 
              .then( (response) => {
  
                cy.log(JSON.stringify(response)) //to print response in Json format 
                expect(response.status).eq(201)  //assertion
                expect(response.body.data.guest_detail.weight).eq(65) //assertion
  
                //captured the key value from the response
  
                Cypress.env('key', response.body.data.key);
                cy.log(Cypress.env('key'));
               
                
                //alternative method
                // let key=response.body.data.key
                // cy.log(key)
               }) 
  
  
        }) //EOB 2
  
  
    //Test Case 3
    //Sign up Post Request
    it('Should Sign Up', () => {
        cy.request({
           method: 'POST',
           url: BaseUrl + '/api/signup',
           headers:
           {
             'Content-Type': 'application/json',
           },
           body: 
           {
              //generating random email                
              "email": Math.random().toString(5).substring(2) +"@mailinator.com", 
              "uuid":  `${Cypress.env('key')}`, //calling the captured key from the above block
              "first_name": "PractiCal",
              "sur_name": "User",
              "phone": randomPhoneNumber,
              "password": "Aa12345!",
              "password_confirm": "Aa12345!",
              "social_auth_type": "normal",
              "promo_code": null,
              "is_beta": false
           }
     })
     .then( (response) => {
  
      cy.log(JSON.stringify(response))
     })
  
    })//EOB 3
  
  
    //Test Case 4
    //User Preferances Post request
    it('Should add User Preferances | User Profile', () => 
    {
      cy.request({
         method: 'POST',
         url: BaseUrl + '/api/user/profile',
         headers:
         {
           'Content-Type': 'application/json',
         },
         body: 
         {
          "vegeterian": "No I am not",
          "food_dislikes": 
          [
              "I have no dislikes"
          ],
          "meal_plan_pause_date": [],
          "meal_plan_start_date": "18.08.2023",
          "meal_plan_end_date": "31.08.2023",
          "days_food_delivery":
           [
              "Mon",
              "Tues",
              "Weds",
              "Thur",
              "Fri"
          ],
          "allergy": 
          [
              "I have no allergies"
          ]
         }
        
                })
     } )//EOB 4
  
  
   //Test Case 5
   //Add Card Post Request
   it('Should Add credit card', () => 
   {
    cy.request({
       method: 'POST',
       url: BaseUrl + '/api/user/default/card',
       headers:
       {
         'Content-Type': 'application/json',
       },
       body: 
       {
        "card_id": 199
       }
      
               })
  
    })//EOB 5
  
  
   //Test Case 6
   //Add Address Post Request
   it('Should Add Address', () => 
   {
    cy.request({
       method: 'POST',
       url: BaseUrl + '/api/user/default/address',
       headers:
       {
         'Content-Type': 'application/json',
       },
       body: 
       {
        "address_id": 216
       }
      
               })
  
  
  })//EOB 6
  
  
  //Test Case 7
   //Pay now Post Request
   it('Should do Final Payment', () => 
   {
    cy.request({
       method: 'POST',
       url: BaseUrl + '/api/final_order',
       headers:
       {
         'Content-Type': 'application/json',
       },
       body: 
       {
        "meal_plan_require_weeks": 2,
        "is_subscribed": 0,
        "orderData": 
        {
            "is_subscribed": false,
            "time_slot": "Dubai:6pm-9pm",
            "address_id": 216,
            "card_id": 199,
            "price": 1478,
            "instructions": null,
            "promo_code": null,
            "discount_id": null,
            "subTotal": 1478,
            "subscriptionDiscount": null,
            "promoSummary": null
        },
        "order_id": 718
        }
      
               })

    })//EOB 7
  
  
    //Test Case 8
   //Confirm and Pay Post Request
   it('Check out', () => 
   {
    cy.request({
       method: 'POST',
       url: BaseUrl + '/api/final_order',
       headers:
       {
         'Content-Type': 'application/json',
       },
       body: 
       {
        "is_subscribed": 0,
        "time_slot": "Dubai:6pm-9pm",
        "address_id": 216,
        "card_id": 199,
        "price": 1478,
        "instructions": null,
        "promo_code": null,
        "discount_id": null,
        "meal_plan_require_weeks": 2,
        "order_id": 718
       }
      
               })

               
  
  
  })//EOB 8
  
  
  
  
  
  
  
  })//EODB