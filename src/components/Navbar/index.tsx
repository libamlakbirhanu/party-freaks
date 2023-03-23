import { Chat, Notifications, Person, Search } from "@mui/icons-material";

type Props = {};

function Index({}: Props) {
  return (
    <div className="bg-primary  sticky top-0 z-[999]">
      <div className="flex justify-between max-w-[1800px] m-auto items-center py-5 gap-3">
        <div className="w-3/12">
          <span className="font-extrabold text-3xl cursor-pointer text-white">
            PARTY FREAKS
          </span>
        </div>

        <div className="w-5/12">
          <div className="relative">
            <Search className="absolute top-1 left-2 text-2xl" />
            <input
              type="text"
              placeholder="search bitch"
              className="w-full bg-white rounded-full outline-none py-1 px-10"
            />
          </div>
        </div>

        <div className="flex gap-5 items-center w-4/12 justify-around">
          <div className="text-white space-x-3">
            <span className="cursor-pointer hover:text-secondary uppercase font-bold text-sm">
              Homepage
            </span>
            <span className="cursor-pointer hover:text-secondary uppercase font-bold text-sm">
              Timeline
            </span>
          </div>
          <div className="flex gap-5 items-center text-white">
            <div className="cursor-pointer relative">
              <Person className="hover:text-secondary" />
              <span className="absolute -top-3 bg-error px-2 rounded-full -right-3">
                5
              </span>
            </div>
            <div className="cursor-pointer relative">
              <Chat className="hover:text-secondary" />
              <span className="absolute -top-3 bg-error px-2 rounded-full -right-3">
                3
              </span>
            </div>
            <div className="cursor-pointer relative">
              <Notifications className="hover:text-secondary" />
              <span className="absolute -top-3 bg-error px-2 rounded-full -right-3">
                2
              </span>
            </div>
          </div>
          <img
            src="/assets/imgs/destruction.png"
            alt="profile"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
