import {
  Component,
  createSignal,
  createEffect,
  onMount,
  Setter,
} from "solid-js";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// --- (worker setup as above) ---
GlobalWorkerOptions.workerSrc = new URL(
  "/static/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PDFViewerProps = {
  url: string;
  pageNum: () => number;
};

const PDFViewer: Component<PDFViewerProps> = ({ url, pageNum }) => {
  let canvasRef: HTMLCanvasElement;
  const [pdfDoc, setPdfDoc] =
    createSignal<import("pdfjs-dist").PDFDocumentProxy>();

  // Load PDF once on mount
  onMount(async () => {
    const loadingTask = getDocument(url);
    const doc = await loadingTask.promise; // :contentReference[oaicite:1]{index=1}
    setPdfDoc(doc);
  });

  const totalPages = () => pdfDoc()?.numPages ?? 0;
  // Whenever pageNum or pdfDoc changes, render that page
  createEffect(async () => {
    const doc = pdfDoc();
    const num = Math.min(pageNum(), totalPages());
    if (!doc || !canvasRef) return;

    const page = await doc.getPage(num);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const outputScale = window.devicePixelRatio || 1;
    // set canvas dimensions
    canvasRef.width = viewport.width * outputScale;
    canvasRef.height = viewport.height * outputScale;
    canvasRef.style.width = `${viewport.width}px`;
    canvasRef.style.height = `${viewport.height}px`;

    const ctx = canvasRef.getContext("2d")!;
    const transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
    await page.render({ canvasContext: ctx, viewport, transform }).promise;
  });

  return (
    <div class="relative aspect-[16/9]">
      <canvas
        class="absolute top-0 left-0 max-w-full max-h-full"
        style="z-index: 200;"
        ref={canvasRef!}
      ></canvas>
    </div>
  );
};

export default PDFViewer;
