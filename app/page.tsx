import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import { EventGallery } from "@/components/event-gallery"
import { Clients } from "@/components/clients"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <EventGallery />
      <Clients />
      <Contact />
    </>
  )
}
