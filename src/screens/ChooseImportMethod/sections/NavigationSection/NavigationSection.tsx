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
    <nav className="flex h-[60px] items-center justify-between pl-20 pr-8 py-2.5 relative w-full z-[2]">
      <div className="flex items-center gap-4">
        <div className="relative w-[130.6px] h-[42.05px] bg-[url(/union.svg)] bg-[100%_100%]" />
      </div>

      <div className="flex items-center gap-2.5">
        <Button className="inline-flex items-center gap-[5px] px-[15px] py-2.5 bg-[#1166b8] rounded-[20px] h-auto hover:bg-[#0f5ba3]">
          <img
            className="w-[29.03px] h-[18px]"
            alt="Group"
            src="/group-4539.png"
          />
          <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-white text-[length:var(--text-s-bold-font-size)] tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
            GET PREMIUM
          </span>
        </Button>

        <div className="inline-flex items-center gap-2.5 pl-0 pr-2.5 py-0 bg-[#dfe1e4] rounded-[20px] overflow-hidden">
          <div className="inline-flex items-center">
            <img
              className="w-[42px] h-[42px]"
              alt="Flame icon"
              src="/flame-icon.svg"
            />
            <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-[length:var(--text-s-bold-font-size)] tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
              3
            </span>
          </div>

          <div className="inline-flex items-center gap-[5px]">
            <div className="relative w-[42px] h-[42px] bg-[url(/ellipse-1200-2.svg)] bg-[100%_100%]">
              <div className="relative w-[29px] h-[33px] left-2">
                <img
                  className="absolute w-[19px] h-2.5 top-0 left-2.5"
                  alt="Ellipse"
                  src="/ellipse-1201.svg"
                />
                <div className="absolute w-[25px] h-[25px] top-2 left-0">
                  <div className="relative h-[25px]">
                    <img
                      className="absolute w-6 h-6 top-0 left-0"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-[22px] h-[22px] top-px left-px"
                      alt="Vector stroke"
                      src="/vector--stroke-.svg"
                    />
                    <img
                      className="absolute w-[9px] h-2.5 top-[7px] left-2"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute w-[17px] h-[17px] top-0.5 left-0.5"
                      alt="Subtract"
                      src="/subtract-1.svg"
                    />
                    <img
                      className="absolute w-[21px] h-[21px] top-1 left-1"
                      alt="Subtract"
                      src="/subtract.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-[length:var(--text-s-bold-font-size)] tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
              10/50
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-[5px] pl-0 pr-2.5 py-0 bg-[#dfe1e4] rounded-[20px] overflow-hidden">
          <div className="w-[42px] h-[42px] bg-[url(/ellipse-1200.png)] bg-cover bg-[50%_50%]" />
          <span className="font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-black text-[length:var(--text-s-bold-font-size)] tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
            544
          </span>
        </div>

        <div className="bg-backgroundslight-grey-bg rounded-[50px] overflow-hidden inline-flex items-center">
          <div className="w-[42px] h-[42px] bg-[url(/ellipse-1200-1.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-[3px] left-0 p-6 h-auto"
      >
        <div className="flex flex-col items-center justify-center gap-2.5 p-[5px]">
          <div className="w-7 h-[2.5px] bg-current" />
          <div className="w-7 h-[2.5px] bg-current" />
          <div className="w-7 h-[2.5px] bg-current" />
        </div>
      </Button>
    </nav>
  );
};
