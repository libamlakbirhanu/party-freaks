import {
  Bookmark,
  CalendarMonth,
  CasesRounded,
  CastForEducation,
  Chat,
  Feed,
  Group,
  PlayArrowRounded,
  QuestionMarkSharp,
} from "@mui/icons-material";

type Props = {};

function Index({}: Props) {
  return (
    <div className="w-[20%] h-[calc(100vh-90px)] overflow-y-scroll sticky top-[90px]">
      <div className="p-5">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <Feed />
            <span className="text-lg font-semibold">Feed</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <Chat />
            <span className="text-lg font-semibold">Chats</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <PlayArrowRounded />
            <span className="text-lg font-semibold">Videos</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <Group />
            <span className="text-lg font-semibold">Groups</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <Bookmark />
            <span className="text-lg font-semibold">Bookmarks</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <QuestionMarkSharp />
            <span className="text-lg font-semibold">Questions</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <CasesRounded />
            <span className="text-lg font-semibold">Jobs</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <CalendarMonth />
            <span className="text-lg font-semibold">Events</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <CastForEducation />
            <span className="text-lg font-semibold">Courses</span>
          </li>
          <button className="w-max bg-gray-200 px-10 py-2 rounded-md my-5">
            Show More
          </button>
          <hr />
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <img
              src="/assets/imgs/destruction.png"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span className="text-xl">Jone Doe</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <img
              src="/assets/imgs/destruction.png"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span className="text-xl">Jone Doe</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <img
              src="/assets/imgs/destruction.png"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span className="text-xl">Jone Doe</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <img
              src="/assets/imgs/destruction.png"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span className="text-xl">Jone Doe</span>
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3">
            <img
              src="/assets/imgs/destruction.png"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span className="text-xl">Jone Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
