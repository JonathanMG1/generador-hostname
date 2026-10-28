import React from "react";
import { FileCheck } from "lucide-react";

export default function CaseSelector({ caso, setCaso }) {
  const options = [
    { id: "1", title: "Caso 1: Nominal", sub: "Asignación Personal" },
    { id: "2", title: "Caso 2: Base", sub: "Asignación Regiones" },
    { id: "3", title: "Caso 3: Área", sub: "Operativo / Genérico" },
  ];

  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
        <FileCheck className="w-4 h-4 text-blue-600" />
        1. Seleccione la Modalidad de Asignación
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {options.map((item) => (
          <button
            key={item.id}
            onClick={() => setCaso(item.id)}
            className={`p-3 text-left rounded-md border text-sm transition-all ${
              caso === item.id
                ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium ring-1 ring-blue-600"
                : "border-slate-200 hover:border-slate-300 bg-white text-slate-600"
            }`}
          >
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
          </button>
        ))}
      </div>
    </section>
  );
}