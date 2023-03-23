type Props = {};

function Index({}: Props) {
  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden h-[300px]">
        <img src="/assets/imgs/1.png" alt="cover" className="w-full h-auto" />
      </div>
      <img
        src="/assets/imgs/destruction.png"
        alt="profile"
        className="absolute w-[150px] aspect-square left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border-white border-4"
      />
    </div>
  );
}

export default Index;
