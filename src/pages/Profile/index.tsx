import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Share from "../../components/shared/Share";
import Post from "../../components/shared/Post";
import Friend from "../../components/Profile/Friend";

type Props = {};

function Index({}: Props) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <Profile />
        <div className="flex flex-col items-center mt-[90px]">
          <p className="font-extrabold text-2xl">Libamlak Birhanu</p>
          <p className="font-thin text-lg">what up</p>
        </div>
        <div className="flex gap-5 p-7">
          <div className="w-3/5">
            <Share />
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
          <div className="w-2/5">
            <div className="mb-12">
              <p className="text-2xl font-bold mb-4">User Information</p>
              <div className="flex items-center gap-5">
                <p className="font-bold text-lg">City :</p>
                <p className="font-light">Addis Ababa</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="font-bold text-lg">From :</p>
                <p className="font-light">Addis Ababa</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="font-bold text-lg">Relationship :</p>
                <p className="font-light">Single</p>
              </div>
            </div>
            <p className="font-extrabold text-2xl mb-8">User friends</p>
            <div className="flex flex-wrap gap-5">
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
