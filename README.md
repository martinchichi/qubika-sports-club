# Qubika Sports Club Management System E2E Test

This project contains end-to-end tests for the Qubika Sports Club Management System using Playwright with TypeScript.

## Prerequisites

- Node.js (v14 or later)
- npm

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies

## Configuration

Create a `.env` file in the root directory with the following content:
- TEST_USER_EMAIL=your_test_email@example.com
- TEST_USER_PASSWORD=your_test_password

## Running the Tests

To run the tests, use the following command:
npx playwright test

## Project Structure

- `tests/`: Contains all test files
  - `api/`: API helper classes
  - `pages/`: Page object models
  - `qubikaClubTest.spec.ts`: Main test file
- `playwright.config.ts`: Playwright configuration
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration

## Implementation Details

This project uses the Page Object Model pattern for better maintainability. It includes API interactions for user creation and UI validations for various pages and actions.

## Improvements and Enhancements

- Implement better error handling and reporting
- Add more comprehensive logging
- Extend test coverage to include edge cases and negative scenarios
- Implement parallel test execution for faster results
- Set up continuous integration to run tests automatically

## Known Issues or Limitations

- The test currently uses a single browser context. For better isolation, consider using separate contexts for each test.
- Error handling could be improved to provide more detailed information about failures.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

