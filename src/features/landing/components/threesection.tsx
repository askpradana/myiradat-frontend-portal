import Image from 'next/image'

type SectionData = {
  title: string;
  subTitle: string;
  imageSrc: string;
  altText: string;
  bgColor: string; // new field
};

export default function ThreeSections() {
  const data: SectionData[] = [
    {
      title: "Create your card in seconds",
      subTitle:
        "Personalize your own digital business cards with your headshot, logo and slick design templates. New job title? New logo? No problem. Update your card instantly in the Blinq mobile app.",
      imageSrc:
        "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop",
      altText: "Mobile digital business card example",
      bgColor: "bg-blue-50",
    },
    {
      title: "Share your card with anyone",
      subTitle:
        "Scan. Tap. Done. QR, NFC, or link – your details land instantly even if they don’t have the app.",
      imageSrc:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2670&auto=format&fit=crop",
      altText: "Business card with QR and contact info",
      bgColor: "bg-green-50",
    },
    {
      title: "Never forget a face, or a moment",
      subTitle:
        "Blinq keeps track of who you met and when. Add context to your contacts so you always have an edge.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Notes section on contact card",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16">
      <div className="space-y-16">
        {data.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={index}
              className={`${
                item.bgColor ?? "bg-brand-50"
              } rounded-2xl px-6 sm:px-8 py-12 max-w-screen-xl mx-auto`}
            >
              <div
                className={`grid md:grid-cols-2 items-center gap-12 max-w-screen-xl mx-auto`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "md:order-2" : ""} text-left`}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-700 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-brand-300 text-base sm:text-lg mb-6">
                    {item.subTitle}
                  </p>
                  <button
                    className="bg-brand-500 hover:bg-brand-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
                    aria-label="Create my card"
                  >
                    Create my card
                  </button>
                </div>

                {/* Image */}
                <div className={`${isEven ? "md:order-1" : ""}`}>
                  <Image
                    src={item.imageSrc || "https://placehold.co/600x400"} 
                    alt={item.altText}
                    width={500} 
                    height={300}
                    className="w-full max-w-md md:max-w-full mx-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
