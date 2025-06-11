// app/rsvp/page.tsx
import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

export default function RSVPPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#aaa3c5] px-4 py-16">
      <h2 className={`${uncial.className} text-4xl font-bold mb-6 text-[#684778]`}>
        RSVP
      </h2>
      <iframe
        src="https://sistema.assessoriavip.com.br/rsvpUnico/e9816b60-087a-11ef-a198-0bece7b34b19"
        title="RSVP Form"
        width="100%"
        height="600"
        style={{ border: "none", maxWidth: "800px" }}
        allow="geolocation; microphone; camera; fullscreen"
        loading="lazy"
      />
    </section>
  );
}
