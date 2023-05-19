import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type Props = {};

function Index({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-primary px-5  sticky top-0 z-[999]">
      <div className="flex justify-between max-w-[1800px] m-auto items-center py-5 gap-3">
        <div className="w-3/12">
          <span
            className="text-3xl font-extrabold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            PARTY FREAKS
          </span>
        </div>

        <div className="w-5/12">
          <div className="relative">
            <Search className="absolute text-2xl top-1 left-2" />
            <input
              type="text"
              placeholder="search bitch"
              className="w-full px-10 py-1 bg-white rounded-full outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end w-4/12 gap-10">
          <div className="space-x-3 text-white">
            <span className="text-sm font-bold uppercase cursor-pointer hover:text-secondary">
              Homepage
            </span>
            <span className="text-sm font-bold uppercase cursor-pointer hover:text-secondary">
              Timeline
            </span>
          </div>
          <div className="flex items-center gap-5 text-white">
            <div className="relative cursor-pointer">
              <Person className="hover:text-secondary" />
              <span className="absolute px-2 rounded-full -top-3 bg-error -right-3">
                5
              </span>
            </div>
            <div className="relative cursor-pointer">
              <Chat
                className="hover:text-secondary"
                onClick={() => navigate("/chat")}
              />
              <span className="absolute px-2 rounded-full -top-3 bg-error -right-3">
                3
              </span>
            </div>
            <div className="relative cursor-pointer">
              <Notifications className="hover:text-secondary" />
              <span className="absolute px-2 rounded-full -top-3 bg-error -right-3">
                2
              </span>
            </div>
            <img
              src="/assets/imgs/destruction.png"
              alt="profile"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
