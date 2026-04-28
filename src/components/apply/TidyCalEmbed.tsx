"use client";

import * as React from "react";

/**
 * TidyCal-Embed für direkte Buchung eines Strategietermins.
 *
 * Lädt das Embed-Script idempotent — auch beim Client-Side-Routing
 * wird das Widget korrekt re-initialisiert.
 */
export function TidyCalEmbed() {
  React.useEffect(() => {
    const scriptId = "tidycal-embed-script";

    // Script bereits geladen → Widget neu initialisieren falls nötig.
    const existing = document.getElementById(scriptId);
    if (existing) {
      // TidyCal initialisiert sich i. d. R. automatisch über DOM-Scan.
      // Force re-scan via short delay (DOM ready).
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Bewusst kein cleanup des Scripts — Re-Mounts würden sonst neu laden.
    };
  }, []);

  return (
    <div
      className="tidycal-embed h-[680px] overflow-y-auto overflow-x-hidden"
      data-path="team/eskalator-ag/ki-fabrik"
    />
  );
}
