import Banner from "./components/banner";
import HRConsultantFAQ from "./components/faqsection";
import HomeFooter from "./components/footer";
import ThreeSections from "./components/threesection";
import TrustedCompanies from "./components/trustedby";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <TrustedCompanies />
      <ThreeSections />
      <HRConsultantFAQ />
      <HomeFooter />
    </div>
  );
}
