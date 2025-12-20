import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Clipboard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button aria-label="copy" data-clicked={copied} className="rounded-xl p-2 hover:bg-slate-600 data-[clicked=true]:bg-green-500 data-[clicked=true]:scale-110 transition-all duration-200" onClick={handleCopy}>
      {
        copied ? <Check /> : <Copy />
      }
    </button>
  );
}