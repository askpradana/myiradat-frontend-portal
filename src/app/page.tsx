"use client";

import Banner from "./landing/banner";
import HRConsultantFAQ from "./landing/faqsection";
import HomeFooter from "./landing/footer";
import ThreeSections from "./landing/threesection";
import TrustedCompanies from "./landing/trustedby";

export default function Home(){
	return(
		<>
		<Banner />
		<TrustedCompanies />
		<ThreeSections />
		<HRConsultantFAQ />
		<HomeFooter />
		</>
	)
}