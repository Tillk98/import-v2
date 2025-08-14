import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const doItYourselfOptions = [
  {
    icon: "/icon-2.svg",
    title: "Type or Paste",
  },
  {
    icon: "/icon-3.svg",
    title: "Web Links",
  },
  {
    icon: "/icon.svg",
    title: "Audio Files",
  },
  {
    icon: "/icon-1.svg",
    title: "Documents",
  },
];

const streamingPlatforms = [
  {
    image: "..//image.png",
    title: "Spotify",
  },
  {
    image: "..//image-1.png",
    title: "Netflix",
  },
  {
    image: "..//image-2.png",
    title: "Prime Video",
  },
  {
    image: "..//image-3.png",
    title: "YouTube",
  },
];

const socialPlatforms = [
  {
    image: "..//image-4.png",
    title: "Instagram",
  },
  {
    image: "..//image-5.png",
    title: "Tik Tok",
  },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 p-8 w-full">
      <div className="flex flex-col max-w-[1200px] items-center gap-4 w-full">
        <h1 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[40px] text-center leading-[48px] text-black">
          Real progress starts with <span className="text-[#2e75cd]">real</span>{" "}
          <span className="text-[#2e75cd]">content.</span>
        </h1>

        <p className="font-text-2xl-regular font-[number:var(--text-2xl-regular-font-weight)] text-black text-[length:var(--text-2xl-regular-font-size)] text-center tracking-[var(--text-2xl-regular-letter-spacing)] leading-[var(--text-2xl-regular-line-height)] [font-style:var(--text-2xl-regular-font-style)]">
          Create your own lessons from stuff you love.
        </p>
      </div>

      <div className="flex items-start justify-center gap-16 p-8 w-full rounded-xl bg-[linear-gradient(0deg,rgba(140,141,142,0.13)_0%,rgba(241,243,244,0.25)_81%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(90deg,rgba(66,165,100,1)_0%,rgba(46,117,205,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
        <div className="flex flex-col items-center gap-10 px-6 py-8 flex-1 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Do it Yourself
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Build a lesson with just a link, file, or copy &amp; pasted text.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[24px_24px] w-full">
            {doItYourselfOptions.map((option, index) => (
              <Card
                key={index}
                className="w-[200px] h-16 bg-white border border-[#d1d6d9] cursor-pointer hover:shadow-md transition-shadow"
              >
                <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Icon"
                    src={option.icon}
                  />
                  <span className="font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-black text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)]">
                    {option.title}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex flex-col w-[474px] items-center gap-10 px-6 py-8 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Streaming Platforms
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Choose a platform below to turn your favorite song, podcast, video
              or TV series into a lesson.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[24px_24px] w-full">
            {streamingPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="w-[200px] h-16 bg-white border border-[#d1d6d9] cursor-pointer hover:shadow-md transition-shadow"
              >
                <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                  <div
                    className="w-10 h-10 rounded-lg bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${platform.image})` }}
                  />
                  <span className="font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-black text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)]">
                    {platform.title}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex flex-col items-center gap-10 px-6 py-8 flex-1 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Socials
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Create lessons from Reels and Tik Toks to get more out of
              scrolling.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[24px_24px] w-full">
            {socialPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="w-[200px] h-16 bg-white border border-[#d1d6d9] cursor-pointer hover:shadow-md transition-shadow"
              >
                <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                  <div
                    className="w-10 h-10 rounded-lg bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${platform.image})` }}
                  />
                  <span className="font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-black text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)]">
                    {platform.title}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
