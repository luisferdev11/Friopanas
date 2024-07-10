// src/constants/questions.ts
import type { Question } from "../types/types";

export const questions: Question[] = [
  {
    id: "nombre",
    label: "¿Cuál es tu nombre?",
    type: "text",
    placeholder: "nombre",
  },
  {
    id: "posicion_pref",
    label: "¿En qué posición te sientes más cómodo jugando?",
    type: "select",
    options: ["Portero", "Defensa", "Centrocampista", "Delantero"],
  },
  {
    id: "posicion_anter",
    label: "¿En qué posición has jugado en el equipo?",
    type: "select",
    options: ["Portero", "Defensa", "Centrocampista", "Delantero"],
  },
  {
    id: "rol_pref",
    label: "¿Qué rol prefieres tener en el equipo?",
    type: "select",
    options: ["Titular", "Suplente", "Capitán", "Asistente del entrenador"],
  },
  {
    id: "nivel_fisico",
    label: "¿Cómo evaluarías tu nivel físico actual?",
    type: "select",
    options: ["Muy bajo", "Bajo", "Medio", "Alto", "Muy alto"],
  },
  {
    id: "estilo_juego",
    label: "¿Con qué estilo de juego te sientes más cómodo?",
    type: "select",
    options: ["Defensivo", "Ofensivo", "Posesión", "Contragolpe"],
  },
  {
    id: "tiempo_jugado",
    label: "¿Cuánto tiempo has jugado fútbol?",
    type: "select",
    options: ["Menos de un año", "1-3 años", "4-6 años", "Más de 6 años"],
  },
  {
    id: "frecuencia_entrenos",
    label: "¿Con qué frecuencia puedes asistir a los entrenamientos?",
    type: "select",
    options: [
      "Una vez a la semana",
      "Dos veces a la semana",
      "Tres veces a la semana",
      "Cuatro o más veces a la semana",
    ],
  },
  {
    id: "condicion_fisica",
    label: "¿Cómo calificarías tu condición física actual?",
    type: "range",
    placeholder: "1 (Muy baja) - 10 (Muy alta)",
  },
  {
    id: "expectativas",
    label: "¿Cuáles son tus expectativas para la próxima temporada?",
    type: "textarea",
    placeholder: "Escribe tus expectativas aquí",
  },
];
