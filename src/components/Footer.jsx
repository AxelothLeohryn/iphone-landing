import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              {" "}
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 123-456-7890.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex gap-2">
            {footerLinks.map((link, index) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs cursor-pointer hover:underline "
              >
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2 max-sm:hidden"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
