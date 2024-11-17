import FloatingBtn from "./floatingBtn";
import IntroTitle from "./IntroTitle";
import RecentActivity from "./RecentActivity";
import SummaryBoxes from "./SummaryBoxes";

export default function Dashboard() {
  return (
    <div className=" p-4 md:p-6">
      <IntroTitle />

      <SummaryBoxes />

      <RecentActivity />

      <FloatingBtn />
    </div>
  );
}
