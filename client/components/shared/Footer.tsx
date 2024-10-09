"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="mt-6 border-t flex flex-col items-center justify-center w-full">
      <div className="w-4/5 flex justify-between py-16">
        <div className="basis-1/2">
          <div className="text-4xl font-bold">DevLink</div>
          <div className="text-neutral-400 w-4/5 text-xl mt-2">
            Discover tech conferences, hackathons, and meetups near you.
            Contribute and connect with the tech community. Join us in making
            event discovery simple!
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="self-end hover:underline cursor-pointer text-xl"
            onClick={() => {
              router.push("/about");
            }}
          >
            About Us
          </div>
          <div className="self-end hover:underline cursor-pointer text-xl">
            Terms of Use
          </div>
        </div>
      </div>
      <div className="border-t py-4 w-full text-center">
        <div className="text-neutral-300 text-sm">
          &copy; 2024 DevLink. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
