import Arrowpart from "./arrowpart"
import HeroSection from "./hero-section"



const Leftsection = () => {
  return (
    <div className="h-150 w-2/5 flex flex-col justify-between p-4 md:p-8 md:w-1.5/5">
      <HeroSection />
      <Arrowpart />
     
    </div>
  )
}

export default Leftsection
