const testimonials = [
  {
    name: "Aarav Architects",
    text:
      "AVTHAR collections elevated our luxury residential projects with exceptional texture and premium aesthetics.",
  },

  {
    name: "Studio Axis",
    text:
      "Minimal, timeless, and globally competitive ceramic surfaces crafted beautifully.",
  },

  {
    name: "Urban Habitat",
    text:
      "The quality, finish, and architectural elegance stand far above ordinary tile brands.",
  },
];
import FadeIn from "@/components/website/animations/fade-in";
export default function Testimonials() {
  return (
    <FadeIn>
    <section className="section-spacing">
      <div className="container-width">
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Testimonials
          </p>

          <h2 className="text-6xl font-semibold tracking-tight">
            Trusted By Designers & Architects
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map(
            (testimonial) => (
              <div
                key={testimonial.name}
                className="bg-neutral-100 rounded-[40px] p-10"
              >
                <p className="text-2xl leading-10 mb-10">
                  "
                  {
                    testimonial.text
                  }
                  "
                </p>

                <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
                  {
                    testimonial.name
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}