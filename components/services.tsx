"use client"
import { Monitor, Palette, HandshakeIcon, Building2, Cake } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const content = {
  es: {
    title: "Qué Hacemos",
    subtitle1: "Experiencias en Vivo",
    description:
      "Creamos y operamos visuales en tiempo real para eventos sociales, corporativos, shows y producciones escénicas. Trabajamos con pantallas LED, contenido dinámico y sincronización audiovisual para potenciar el impacto del evento.",
    subtitle2: "Diseño Visual",
    mission:
      "Desarrollamos la identidad visual del proyecto: flyers, contenido digital, animaciones y piezas gráficas que construyen su universo estético. Diseño y ejecución se integran para lograr coherencia visual de principio a fin.",
    offerTitle: "¿Qué ofrecemos?",
    offerDescription: "Ofrecemos un servicio integral de visuales en vivo, incluyendo:",
    eventTypesTitle: "Tipos de Eventos",
  },
  en: {
    title: "What We Do",
    subtitle1: "Live Experiences",
    description:
      "We create and operate real-time visuals for social events, corporate events, shows, and stage productions. We work with LED screens, dynamic content, and audiovisual synchronization to enhance the event's impact.",
    subtitle2: "Visual Design",
    mission:
      "We develop the visual identity of the project: flyers, digital content, animations, and graphic pieces that build its aesthetic universe. Design and execution are integrated to achieve visual coherence from start to finish.",
    offerTitle: "What we offer?",
    offerDescription: "We offer a comprehensive live visual service, including:",
    eventTypesTitle: "Event Types",
  },
}

const services = [
  {
    title: {
      es: "Operación técnica avanzada",
      en: "Advanced technical operation",
    },
    description: {
      es: "Mapeo y gestión de contenido en pantallas LED, LED TV, podios interactivos, proyectores y cámaras de video para transmitir las imágenes en pantalla.",
      en: "Mapping and content management on LED screens, LED TVs, interactive podiums, projectors, and video cameras to transmit images on screen.",
    },
    icon: Monitor,
  },
  {
    title: {
      es: "Diseño de estética visual",
      en: "Visual aesthetic design",
    },
    description: {
      es: "Creación de conceptos únicos que se alinean con la identidad del evento.",
      en: "Creation of unique concepts that align with the event's identity.",
    },
    icon: Palette,
  },
  {
    title: {
      es: "Fidelización y confianza",
      en: "Loyalty and trust",
    },
    description: {
      es: "Cada proyecto es una oportunidad para construir relaciones duraderas, basadas en resultados impecables y profesionalismo.",
      en: "Each project is an opportunity to build lasting relationships, based on impeccable results and professionalism.",
    },
    icon: HandshakeIcon,
  },
]

