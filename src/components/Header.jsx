import React from "react";
import { Laptop, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white border-b-4 border-blue-600 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-200 rounded-lg shadow-inner">
            <Laptop className="w-7 h-7 text-black" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Generador de Nomenclatura TI
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Estándar Corporativo de Hostnames y Nombres de Equipo
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}