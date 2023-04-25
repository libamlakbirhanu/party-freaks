type Props = {};

function Index({}: Props) {
  return (
    <div className="w-[30%]">
      {/* wrapper */}
      <div className="p-5">
        <div className="flex gap-3 items-center">
          <img
            src="/assets/imgs/gift.png"
            alt=""
            className="w-[80px] h-[80px]"
          />
          <span className="text-xl">
            <span className="font-bold">ayoo</span> some of your{" "}
            <span className="font-bold">buddies</span> have a birthday today
          </span>
        </div>
        <div className="relative">
          <span className="absolute top-[2rem] left-[2rem] w-1/2 text-[3.5rem] text-white font-extrabold z-20">
            Party Until You Can't
          </span>
          <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,.4)] before:rounded-xl before:z-10"></div>
          <img
            src="/assets/imgs/destruction.png"
            alt=""
            className="block relative object-cover h-[400px] w-full rounded-xl mt-5 "
          />
        </div>
        <div className="my-10">
          <span className="font-bold text-2xl">online friends</span>
          <div className="mt-5">
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
            <div className="flex items-center cursor-pointer p-3 relative">
              <div className="before:absolute before:w-[15px] before:h-[15px] before:bg-green-300 before:top-3 before:border-2 before:border-white before:content-[''] before:rounded-full before:left-[50px]"></div>
              <img
                src="/assets/imgs/destruction.png"
                className="w-[50px] h-[50px] rounded-full mr-4"
                alt=""
              />
              <span className="text-xl font-bold">Jone Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
