// generate-report.ts
import reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',          // Input JSON file
  output: 'reports/cucumber_report.html',            // Output HTML file
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "MacOS",
    "Executed": "Local"
  }
};

reporter.generate(options);
