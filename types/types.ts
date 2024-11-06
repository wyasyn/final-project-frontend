export interface SavingsGoal {
  id: number;
  user_id: number;
  goal_name: string;
  target_amount: number;
  current_amount?: number;
  deadline: Date;
  created_at: Date;
}
export interface Budget {
  id: number;
  user_id: number;
  category: string;
  amount: number;
  start_date: Date;
  endDate: Date;
}
export interface Expense {
  id: number;
  user_id: number;
  category: string;
  description?: string;
  amount: number;
  date: Date;
}
export interface Income {
  id: number;
  user_id: number;
  source: string;
  amount: number;
  date: Date;
}
export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  date_of_birth?: Date;
  image_url?: string;
  career?: string;
  phone_number?: string;
  email: string;
  username: string;
  created_at: Date;
  incomes?: Income[];
  expenses?: Expense[];
  budgets?: Budget[];
  savingsGoals?: SavingsGoal[];
}
