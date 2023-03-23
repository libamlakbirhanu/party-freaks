import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import RightSide from "../../components/RightSide";

// type Props = {};

function Index() {
  return (
    <div className="flex m-auto">
      <Sidebar />
      <Feed />
      <RightSide />
    </div>
  );
}

export default Index;
