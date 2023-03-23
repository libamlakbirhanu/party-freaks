import Share from "../shared/Share";
import Post from "../shared/Post";

type Props = {};

function Index({}: Props) {
  return (
    <div className="w-[50%]">
      <div className="p-5">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Index;
