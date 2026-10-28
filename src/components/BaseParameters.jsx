import React from "react";
import { Building2 } from "lucide-react";
import { ORIGENES, TIPOS_EQUIPO, GERENCIAS, UBICACIONES } from "../data/nomenclaturaData";

export default function BaseParameters({
  origen, setOrigen,
  tipoEquipo, setTipoEquipo,
  gerencia, setGerencia,
  ubicacion, setUbicacion
}) {
  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-sm font-semibold text-slate-700 border-b border-slate-100 pb-2 flex items-center gap-2">
        <Building2 className="w-4 h-4 text-blue-600" />
        2. Parámetros Base 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Posición 1: Origen / Modalidad
          </label>
          <select
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
          >
            {ORIGENES.map((o) => (
              <option key={o.code} value={o.code}>[{o.code}] {o.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Posición 2: Tipo de Equipo
          </label>
          <select
            value={tipoEquipo}
            onChange={(e) => setTipoEquipo(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
          >
            {TIPOS_EQUIPO.map((t) => (
              <option key={t.code} value={t.code}>[{t.code}] {t.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Posición 3: Gerencia / Área
          </label>
          <select
            value={gerencia}
            onChange={(e) => setGerencia(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
          >
            {GERENCIAS.map((g) => (
              <option key={g.code} value={g.code}>[{g.code}] {g.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Posición 4: Ubicación / Infraestructura
          </label>
          <select
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
          >
            {UBICACIONES.map((u) => (
              <option key={u.code} value={u.code}>[{u.code}] {u.label}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}