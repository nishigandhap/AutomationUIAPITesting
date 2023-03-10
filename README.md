
# Project regarding testing basic functionality

Tested the basic functionality of the Mostly.ai site according to the provided document. The report was also generated using the Allure plugin.


## Table of Contents

* Link reference
* Scenarios
* Installation
* Running Tests
* Git repo link
* Screenshot


## Link Reference

UI link

```
  https://automationintesting.online/
```

API link

```
https://restful-booker.herokuapp.com/apidoc/index.html
```





## Scenarios

**UI Test**

**Test on Home Page:**

1. Book a room wihtout selecting the date
2. Create booking and verify same booking is unavailable
3. Book again with same date and day and check room are booked
4. Validate error messages for all empty fields upon submission.

**Test on Contact information:**

1. Submitting valid contact information and verifying correct feedback message
2. Validate error messages for all empty fields upon submission.


**API Test**
1. E2E booking (Create, udpate, Delete)
2. Get all the bookings.
3. Negative scenarios with different status code i.e 404, 403, 405
4. Partial update bookings.






## Installation

Before you start installing Cypress and Node, make sure that you have the following installed on your computer:

```
Node.js
VS code
```
## Installing Node.js

Node.js is a JavaScript runtime environment that is used to run JavaScript code outside of a web browser. To install Node.js, follow these steps:

  1. Go to the Node.js official website: https://nodejs.org/
  2. Click on the “Download” button for the latest version of Node.js.
  3. Follow the instructions for your operating system to install Node.js.
  4. Verify that Node.js has been installed successfully by opening a terminal or command prompt and running the following command:

```
node -v
```
## Installing Cypress

Cypress is a JavaScript-based end-to-end testing framework. To install Cypress, follow these steps:

Open a terminal or command prompt and navigate to the root directory of your project.
Run the following command to install Cypress as a development dependency:

```
npm install --save-dev cypress
```
Verify that Cypress has been installed successfully by running the following command:
```
npx cypress open
```
This should open the Cypress Test Runner in your default web browser.

With these steps, you should have both Node.js and Cypress installed on your computer and ready to use. If you encounter any issues during the installation process, refer to the official documentation for Node.js and Cypress(https://docs.cypress.io/) for more information and support.


## Install Allure report

**Install Java for windows**
```
https://www.oracle.com/java/technologies/downloads/#jdk19-windows
```

**Install Java for mac**

```
https://www.oracle.com/java/technologies/downloads/#jdk17-mac
```

Run the below command:

Link: https://www.npmjs.com/package/@shelex/cypress-allure-plugin

```
npm i -D @shelex/cypress-allure-plugin
```

https://www.npmjs.com/package/allure-commandline
```
npm i allure-commandline
```

For mac users any issue with allure installation run the below command:
```
sudo npm install -g allure-commandline
```
Check version for allure:

```
allure --version
```


**Plugin Drag and Drop**

Link for reference: https://www.npmjs.com/package/@4tw/cypress-drag-drop

```
npm i @4tw/cypress-drag-drop
```

## How to run test

```
npm run reportTest
```

Check allure results folder is created.

To open the allure report, type below command.

```
allure open
```

## Git clone
```
git clone https://github.com/nishigandhap/AutomationUIAPITesting
```
## Screenshot

<img width="747" alt="UI-API Test screenshot" src="https://user-images.githubusercontent.com/58659856/219962709-f9673128-eaaf-44b4-bcfd-d093f62e514c.png">