const eventTypes = [
  {
    name: { es: "Bodas", en: "Weddings" },
    icon: ({ className, ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path d="M378.238 66.909c-11.795-7.6-17.707-13.513-25.306-25.305-1.443-2.239-3.925-3.592-6.588-3.592s-5.145 1.353-6.588 3.592c-7.6 11.793-13.512 17.706-25.306 25.306-2.239 1.443-3.592 3.924-3.592 6.588s1.353 5.145 3.592 6.588c11.795 7.6 17.707 13.513 25.306 25.306 1.443 2.239 3.925 3.592 6.588 3.592 2.663 0 5.145-1.353 6.588-3.592 7.599-11.794 13.512-17.706 25.306-25.306 2.239-1.443 3.592-3.924 3.592-6.588s-1.353-5.145-3.592-6.588zM346.343 87.554c-4.245-5.416-8.641-9.813-14.057-14.057 5.416-4.245 9.812-8.642 14.057-14.057 4.245 5.416 8.642 9.813 14.057 14.057-5.416 4.245-9.813 8.642-14.057 14.057z" />
        <path d="M308.563 105.009L289.753 86.2c-3.059-3.062-8.022-3.06-11.082 0l-18.808 18.808c-1.469 1.47-2.295 3.463-2.295 5.541 0 2.078.826 4.072 2.296 5.542l18.809 18.808c1.53 1.53 3.536 2.295 5.541 2.295s4.011-.765 5.542-2.296l18.807-18.808c3.061-3.06 3.061-8.022 0-11.081zM284.215 118.275l-7.728-7.726 7.725-7.725 7.727 7.726-7.724 7.725z" />
        <path d="M487.112 253.666c-2.443-3.573-7.321-4.486-10.893-2.043-3.571 2.444-4.487 7.321-2.042 10.893 14.491 21.179 22.15 45.994 22.15 71.764 0 70.167-57.085 127.253-127.252 127.253-70.166 0-127.251-57.086-127.251-127.253 0-33.599 13.1-64.187 34.447-86.954 3.942 7.097 7.151 14.593 9.568 22.381-13.88 17.851-22.162 40.261-22.162 64.574 0 58.119 47.282 105.402 105.398 105.402 58.118 0 105.401-47.283 105.401-105.402 0-58.118-47.283-105.401-105.401-105.401-13.762 0-26.912 2.662-38.975 7.484-2.94-6.735-6.31-13.241-10.054-19.498 7.876-3.301 16.154-5.827 24.736-7.493l17.236 13.829c1.936 1.552 4.37 2.407 6.85 2.407h.413c2.49 0 4.928-.858 6.858-2.411l17.237-13.83c23.083 4.467 44.562 15.259 62.104 31.489 3.176 2.939 8.132 2.747 11.075-.429 2.939-3.177 2.747-8.135-.429-11.075-16.513-15.281-36.133-26.273-57.316-32.388 6.936-5.848 10.895-14.313 10.895-23.437 0-16.92-13.765-30.686-30.685-30.686-7.378 0-14.388 2.602-19.941 7.361-5.555-4.762-12.564-7.361-19.941-7.361-16.92 0-30.686 13.766-30.686 30.686 0 9.131 3.965 17.602 10.911 23.45-6.223 1.802-12.268 4.023-18.113 6.618-23.336-31.907-57.361-55.519-96.769-65.506l3.627-2.91c8.723-6.778 13.724-16.992 13.724-28.034 0-19.571-15.922-35.494-35.494-35.494-9.014 0-17.553 3.357-24.138 9.471-6.585-6.114-15.125-9.471-24.139-9.471-19.571 0-35.494 15.922-35.494 35.494 0 11.042 5.001 21.255 13.725 28.035l3.626 2.909C55.343 156.989 0 224.649 0 305.012c0 41.492 14.965 81.573 42.141 112.862 1.549 1.784 3.728 2.698 5.919 2.698 1.822 0 3.652-.631 5.136-1.919 3.267-2.838 3.616-7.789.777-11.056-24.697-28.437-38.3-64.868-38.3-102.584 0-77.27 56.283-141.638 130.006-154.271l18.998 15.244c2.054 1.649 4.635 2.556 7.267 2.556h.502c2.635 0 5.217-.909 7.264-2.555l19.001-15.245c73.723 12.632 130.006 77 130.006 154.271 0 31.877-9.38 62.186-27.211 88.21-5.31-6.066-9.745-12.767-13.249-20.026 12.188-20.666 18.609-44.146 18.609-68.185 0-45.614-22.881-87.793-61.208-112.829-3.624-2.366-8.48-1.35-10.847 2.276-2.367 3.624-1.348 8.479 2.276 10.847 11.939 7.798 22.173 17.483 30.433 28.512-25.559 25.836-41.369 61.334-41.369 100.462 0 24.018 5.975 46.66 16.485 66.55-20.35 14.978-45.112 23.179-70.44 23.179-65.615 0-118.998-53.382-118.998-118.997s53.383-118.998 118.998-118.998c12.802 0 25.4 2.03 37.446 6.033 4.103 1.365 8.543-.858 9.908-4.964 1.366-4.108-.858-8.543-4.965-9.909-13.642-4.535-27.904-6.834-42.388-6.834-74.258 0-134.672 60.413-134.672 134.672 0 74.258 60.413 134.671 134.672 134.671 28.165 0 55.72-8.937 78.519-25.323 4.106 6.059 8.67 11.795 13.651 17.157-26.643 19.411-59.047 30.017-92.169 30.017-34.825 0-67.787-11.191-95.322-32.363-3.431-2.639-8.352-1.995-10.989 1.436-2.638 3.431-1.996 8.352 1.436 10.989 30.297 23.297 66.562 35.611 104.874 35.611 37.376 0 73.918-12.281 103.65-34.698 25.046 21.606 57.632 34.698 93.229 34.698C447.884 477.207 512 413.091 512 334.28c0-28.94-8.606-56.816-24.888-80.614z" />
      </svg>
    ),
  },
  { name: { es: "Eventos Corporativos", en: "Corporate Events" }, icon: Building2 },
  { name: { es: "Fiestas De 15", en: "Sweet Sixteen" }, icon: Cake },
  {
    name: { es: "Bar/Bat Mitzvah", en: "Bar/Bat Mitzvah" },
    icon: ({ className, ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path d="M444.581 249.088c-15.61 29.007-38.38 54.012-65.848 72.313-28.086 18.714-60.673 30.073-94.238 32.85v80.406h-17.411v-18.779h-22.07v18.779h-4.66c-26.88 0-48.748 21.868-48.748 48.749v7.67h141.635v-7.67c0-26.88-21.868-48.749-48.747-48.749h-4.659v-72.542c33.663-4.058 66.17-16.046 94.47-34.901 29.835-19.878 54.568-47.041 71.526-78.552" />
        <path d="M88.687 21.631L69.607 2.55 38.214 21.63c-13.484 13.482-13.484 35.334 0 48.816 13.482 13.482 35.334 13.482 48.816 0 13.482-13.482 13.482-35.334 0-48.816zM184.966 21.631L165.885 2.55l-31.394 19.081c-13.484 13.482-13.484 35.334 0 48.816 13.482 13.482 35.334 13.482 48.816 0 13.482-13.482 13.482-35.334 0-48.816zM377.525 21.631L358.444 2.55l-31.393 19.081c-13.484 13.482-13.484 35.334 0 48.816 13.478 13.482 35.33 13.482 48.812 0 13.482-13.482 13.482-35.334 0-48.816zM281.246 21.631L262.164 2.55l-31.393 19.081c-13.484 13.482-13.484 35.334 0 48.816 13.48 13.482 35.332 13.482 48.814 0 13.482-13.482 13.482-35.334 0-48.816zM473.803 21.631L454.722 2.55 423.33 21.631c-13.484 13.482-13.484 35.334 0 48.816 13.48 13.482 35.33 13.482 48.812 0 13.482-13.482 13.482-35.334 0-48.816z" />
        <path d="M475.386 130.374h-10.075v-25.768h-34.821v25.768h-9.252v27.52h9.252v10.11c0 41.321-15.356 80.933-43.24 111.537-25.511 28.002-59.46 46.308-96.417 52.183v-40.447c26.166-5.633 49.998-19.708 67.734-40.149 19.599-22.586 30.392-51.468 30.392-81.325v-11.909h9.819v-27.52h-9.819v-25.768h-34.821v25.768h-9.506v27.52h9.506v10.11c0 41.321-15.356 80.933-43.24 111.537-25.511 28.002-59.46 46.308-96.417 52.183v-40.447c26.166-5.633 49.998-19.708 67.734-40.149 19.599-22.586 30.392-51.468 30.392-81.325v-11.909h9.819v-27.52h-9.819v-25.768h-34.821v25.768h-9.657v27.52h9.657v11.909c0 29.775-18.754 56.437-45.895 67.079v-78.987h9.657v-27.52h-9.657v-25.768h-34.821v25.768h-9.506v27.52h9.506v11.909c0 29.864 10.792 58.747 30.389 81.33 17.734 20.438 41.569 34.513 67.738 40.145v40.447c-36.958-5.877-70.906-24.182-96.417-52.183-27.883-30.606-43.24-70.217-43.24-111.537v-10.11h9.657v-27.52h-9.657v-25.768H46.713v25.768h-9.668v27.52h9.668v10.11c0 54.981 20.607 107.525 58.024 147.953 35.373 38.219 82.654 62.349 133.865 68.494v24.738" />
      </svg>
    ),
  },
]

export default function Services() {
  const { language } = useLanguage()

  const serviceItems = services.map((service) => (
    <div key={service.title[language]} className="service-card p-6 rounded-lg text-center">
      <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-3">{service.title[language]}</h3>
      <p className="text-muted-foreground">{service.description[language]}</p>
    </div>
  ))

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content[language].title}</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">{content[language].subtitle1}</h3>
            <p className="text-muted-foreground mb-6">{content[language].description}</p>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">{content[language].subtitle2}</h3>
            <p className="text-muted-foreground">{content[language].mission}</p>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%202.jpg-FUpiQSYLYrdXkZq7nlD85cUvaTuHzb.jpeg"
              alt="Experiencia visual en evento"
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{content[language].offerTitle}</h3>
          <p className="text-muted-foreground mb-8">{content[language].offerDescription}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">{serviceItems}</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">{content[language].eventTypesTitle}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.name[language]}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium">{event.name[language]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
