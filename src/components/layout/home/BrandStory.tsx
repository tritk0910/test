import Button from "../../Button";

export default function BrandStory() {
  return (
    <div className="bg-[#0565bb] pt-[149px] pb-[170px] text-[#fcd32a] flex justify-center items-center flex-col gap-y-[77px] relative overflow-x-hidden">
      <div className="pt-[150px] flex flex-col justify-center items-center gap-y-[40px] w-[682px] mx-auto">
        <h1 className="uppercase font-bold text-[45px] tracking-[4.5px]">
          Brand Story
        </h1>
        <p className="text-[16px]">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className="z-20 relative text-black">
        <img src="/img/window.png" alt="" />
        <div className="absolute w-[528px] my-auto top-[15%] right-12 flex flex-col gap-y-8 items-start">
          <h1 className="font-extrabold text-[25px]">
            What Happened’s Brand story
          </h1>
          <p>
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
            풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
            살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
            이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
            칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
            끝에 설산에서 황금시대를 이상을 운다.
          </p>
          <Button>See more</Button>
        </div>
      </div>

      <img
        className="absolute right-0 translate-x-[5%] bottom-36 z-10 w-[350px]"
        src="/img/object-05.png"
        alt=""
      />
      <img
        className="absolute right-0 bottom-[20%] translate-x-1/2"
        src="/img/object-04.png"
        alt=""
      />
      <img
        className="absolute top-[35%] left-[8%]"
        src="/img/object-01.png"
        alt=""
      />
      <div className="absolute top-20 right-[20%]">
        <div className="relative">
          <img src="/img/object-02.png" alt="" />
          <img
            className="absolute top-10 -right-20"
            src="/img/object-03.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute left-0 bottom-36 z-10 flex items-end">
        <img src="/img/object-06.png" alt="" />
        <img src="/img/object-07.png" alt="" />
      </div>
      <div className=" absolute bottom-48 w-full h-[3px] inline-block bg-[#111]" />
    </div>
  );
}
