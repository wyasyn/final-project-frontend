export default function RecentActivity() {
  return (
    <div className="my-[3rem] bg-secondary p-6 rounded-lg">
      <header>
        <h2 className="text-2xl text-foreground font-medium">
          Recent Activity
        </h2>
        <h3>Your latest financial transactions</h3>
      </header>
      <div className="py-4">
        <ul className="space-y-4">
          <li className="flex justify-between items-center p-3 ">
            <div>
              <p className="font-medium">Grocery Shopping</p>
              <p className="text-sm text-muted-foreground">May 15, 2023</p>
            </div>
            <span className="text-red-500 font-medium">-$120.50</span>
          </li>
          <li className="flex justify-between items-center bg-background p-3 rounded-md">
            <div>
              <p className="font-medium">Salary Deposit</p>
              <p className="text-sm text-muted-foreground">May 1, 2023</p>
            </div>
            <span className="text-green-500 font-medium">+$3,500.00</span>
          </li>
          <li className="flex justify-between items-center p-3 ">
            <div>
              <p className="font-medium">Electric Bill</p>
              <p className="text-sm text-muted-foreground">April 29, 2023</p>
            </div>
            <span className="text-red-500 font-medium">-$85.20</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
