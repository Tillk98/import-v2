import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  const userStats = [
    {
      icon: "/flame-icon.svg",
      value: "3",
      bgColor: "bg-[#dfe1e4]",
    },
    {
      icon: "/ellipse-1200-2.svg",
      value: "10/50",
      bgColor: "bg-[#dfe1e4]",
      hasComplexIcon: true,
    },
    {
      icon: "/ellipse-1200.png",
      value: "544",
      bgColor: "bg-[#dfe1e4]",
      isAvatar: true,
    },
  ];

  return (
    <nav className="flex h-[50px] items-center justify-between pl-16 pr-8 py-2 relative w-full z-[3] bg-white">
      <div className="flex items-center gap-3">
        <div className="relative w-[98px] h-[31.5px] bg-[url(/union.svg)] bg-contain bg-center bg-no-repeat" />
      </div>

      <div className="flex items-center gap-2">
        <Button className="inline-flex items-center gap-1 px-3 py-2 bg-[#1166b8] rounded-[15px] h-auto hover:bg-[#0f5ba3] text-xs">
          <img
            className="w-[22px] h-[13.5px]"
            alt="Group"
            src="/group-4539.png"
          />
          <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-white text-[length:var(--text-s-bold-font-size)] tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
            GET PREMIUM
          </span>
        </Button>

        <div className="inline-flex items-center gap-2 pl-0 pr-2 py-0 bg-[#dfe1e4] rounded-[15px] overflow-hidden">
          <div className="inline-flex items-center">
            <img
              className="w-[31.5px] h-[31.5px]"
              alt="Flame icon"
              src="/flame-icon.svg"
            />
            <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-xs tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
              3
            </span>
          </div>

          <div className="inline-flex items-center gap-1">
            <div className="relative w-[31.5px] h-[31.5px] bg-[url(/ellipse-1200-2.svg)] bg-[100%_100%]">
              <div className="relative w-[22px] h-[25px] left-1.5">
                <img
                  className="absolute w-[14px] h-2 top-0 left-2"
                  alt="Ellipse"
                  src="/ellipse-1201.svg"
                />
                <div className="absolute w-[19px] h-[19px] top-1.5 left-0">
                  <div className="relative h-[19px]">
                    <img
                      className="absolute w-[18px] h-[18px] top-0 left-0"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-[16.5px] h-[16.5px] top-px left-px"
                      alt="Vector stroke"
                      src="/vector--stroke-.svg"
                    />
                    <img
                      className="absolute w-[7px] h-2 top-[5px] left-1.5"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute w-[13px] h-[13px] top-0.5 left-0.5"
                      alt="Subtract"
                      src="/subtract-1.svg"
                    />
                    <img
                      className="absolute w-[16px] h-[16px] top-1 left-1"
                      alt="Subtract"
                      src="/subtract.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-xs tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
              10/50
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 pl-0 pr-2 py-0 bg-[#dfe1e4] rounded-[15px] overflow-hidden">
          <div className="w-[31.5px] h-[31.5px] bg-[url(/ellipse-1200.png)] bg-cover bg-[50%_50%]" />
          <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-xs tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
            544
          </span>
        </div>

        <div className="bg-backgroundslight-grey-bg rounded-[37.5px] overflow-hidden inline-flex items-center">
          <div className="w-[31.5px] h-[31.5px] bg-[url(/ellipse-1200-1.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 left-4 p-2 h-auto"
      >
        <div className="flex flex-col items-center justify-center gap-2 p-1">
          <div className="w-5 h-[2px] bg-current" />
          <div className="w-5 h-[2px] bg-current" />
          <div className="w-5 h-[2px] bg-current" />
        </div>
      </Button>
    </nav>
  );
};
