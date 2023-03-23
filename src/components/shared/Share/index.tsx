import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Share,
} from "@mui/icons-material";

type Props = {};

function Index({}: Props) {
  return (
    <div className="w-full h-[170px] rounded-lg shadow-md">
      <div className="p-5">
        {/* top */}
        <div className="flex items-center">
          <img
            src="/assets/imgs/destruction.png"
            alt="post"
            className="w-[50px] h-[50px] rounded-full object-cover mr-5"
          />
          <input
            type="text"
            placeholder="what's on your mind?"
            className="p-2 border-none outline-none flex-1"
          />
        </div>
        <hr className="my-5" />
        {/* bottom */}
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center mr-4 cursor-pointer">
              <PermMedia className="text-2xl mr-1 text-orange-500" />
              <span className="text-md font-semibold">Photo/Video</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <Label className="text-2xl mr-1 text-blue-500" />
              <span className="text-md font-semibold">Tag</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <Room className="text-2xl mr-1 text-green-500" />
              <span className="text-md font-semibold">Location</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <EmojiEmotions className="text-2xl mr-1 text-orange-300" />
              <span className="text-md font-semibold">Feelings</span>
            </div>
          </div>
          <button className="border-none p-2 rounded-md bg-success text-white px-5 cursor-pointer">
            <Share className="pr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
