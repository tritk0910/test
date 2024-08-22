import Button from "../../Button";

export default function ProductList() {
  const products = [
    {
      image: "/img/img-01.png",
    },
    {
      image: "/img/img-02.png",
    },
    {
      image: "/img/img-03.png",
    },
    {
      image: "/img/img-04.png",
    },
    {
      image: "/img/img-05.png",
    },
    {
      image: "/img/img-06.png",
    },
    {
      image: "/img/img-07.png",
    },
    {
      image: "/img/img-08.png",
    },
    {
      image: "/img/img-09.png",
    },
    {
      image: "/img/img-10.png",
    },
    {
      image: "/img/img-11.png",
    },
    {
      image: "/img/img-12.png",
    },
    {
      image: "/img/img-13.png",
    },
    {
      image: "/img/img-14.png",
    },
    {
      image: "/img/img-15.png",
    },
    {
      image: "/img/img-16.png",
    },
    {
      image: "/img/img-17.png",
    },
    {
      image: "/img/img-18.png",
    },
    {
      image: "/img/img-19.png",
    },
    {
      image: "/img/img-20.png",
    },
    {
      image: "/img/img-21.png",
    },
    {
      image: "/img/img-22.png",
    },
    {
      image: "/img/img-23.png",
    },
    {
      image: "/img/img-24.png",
    },
    {
      image: "/img/img-25.png",
    },
  ];

  return (
    <div className="py-[142px] px-[120px] flex flex-col items-center">
      <div className="flex flex-wrap gap-x-[18px] justify-center">
        {products.map(({ image }, index) => (
          <div className="w-[300px]" key={index}>
            <img src={image} alt="" className="size-[300px]" />
            <h1 className="py-[30px] text-[18px] font-semibold">
              [what happen] How to create
            </h1>
            <div className="flex justify-between items-center pb-[64px]">
              2.500 won
              <div className="flex gap-2">
                <img src="/img/hearticon.png" alt="" />
                <span className="text-[#666]">236</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button>See more</Button>
    </div>
  );
}
