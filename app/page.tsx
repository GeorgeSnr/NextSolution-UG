import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyFoundersChoose from '@/components/WhyFoundersChoose'  // New
import InvestorNetwork from '@/components/InvestorNetwork'     // New
import FAQ from '@/components/FAQ'                            // New
import ApplyForm from '@/components/ApplyForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ForInvestors from '@/components/ForInvestors'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <HowItWorks />
        <WhyFoundersChoose />
        <InvestorNetwork />
        <ForInvestors/>
        <FAQ />
        <ApplyForm/>
      </main>
      <Footer />
    </>
  )
}