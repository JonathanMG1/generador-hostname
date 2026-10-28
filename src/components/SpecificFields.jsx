import React from "react";
import { UserCheck } from "lucide-react";
import { BASES_SIGLAS } from "../data/nomenclaturaData";

export default function SpecificFields({
  caso,
  nombreUsuario, setNombreUsuario,
  apellidoUsuario, setApellidoUsuario,
  siglaBase, setSiglaBase,
  numeroEquipoBase, setNumeroEquipoBase,
  nombreArea, setNombreArea,
  correlativoGenerico, setCorrelativoGenerico
}) {
  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-sm font-semibold text-slate-700 border-b border-slate-100 pb-2 flex items-center gap-2">
        <UserCheck className="w-4 h-4 text-blue-600" />
        3. Identificador 
      </h2>

      {caso === "1" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Primer Nombre del Colaborador
            </label>
            <input
              type="text"
              placeholder="Ej: Ana"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            />
            <p className="text-[11px] text-slate-400 mt-1">Se extraerán las 2 primeras letras.</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Primer Apellido</label>
            <input
              type="text"
              placeholder="Ej: López"
              value={apellidoUsuario}
              onChange={(e) => setApellidoUsuario(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            />
          </div>
        </div>
      )}

      {caso === "2" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Seleccionar Base / Ciudad
            </label>
            <select
              value={siglaBase}
              onChange={(e) => setSiglaBase(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            >
              {BASES_SIGLAS.map((b) => (
                <option key={b.sigla} value={b.sigla}>
                  {b.ciudad} ({b.sigla}) - Zona {b.zona}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Número Correlativo
            </label>
            <input
              type="text"
              min="1"
              max="999"
              value={numeroEquipoBase}
              onChange={(e) => setNumeroEquipoBase(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            />
          </div>
        </div>
      )}

      {caso === "3" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Nombre del Área u Operación
            </label>
            <input
              type="text"
              placeholder="Ej: Devoluciones"
              value={nombreArea}
              onChange={(e) => setNombreArea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Correlativo (2 dígitos)
            </label>
            <input
              type="text"
              min="1"
              max="99"
              value={correlativoGenerico}
              onChange={(e) => setCorrelativoGenerico(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
            />
          </div>
        </div>
      )}
    </section>
  );
}