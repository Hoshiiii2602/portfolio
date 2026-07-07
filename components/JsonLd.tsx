export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nguyenxuantrong.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nguyễn Xuân Trọng",
    alternateName: "Nguyen Xuan Trong",
    jobTitle: "Mobile Developer",
    description:
      "Mobile Developer specializing in Flutter and React Native with Fintech experience.",
    email: "trongnguyenxuan2001@gmail.com",
    telephone: "+840333759182",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    knowsAbout: [
      "Flutter",
      "React Native",
      "Fintech",
      "Mobile Development",
      "TypeScript",
      "React",
    ],
    url: siteUrl,
    image: `${siteUrl}/images/profile.png`,
    sameAs: [],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Nguyễn Xuân Trọng — CV Online",
    description: "Online CV and portfolio of Nguyen Xuan Trong, Mobile Developer.",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "Nguyễn Xuân Trọng",
      jobTitle: "Mobile Developer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
