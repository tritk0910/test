export default function BestProduct() {
  const bestProducts = [
    {
      icon: "/img/producticon-01.png",
      image: "/img/best-image-01.png",
    },
    {
      icon: "/img/producticon-02.png",
      image: "/img/best-image-02.png",
    },
    {
      icon: "/img/producticon-03.png",
      image: "/img/best-image-03.png",
    },
  ];

  return (
    <div className="bg-[url('/img/bes-bg.png')] h-[1073px] flex flex-col gap-y-[34px] justify-center items-center text-[#f96400]">
      <h1 className="uppercase text-[50px] font-bold">Best product</h1>
      <span className="w-[665px]">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </span>
      <div className="pt-[34px] flex">
        {bestProducts.map(({ icon, image }, index) => (
          <div className="relative" key={index}>
            <img src={icon} alt="" className="absolute -top-10 left-0" />
            <img src={image} alt="best product" className="w-[514px]" />
            <div className="absolute -translate-y-1/2 left-0 right-0 mx-auto bg-white w-[369px] border-black border-2 py-[20px] px-[27px] font-extrabold flex justify-between items-center">
              <span className="text-black">How to create mobile-optimized</span>
              <button className="p-4 rounded-full bg-black text-white uppercase">
                Go
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
