# **Personal Finance Management App**

## Frontend design

---

### 1. **Landing Page / Welcome Page**

- **Components**:
  - [x] A welcome message or tagline (e.g., "Take control of your finances")
  - [x] Login and Register buttons
  - [x] Brief description of features (optional)

---

### 2. **Registration Page**

- **Components**:
  - [x] **Email Field**: To input the user's email address
  - [x] **Password Field**: To input the user's password (with password visibility toggle)
  - [x] **Confirm Password Field**: To re-enter password for validation
  - [x] **Register Button**: Submits the registration form
  - [x] **Link to Login Page**: For users who already have an account

---

### 3. **Login Page**

- **Components**:
  - [x] **Email Field**: To input the user's email address
  - [x] **Password Field**: To input the user's password (with password visibility toggle)
  - [x] **Login Button**: Submits the login form
  - [ ] **Forgot Password Link**: To redirect to password reset page
  - [x] **Link to Registration Page**: For new users

---

### 4. **Dashboard (Home Page)**

- **Components**:
  - [ ] **Navigation Bar**: Includes links to income, expenses, budgeting, savings goals, insights, notifications, account settings
  - [ ] **Summary Box**:
    - Displays quick stats like total income, total expenses, budget progress, and savings goals
  - [ ] **Recent Activity Feed**:
    - Displays the most recent income and expense entries
  - [ ] **Quick Add Button**:
    - A floating button to quickly add income or expense without navigating away from the dashboard

---

### 5. **Income and Expense Tracking Page**

- **Components**:
  - [ ] **Income Section**:
    - A list of income entries with details like source, amount, date
    - An "Add Income" button to create new entries
  - [ ] **Expense Section**:
    - A list of expenses with details like category, amount, date
    - An "Add Expense" button to create new entries
  - [ ] **Edit/Delete Option**: For each entry to allow modification or removal
  - [ ] **Filters**: To filter entries by date, category, etc.

---

### 6. **Budgeting Page**

- **Components**:
  - [ ] **Budget Overview**: A list of current monthly/weekly budgets for each category (e.g., groceries, entertainment)
  - [ ] **Add/Edit Budget Button**: To add or edit the budget for a specific category
  - [ ] **Budget Progress Bars**: Visual bars showing how much of the budget has been spent vs. the limit
  - [ ] **Budget Suggestions Section**: Based on past spending, suggesting limits for different categories

---

### 7. **Savings Goals Page**

- **Components**:
  - [ ] **Current Savings Goals**: A list of goals like vacation, emergency fund, with amounts and deadlines
  - [ ] **Goal Progress Bars**: Visual representation of progress toward each goal
  - [ ] **Add New Goal Button**: To set a new savings goal
  - [ ] **Goal Contributions Section**: Allows users to add regular contributions toward their goals

---

### 8. **Financial Insights Page**

- **Components**:
  - [ ] **Visual Insights**: Pie charts, bar graphs, or line graphs showing spending distribution and trends (e.g., by category, over time)
  - [ ] **Spending Patterns**: A timeline showing the user’s spending patterns over weeks/months
  - [ ] **Personalized Savings Suggestions**: AI-driven suggestions based on income and expenses

---

### 9. **Notifications and Reminders Page**

- **Components**:
  - [ ] **List of Notifications**: Displays past and upcoming reminders (e.g., “Budget limit approaching,” “Log your expenses”)
  - [ ] **Enable/Disable Notification Toggle**: For users to opt in or out of reminders
  - [ ] **Reminders Section**: A place to configure reminders for logging expenses or achieving savings goals

---

### 10. **Account Settings Page**

- **Components**:
  - [ ] **Change Email/Password**: Option to update account email or password
  - [ ] **Privacy Settings**: Toggle to enable or disable data sharing features
  - [ ] **Security Settings**: Enable two-factor authentication or other security features
  - [ ] **Logout Button**: To log out of the account securely
  - [ ] **Delete Account**: Option to delete the account (if applicable)

---

### 11. **Forgot Password Page**

- **Components**:
  - [ ] **Email Input**: To send a password reset link to the user
  - [ ] **Submit Button**: To send the reset link to the user’s email
  - [ ] **Link to Login Page**: For users who remember their password

---

### 12. **Error Pages (404, 500)**

- **Components**:
  - [ ] **Error Message**: A friendly message informing the user of the error
  - [ ] **Navigation Links**: Options to go back to the home page or contact support if necessary

---

### Additional Considerations

- [ ] **Mobile Responsiveness**: Ensure that each page is responsive and works smoothly on mobile devices.
- [ ] **Modals and Popups**: Use modals for adding or editing income, expenses, and savings goals to keep the user experience seamless.
- [ ] **Data Privacy and Security**: On sensitive pages like Account Settings, show appropriate privacy notices and security information, such as encrypted password storage.
