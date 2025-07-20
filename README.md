# 🚌 RedBus Automation with Playwright + Cucumber + TypeScript

This project automates the end-to-end flow of booking a bus on [RedBus](https://www.redbus.in/) using:

- ✅ Playwright
- ✅ Cucumber BDD
- ✅ TypeScript
- ✅ Page Object Model (POM)

---

## 📁 Folder Structure

redbus-playwright-automation/
├── features/ # Cucumber feature files
│ └── redbusBooking.feature
├── pages/ # Page Object classes
│ ├── HomePage.ts
│ ├── ResultsPage.ts
│ ├── SeatSelectionPage.ts
│ ├── PassengerDetailsPage.ts
│ └── PaymentPage.ts
├── step-definitions/ # Step definitions for scenarios
│ └── redbusBooking.steps.ts
├── support/ # Hooks, World file, config
│ ├── hooks.ts
│ └── world.ts
├── playwright.config.ts # Playwright test configuration
├── tsconfig.json # TypeScript config
└── package.json # Project dependencies and scripts

mathematica
Copy
Edit

---

## ✅ Automated Scenario

```gherkin
Scenario: Booking a bus from Mumbai to Pune on coming Saturday
  Given I launch the RedBus website
  When I search buses from "Mumbai" to "Pune" for this Saturday
  And I click on "Search Buses"
  And I apply filters: "Primo", "Evening", and "Live Tracking"
  And I scroll and select the bus with the cheapest fare
  And I select a seat and boarding & dropping points
  And I fill contact and passenger details and opt for insurance
  And I proceed with UPI payment using ID "rroushan40@okaxis"
  Then I should see UPI payment confirmation or success page
🚀 Setup Instructions
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/redbus-playwright-automation.git
cd redbus-playwright-automation
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the tests
bash
Copy
Edit
npx cucumber-js
4. Run with HTML report (optional)
If using @cucumber/html-formatter:

bash
Copy
Edit
npx cucumber-js --format @cucumber/html-formatter
⚙️ Configuration
Environment
Node.js v18+

Playwright v1.42+

TypeScript

Cucumber.js

🧪 Technologies Used
Playwright

Cucumber.js

TypeScript

Page Object Model

📷 Optional: Screenshots & Reporting
To generate screenshots or use Allure/Cucumber HTML reports, additional setup is required.

👨‍💻 Author
Rajender Beeram
📧 rajender.email@example.com
🌐 GitHub Profile

📄 License
This project is intended for demonstration and educational purposes only.
It is not affiliated with or endorsed by RedBus or any of its subsidiaries.