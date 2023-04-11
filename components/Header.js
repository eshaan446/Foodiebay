"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];

  return (
    <div className="py-5 px-2 sm:px-10 bg-slate-300 flex items-center justify-between client">
      <div>
        <Link href="/">
          <h1 className="text-purple text-red-700 font-bold text-5xl text-center">
            Foodiebay
          </h1>
          <i className="text-red-500 text-bold">your personal food buddy</i>
        </Link>
      </div>
      {pathname && currentArea && (
        <div>
          <Link
            className="bg-red-500 text-white p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logo;