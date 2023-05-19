import Share from "../shared/Share";
import Post from "../shared/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

type Props = {};

function Index({}: Props) {
  const [feeds, setFeeds] = useState<any>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchFeeds = async () => {
      const res = await axios.get(`/posts/timeline/643b32739741ee6fb08971a2`);

      setFeeds([...res?.data]);
    };

    fetchFeeds();
  }, []);

  return (
    <div className="w-[50%]">
      <div className="p-5">
        <Share />
        {feeds.map((feed: any) => (
          <Post key={feed._id} feed={feed} />
        ))}
      </div>
    </div>
  );
}

export default Index;
