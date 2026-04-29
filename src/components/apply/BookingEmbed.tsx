"use client";

import * as React from "react";

const EMBED_SCRIPT_ID = "external-booking-embed";
const EMBED_SCRIPT_SRC = "https://asset-tidycal.b-cdn.net/js/embed.js";
const EMBED_PATH = "team/eskalator-ag/ki-fabrik";

export function BookingEmbed() {
  React.useEffect(() => {
    if (document.getElementById(EMBED_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = EMBED_SCRIPT_ID;
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="tidycal-embed h-[680px] overflow-y-auto overflow-x-hidden"
      data-path={EMBED_PATH}
    />
  );
}
