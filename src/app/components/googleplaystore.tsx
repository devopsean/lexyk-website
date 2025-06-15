import React from "react";
import { PlayStore } from "react-app-store-badges";

export default function GooglePlayButton() {
  return (
    <PlayStore
      link="https://play.google.com/store/apps/details?id=com.lexyk.lexyk"
      width={200}           // scale as you like
      className="cursor-pointer"
    />
  );
}
