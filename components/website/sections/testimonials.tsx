import FadeIn from "@/components/website/animations/fade-in";

const testimonials = [
  {
    name: "Aarav Architects",
    text: "AVTHAR collections elevated our luxury residential projects with exceptional texture and premium aesthetics.",
  },
  {
    name: "Studio Axis",
    text: "Minimal, timeless, and globally competitive ceramic surfaces crafted beautifully.",
  },
  {
    name: "Urban Habitat",
    text: "The quality, finish, and architectural elegance stand far above ordinary tile brands.",
  },
];

export default function Testimonials() {
  return (
    <FadeIn>
      <section className="section-spacing">
        <div className="container-width">

          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-5">
              Testimonials
            </p>

            <h2
              className="font-semibold tracking-tight max-w-[700px]"
              style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)" }}
            >
              Trusted By Designers & Architects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-neutral-100 rounded-[28px] sm:rounded-[40px] p-7 sm:p-10"
              >
                <p className="text-lg sm:text-2xl leading-8 sm:leading-10 mb-7 sm:mb-10">
                  "{testimonial.text}"
                </p>
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-neutral-500">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
