
## How to Run the Tests

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Set your `LABELLERR_TOKEN` in `cypress.env.json` (already provided).
3. Run Cypress tests:
   ```powershell
   npx cypress open
   ```
   or for headless mode:
   ```powershell
   npx cypress run
   ```

## Scenarios Covered
- Programmatic authentication using a token.
- Navigating directly to the Labellerr workspace.
- Creating a new project and selecting a public dataset.
- Adding objects for annotation and saving them.
- Naming templates and projects, and creating a project with Labellerr AI.

## Assumptions & Challenges
- Assumed the token in `cypress.env.json` is valid for authentication.
- UI selectors (e.g., class names, data attributes) are stable and do not change frequently.
- The test simulates user actions as closely as possible to real workflows.

### Challenges & Solutions
- **Challenge:** Handling authentication without UI login.
  - **Solution:** Used a custom Cypress command (`loginbytoken`) to authenticate via token and intercept user API calls.
- **Challenge:** Waiting for asynchronous UI updates.
  - **Solution:** Used `cy.wait()` and proper selector targeting to ensure elements are available before interacting.
- **Challenge:** Dynamic UI elements and selectors.
  - **Solution:** Relied on data attributes and stable selectors where possible; added waits for reliability.


