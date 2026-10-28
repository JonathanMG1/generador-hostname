// src/data/nomenclatureData.js

export const ORIGENES = [
  { code: "I", label: "Interno" },
  { code: "E", label: "Externo" },
  { code: "P", label: "Practicante" },
  { code: "R", label: "Préstamo" },
  { code: "A", label: "Arriendo" },
  { code: "C", label: "Cyber" },
];

export const TIPOS_EQUIPO = [
  { code: "N", label: "Notebook / Computador Portátil" },
  { code: "P", label: "PC Escritorio / Desktop" },
  { code: "I", label: "Impresora Térmica" },
  { code: "L", label: "Lector de Código de Barras" },
  { code: "D", label: "PDA (Dispositivo Móvil Zebra/Honeywell)" },
  { code: "M", label: "Monitor" },
];

export const GERENCIAS = [
  { code: "A", label: "Administración y Finanzas" },
  { code: "I", label: "Informática / TI" },
  { code: "P", label: "Personas / Recursos Humanos" },
  { code: "C", label: "Comercial" },
  { code: "E", label: "Legal" },
  { code: "M", label: "Marketing" },
  { code: "D", label: "Distribución" },
  { code: "L", label: "Logística" },
  { code: "R", label: "Regiones" },
];

export const UBICACIONES = [
  { code: "S", label: "Santiago" },
  { code: "B", label: "Base" },
  { code: "H", label: "Hub" },
];

export const BASES_SIGLAS = [
  // Zona Norte
  { ciudad: "Arica", sigla: "ARI", zona: "Norte" },
  { ciudad: "Iquique", sigla: "IQQ", zona: "Norte" },
  { ciudad: "Calama", sigla: "CJC", zona: "Norte" },
  { ciudad: "Antofagasta", sigla: "ANF", zona: "Norte" },
  { ciudad: "Copiapó", sigla: "CPO", zona: "Norte" },
  { ciudad: "La Serena", sigla: "LSC", zona: "Norte" },
  { ciudad: "Los Andes", sigla: "LOB", zona: "Norte" },
  { ciudad: "La Calera", sigla: "ZLC", zona: "Norte" },
  { ciudad: "Viña del Mar", sigla: "KNA", zona: "Norte" },
  { ciudad: "Quilpué", sigla: "QPE", zona: "Norte" },
  // Zona Centro
  { ciudad: "Rancagua", sigla: "RCG", zona: "Centro" },
  { ciudad: "Curicó", sigla: "CCO", zona: "Centro" },
  { ciudad: "Talca", sigla: "ZCA", zona: "Centro" },
  { ciudad: "Chillán", sigla: "YAI", zona: "Centro" },
  { ciudad: "Concepción", sigla: "CCP", zona: "Centro" },
  { ciudad: "Melipilla", sigla: "ZMP", zona: "Centro" },
  // Zona Sur
  { ciudad: "Los Ángeles", sigla: "LSQ", zona: "Sur" },
  { ciudad: "Temuco", sigla: "ZCO", zona: "Sur" },
  { ciudad: "Valdivia", sigla: "ZAL", zona: "Sur" },
  { ciudad: "Osorno", sigla: "ZOS", zona: "Sur" },
  { ciudad: "Puerto Montt", sigla: "PMC", zona: "Sur" },
  { ciudad: "Castro", sigla: "CTR", zona: "Sur" },
  { ciudad: "Coyhaique", sigla: "GXQ", zona: "Sur" },
  { ciudad: "Punta Arenas", sigla: "PUQ", zona: "Sur" },
];

export const cleanText = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase();
};