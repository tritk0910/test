import { MoveRight, Sparkle } from "lucide-react";

export default function MainBanner() {
  return (
    <div className="uppercase h-[1000px] w-full flex justify-center items-center flex-col bg-[#e64321]">
      <h1 className="text-[50px] leading-[27px] font-extrabold italic pb-[75px]">
        Launching open event!
      </h1>
      <div className="font-extrabold leading-[177px] text-center text-[171.5px] w-[1066px] [text-shadow:_0px_15px_0px_#000] [paint-order:stroke_fill] [-webkit-text-stroke:_7px_#111] relative mb-[84px]">
        <Sparkle
          size={171}
          strokeWidth={0.5}
          className="absolute top-3 left-5"
          fill="#ffc717"
        />
        <span className="text-white">
          <span className="pr-32">What</span>
          <div className="text-nowrap">
            h
            <svg
              className="inline-block h-[165px] pb-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fccb05"
              stroke="#111"
              strokeWidth={0.5}
            >
              <path d="M12 2l10 20h-20z" />
            </svg>
            ppened!
          </div>
          mar-ket
        </span>
        <div className="absolute -top-4 right-0">
          <div className="relative">
            <span className="absolute -top-3 left-14 [text-shadow:none] text-[115px] italic [-webkit-text-stroke:0]">
              !!!!!
            </span>
            <svg
              className="fill-[#0565bb] h-[195px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 60 37"
              strokeWidth={0.75}
              stroke="#111"
            >
              <path
                className="cls-1"
                d="M13.44,0h26.64c7.42,0,13.44,6.02,13.44,13.44s-6.02,13.44-13.44,13.44h-10.56c-.45,0-15.52,6.33-16.08,6.96-.97,1.09,6.47-6.96,5.79-6.96h-5.79C6.02,26.88,0,20.86,0,13.44S6.02,0,13.44,0Z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-28 right-[130px] -rotate-[20deg]">
          <div className="relative">
            <img src="/svg/burstBox.svg" alt="" className="h-[144px]" />
            <span className="text-[34px] absolute -top-3 left-8 text-white [text-shadow:none] italic [-webkit-text-stroke:0]">
              Thirties
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center uppercase space-x-36 font-extrabold text-center">
        <p>Lorem ipsum</p>
        <MoveRight size={48} />
        <p className="w-[169px] py-[18px] border-y-[3px] border-black">
          Market Launching!
        </p>
        <MoveRight size={48} />
        <p className="rounded-full border-[3px] py-[17px] px-[40px] border-black">
          Lorem ipsum
        </p>
      </div>
    </div>
  );
}
