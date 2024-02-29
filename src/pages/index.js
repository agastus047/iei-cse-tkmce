import TestComponent2 from "@/components/visionMision"
import Hero from "@/components/Hero"
import Contact from "@/components/Contact"
import Events from "@/components/Events"
import ScrollTrigger1 from "@/components/ScrollTrigger1"
import ScrollTrigger2 from "@/components/ScrollTrigger2"
import Details from "@/components/Details"
import ExecomContainer from "@/components/ExecomContainer"

export default function Home() {

  return (
    <main>     
      <Hero/>
      <ScrollTrigger1/>
      <ScrollTrigger2/>
      <Details/>
      <TestComponent2/>
      <Events/>
      <ExecomContainer/>
    </main>
  )
}
