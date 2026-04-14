import { LeftSidebar } from "../../components/modules/ExchangeSports/LeftSidebar";
import { RightSidebar } from "../../components/modules/ExchangeSports/RightSidebar";
import { GroupSports } from "../../components/modules/ExchangeSports/GroupSports";

const ExchangeSports = () => {
  return (
    <div className="flex-1 flex white bg-gray1">
      <LeftSidebar />
      <GroupSports />
      <RightSidebar />
    </div>
  );
};

export default ExchangeSports;
