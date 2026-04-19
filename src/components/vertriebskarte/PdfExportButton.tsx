"use client";

import { useState, type RefObject } from "react";

export function PdfExportButton({
  mapRef,
}: {
  mapRef: RefObject<HTMLDivElement | null>;
}) {
  const [exporting, setExporting] = useState(false);

  async function handleExport() {
    if (!mapRef.current || exporting) return;
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(mapRef.current, {
        useCORS: true,
        scale: 2,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
      pdf.save("vertriebskarte.pdf");
    } catch {
      // eslint-disable-next-line no-alert
      alert("PDF-Export fehlgeschlagen. Bitte versuchen Sie es erneut.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={exporting}
      className="rounded-lg border border-line bg-white/90 px-3 py-2 text-xs font-medium text-ink-700 shadow-soft backdrop-blur-sm transition-colors hover:bg-white disabled:opacity-50"
    >
      {exporting ? "Exportiert…" : "PDF Export"}
    </button>
  );
}
