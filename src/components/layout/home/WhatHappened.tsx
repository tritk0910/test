import Button from "../../Button";

export default function WhatHappened() {
  return (
    <div className="relative flex flex-col justify-center items-center overflow-x-hidden">
      <div className="pt-[150px] flex flex-col justify-center items-center text-center gap-y-[40px] w-[682px] mx-auto pb-[72px]">
        <h1 className="uppercase font-extrabold text-[50px] tracking-[4.5px]">
          what happened
        </h1>
        <p className="text-[16px]">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <Button>See more</Button>
      </div>
      <img src="/img/video.png" alt="" className="w-[1251px] mb-[392px] z-10" />
      <img
        className="absolute top-0 left-[226px]"
        src="/img/video-object-05.png"
        alt=""
      />
      <img
        className="absolute left-0 -translate-x-[55%] top-[314px]"
        src="/img/video-object-04.png"
        alt=""
      />
      <img
        className="absolute right-0 translate-x-1/2"
        src="/img/video-object-09.png"
        alt=""
      />
      <img
        className="absolute right-0 bottom-[15%] translate-x-[30%]"
        src="/img/video-object-08.png"
        alt=""
      />
      <div className="absolute top-[156px] right-[138px]">
        <div className="relative">
          <img className="" src="/img/video-object-07.png" alt="" />
          <img
            className="absolute -bottom-20 -left-20"
            src="/img/video-object-06.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-[146px] left-[348px]">
        <div className="relative">
          <img className="" src="/img/video-object-01.png" alt="" />
          <img
            className="-z-10 absolute -top-20 -left-20"
            src="/img/video-object-03.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute bottom-[275px] right-[648px]"
        src="/img/video-object-02.png"
        alt=""
      />
    </div>
  );
}
