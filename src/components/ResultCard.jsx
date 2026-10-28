import React, { useState } from "react";
import { MapPin, Copy, Check, Info } from "lucide-react";

export default function ResultCard({ hostname, validation, breakdown }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hostname);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm sticky top-6 space-y-6">
      <h2 className="text-sm font-semibold text-slate-700 border-b border-slate-100 pb-2 flex items-center gap-2">
        <MapPin className="w-4 h-4 text-blue-600" />
        Resultado de Nomenclatura
      </h2>

      <div className="bg-slate-900 rounded-lg p-5 text-center shadow-inner">
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
          Hostname Generado
        </span>
        <div className="text-2xl font-mono font-bold text-emerald-400 tracking-widest my-2 select-all break-all">
          {hostname}
        </div>
        <div className="text-xs text-slate-400">
          Longitud:{" "}
          <span className={validation.length <= 15 ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
            {validation.length}
          </span>{" "}
          / 15 caracteres
        </div>

        <button
          onClick={copyToClipboard}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          {copied ? "¡Copiado al Portapapeles!" : "Copiar Nombre"}
        </button>
      </div>

      <div className={`p-3 rounded-md border text-xs flex items-start gap-2 ${
        validation.isValid 
          ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
          : "bg-rose-50 border-rose-200 text-rose-800"
      }`}>
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <div>{validation.message}</div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">
          Desglose Formato Corporativo
        </h3>
        <ul className="space-y-2 text-xs">
          {breakdown.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
              <span className="font-mono bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-bold">
                {item.code || "-"}
              </span>
              <span className="text-slate-600 text-right truncate ml-2">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}