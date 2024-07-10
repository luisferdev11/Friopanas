# Friopanas Football Team Form

Este proyecto es un formulario desarrollado con Astro para recopilar datos sobre los jugadores del equipo de fútbol Friopanas. El objetivo del formulario es obtener información relevante de los jugadores para optimizar los plantamientos tácticos, estrategias y roles para la próxima temporada.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto de Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Form.astro
│   │   └── FormField.astro
│   ├── constants/
│   │   └── questions.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── types/
│   │   └── types.ts
│   └── env.d.ts
└── package.json
```

- `src/pages/`: Contiene las páginas de tu proyecto. Cada archivo `.astro` o `.md` en este directorio se expone como una ruta basada en su nombre de archivo.
- `src/components/`: Aquí se colocan los componentes de Astro utilizados en el proyecto.
- `src/constants/`: Contiene archivos de constantes, como las preguntas del formulario.
- `src/layouts/`: Contiene los diseños de página reutilizables, como el diseño principal del sitio.
- `src/types/`: Contiene los tipos TypeScript utilizados en el proyecto.
- `public/`: Aquí se colocan los recursos estáticos como imágenes y archivos de íconos.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde un terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                    |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321`  |
| `npm run build`           | Construye tu sitio de producción en `./dist/`               |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`        |
| `npm run astro -- --help` | Obtén ayuda utilizando el CLI de Astro                      |

## 👀 ¿Quieres aprender más?

Siéntete libre de consultar [La documentación de Astro](https://docs.astro.build) o unirte a su [servidor de Discord](https://astro.build/chat).

## 📋 Preguntas del Formulario

Estas son algunas de las preguntas que se encuentran en el formulario (Por ahora generadas por chatsito):

- ¿Cuál es tu nombre?
- ¿En qué posición te sientes más cómodo jugando?
- ¿En qué posición has jugado en el equipo?
- ¿Qué rol prefieres tener en el equipo?
- ¿Cómo evaluarías tu nivel físico actual?
- ¿Con qué estilo de juego te sientes más cómodo?
- ¿Cuánto tiempo has jugado fútbol?
- ¿Con qué frecuencia puedes asistir a los entrenamientos?
- ¿Cómo calificarías tu condición física actual?
- ¿Cuáles son tus expectativas para la próxima temporada?

Estas preguntas están diseñadas para obtener una comprensión completa de las preferencias y habilidades de los jugadores, lo que permitirá planificar mejor la estrategia del equipo para la próxima temporada.

---

¡Gracias por contribuir a mejorar nuestro equipo Friopanas!
