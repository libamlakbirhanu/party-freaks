import { HeartBroken, MoreVert, ThumbUp } from "@mui/icons-material";

type Props = {
  feed: any;
};

function Index({ feed }: Props) {
  return (
    <div className="rounded-md shadow-md mt-8">
      <div className="p-3">
        {/* top */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/assets/imgs/2.png"
              alt="profile"
              className="w-[50px] h-[50px] rounded-full"
            />
            <span className="font-bold text-xl">{feed.user.username}</span>
            <span className="text-sm text-gray-400">2 days ago</span>
          </div>
          <div>
            <MoreVert className="cursor-pointer" />
          </div>
        </div>
        {/* middle */}
        <div className="my-3 flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-xl text-gray-600 font-bold">
              {feed.title}
            </span>
            <span className="text-sm text-gray-600">{feed.description}</span>
          </div>
          <img
            src="/assets/imgs/1.png"
            alt="post"
            className="h-[500px] object-cover"
          />
        </div>
        {/* bottom */}
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <HeartBroken className="cursor-pointer text-error text-3xl" />
            <ThumbUp className="cursor-pointer text-blue-500 text-3xl" />
            <span className="font-medium">{feed.likes.length} people like this</span>
          </div>
          <div className="">
            <span className="underline cursor-pointer">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
