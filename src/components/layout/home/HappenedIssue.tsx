import { cn } from "../../../lib/utils";
import Button from "../../Button";

export default function HappenedIssue() {
  const brands = [
    {
      title: "B Brand",
      img: "/img/news-img-02.png",
    },
    {
      title: "C Brand",
      img: "/img/news-img-03.png",
    },
    {
      title: "D Brand",
      img: "/img/news-img-04.png",
    },
    {
      title: "E Brand",
      img: "/img/news-img-05.png",
    },
  ];

  return (
    <div className="bg-[#fccb05] relative">
      <div className="pt-[150px] flex flex-col justify-center items-center text-center gap-y-[40px] w-[682px] mx-auto pb-[128px]">
        <h1 className="uppercase font-bold text-[45px] tracking-[4.5px]">
          Happened’s issue
        </h1>
        <p className="text-[16px]">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <Button>See more</Button>
      </div>
      <div className="relative grid grid-cols-5 text-center align-middle border-black border-t-[3px] border-l-[3px] [&_div]:border-b-[3px] [&_div]:border-r-[3px] [&_div]:border-black pb-[142px]">
        <div className="col-span-1 uppercase font-extrabold text-[55px] bg-[#ff5500] flex justify-center items-center flex-col gap-[63px] px-[100px] leading-[57px]">
          whpn issue
          <img src="/img/news-img-01.png" alt="" />
        </div>
        {brands.map(({ title, img }, index) => (
          <div className="col-span-1 bg-black" key={index}>
            <h1
              className={cn(
                "uppercase text-[30px] font-extrabold py-[27px] text-white bg-black",
                {
                  "bg-[#ff5500]": index === 2,
                }
              )}
            >
              {title}
            </h1>
            <img src={img} alt="" className="w-full max-h-full object-cover" />
          </div>
        ))}
        <img
          className="absolute top-0 -translate-y-1/2 left-[411px]"
          src="/img/news-object-04.png"
          alt=""
        />
        <img
          className="absolute bottom-[85px] right-[353px]"
          src="/img/news-object-05.png"
          alt=""
        />
        <img
          className="absolute bottom-[57px] left-[230px]"
          src="/img/news-object-06.png"
          alt=""
        />
      </div>
      <img
        className="absolute top-[43px] right-[70px]"
        src="/img/news-object-03.png"
        alt=""
      />
      <img
        className="absolute top-[163px] right-[68px]"
        src="/img/news-object-02.png"
        alt=""
      />
    </div>
  );
}
