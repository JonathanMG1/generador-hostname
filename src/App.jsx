import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import CaseSelector from "./components/CaseSelector";
import BaseParameters from "./components/BaseParameters";
import SpecificFields from "./components/SpecificFields";
import ResultCard from "./components/ResultCard";

import { 
  ORIGENES, 
  TIPOS_EQUIPO, 
  GERENCIAS, 
  UBICACIONES, 
  cleanText, 
} from "./data/nomenclaturaData";

export default function App() {
  const [caso, setCaso] = useState("1");
  const [origen, setOrigen] = useState("I");
  const [tipoEquipo, setTipoEquipo] = useState("N");
  const [gerencia, setGerencia] = useState("A");
  const [ubicacion, setUbicacion] = useState("S");

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [siglaBase, setSiglaBase] = useState("ARI");
  const [numeroEquipoBase, setNumeroEquipoBase] = useState("001");
  const [nombreArea, setNombreArea] = useState("");
  const [correlativoGenerico, setCorrelativoGenerico] = useState("01");

  // Cálculo del Hostname y reglas de validación
  const { hostname, breakdown, validation } = useMemo(() => {
    let part5 = "";
    let detail5 = "";

    if (caso === "1") {
      const cleanNombre = cleanText(nombreUsuario);
      const cleanApellido = cleanText(apellidoUsuario);
      const firstTwo = cleanNombre.slice(0, 2);
      part5 = `${firstTwo}${cleanApellido}`;
      detail5 = `Nombre: ${firstTwo} + Apellido: ${cleanApellido}`;
    } else if (caso === "2") {
      const cleanNum = cleanText(numeroEquipoBase).slice(0, 3);
      part5 = `${siglaBase}${cleanNum}`;
      detail5 = `Base: ${siglaBase} + N°: ${cleanNum}`;
    } else if (caso === "3") {
      const cleanArea = cleanText(nombreArea);
      const cleanCorr = cleanText(correlativoGenerico).padStart(2, "0").slice(0, 2);
      const maxAreaLength = 15 - 4 - 2; 
      const areaTruncated = cleanArea.slice(0, maxAreaLength);
      
      part5 = `${areaTruncated}${cleanCorr}`;
      detail5 = `Área: ${areaTruncated} + Correlativo: ${cleanCorr}`;
    }

    const generated = `${origen}${tipoEquipo}${gerencia}${ubicacion}${part5}`;
    const length = generated.length;

    let isValid = true;
    let message = "Cumple con la norma corporativa (<= 15 caracteres).";

    if (length > 15) {
      isValid = false;
      message = `Excede el límite de NetBIOS (${length}/15 caracteres).`;
    } else if (caso === "1" && (!nombreUsuario || !apellidoUsuario)) {
      isValid = false;
      message = "Complete los datos del colaborador.";
    } else if (caso === "3" && !nombreArea) {
      isValid = false;
      message = "Ingrese el nombre del área operativa.";
    }

    return {
      hostname: generated,
      validation: { isValid, message, length },
      breakdown: [
        { pos: "1", code: origen, label: ORIGENES.find((o) => o.code === origen)?.label },
        { pos: "2", code: tipoEquipo, label: TIPOS_EQUIPO.find((t) => t.code === tipoEquipo)?.label },
        { pos: "3", code: gerencia, label: GERENCIAS.find((g) => g.code === gerencia)?.label },
        { pos: "4", code: ubicacion, label: UBICACIONES.find((u) => u.code === ubicacion)?.label },
        { pos: "5+", code: part5, label: detail5 },
      ],
    };
  }, [
    caso, origen, tipoEquipo, gerencia, ubicacion,
    nombreUsuario, apellidoUsuario, siglaBase, numeroEquipoBase,
    nombreArea, correlativoGenerico
  ]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-12">
      <Header />

      <main className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CaseSelector caso={caso} setCaso={setCaso} />

          <BaseParameters
            origen={origen} setOrigen={setOrigen}
            tipoEquipo={tipoEquipo} setTipoEquipo={setTipoEquipo}
            gerencia={gerencia} setGerencia={setGerencia}
            ubicacion={ubicacion} setUbicacion={setUbicacion}
          />

          <SpecificFields
            caso={caso}
            nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario}
            apellidoUsuario={apellidoUsuario} setApellidoUsuario={setApellidoUsuario}
            siglaBase={siglaBase} setSiglaBase={setSiglaBase}
            numeroEquipoBase={numeroEquipoBase} setNumeroEquipoBase={setNumeroEquipoBase}
            nombreArea={nombreArea} setNombreArea={setNombreArea}
            correlativoGenerico={correlativoGenerico} setCorrelativoGenerico={setCorrelativoGenerico}
          />
        </div>

        <div>
          <ResultCard 
            hostname={hostname} 
            validation={validation} 
            breakdown={breakdown} 
          />
        </div>
      </main>
    </div>
  );
}