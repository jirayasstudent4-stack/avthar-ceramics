import Image from "next/image";

export const metadata = {
  title: "About | AVTHAR Ceramics",
  description:
    "Established in 2003, AVTHAR Ceramics delivers premium ceramic tiles, sanitaryware, fittings, and luxury architectural surfaces.",
};

const stats = [
  {
    number: "23+",
    title: "Years of Experience",
  },
  {
    number: "5L+",
    title: "Sq Ft Warehouse",
  },
  {
    number: "4500+",
    title: "Designs Available",
  },
  {
    number: "10+",
    title: "Premium Brands",
  },
];


export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section
        className="relative h-[650px] md:h-[750px] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8]/70 via-[#312e81]/60 to-[#1e1b4b]/70" />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">
            <p className="uppercase tracking-[0.4em] text-sm text-white/70 mb-8">
              About AVTHAR
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Let Your Space Speak Luxury
            </h1>

            <p className="text-lg md:text-2xl text-white/80 leading-10 max-w-3xl mx-auto">
              We have all sizes and all finishes of premium ceramic tiles
              available for modern architecture and luxury interiors.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-10 py-5 rounded-none text-lg font-medium">
                +91 99449 00047
              </button>

              <button className="bg-white hover:bg-neutral-200 transition-all duration-300 text-black px-10 py-5 rounded-none text-lg font-medium">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-sm text-red-500 mb-6">
                About Company
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                AVTHAR CERAMICS
              </h2>

              <h3 className="text-2xl text-neutral-700 leading-10 mb-10 font-light">
                Established in 2003, AVTHAR Ceramics is one of the pioneers of
                the ceramic industry in South India.
              </h3>

              <div className="space-y-8 text-neutral-600 text-lg leading-9">
                <p>
                  AVTHAR Ceramics started with a 4000 sqft distribution facility
                  and rapidly expanded through customer trust, product quality,
                  and architectural innovation.
                </p>

                <p>
                  Today, AVTHAR serves customers across multiple states with
                  thousands of premium ceramic wall tiles, floor tiles,
                  vitrified tiles, sanitaryware, fittings, and granite
                  collections.
                </p>

                <p>
                  With more than 4500+ designs and globally inspired textures,
                  AVTHAR creates elegant spaces for residences, hospitality
                  projects, and commercial environments.
                </p>
              </div>

              <div className="mt-12 border-l-4 border-red-500 pl-8">
                <p className="text-2xl italic text-neutral-700 leading-10">
                  Always at customers best service,
                  <br />
                  AVTHAR Ceramics... we assure...!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[750px] rounded-[20px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070"
                  alt="Luxury Tiles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="absolute bottom-10 left-10 bg-red-600 text-white p-10 rounded-none">
                <h3 className="text-6xl font-bold leading-none mb-3">
                  23
                </h3>

                <p className="text-xl leading-8 text-white/90">
                  Years Experience
                  <br />
                  In This Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <section
        className="relative py-40 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8]/80 via-[#312e81]/70 to-[#1e1b4b]/80" />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container-width text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            LET’S HOME SPEAK ITS ATTRACTIVENESS
          </h2>

          <p className="text-white/80 text-xl leading-10 max-w-3xl mx-auto">
            We have all sizes and all finishes of the tiles available in the
            world.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-10 py-5 text-lg">
              +91 99449 00047
            </button>

            <button className="bg-white hover:bg-neutral-200 transition-all duration-300 text-black px-10 py-5 text-lg">
              Contact Us →
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div
                key={item.title}
                className="text-center border border-neutral-200 p-12 hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-6xl font-bold text-red-600 mb-6">
                  {item.number}
                </h3>

                <p className="text-xl text-neutral-700 leading-9">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
         <br/>
      </section>
     

{/* PREMIUM BRANDS SECTION */}
<section
  className="relative py-32 overflow-hidden bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/about-banner.jpg')",
  }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* LIGHT EFFECT */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

  <div className="relative z-10 container-width">

    {/* HEADER */}
    <div className="text-center mb-24">
      <p className="uppercase tracking-[0.4em] text-sm text-red-400 mb-6">
        AVTHAR CERAMICS
      </p>

      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
        Trusted Premium Brands
      </h2>

      <p className="max-w-3xl mx-auto text-neutral-300 text-lg leading-9">
        Discover world-class ceramic collections and premium architectural brands.
      </p>
    </div>

    {/* LOGOS */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">

      {/* BRAND 1 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        {/* HOVER LIGHT */}
        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brand1.png"
          alt="Brand 1"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

      {/* BRAND 2 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brand2.jpg"
          alt="Brand 2"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

      {/* BRAND 3 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brands3.jpg"
          alt="Brand 3"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

      {/* BRAND 4 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brands4.jpg"
          alt="Brand 4"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

      {/* BRAND 5 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brands5.jpg"
          alt="Brand 5"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

      {/* BRAND 6 */}
      <div className="group relative flex items-center justify-center w-full h-[140px]">

        <div
          className="
            absolute
            w-32
            h-32
            rounded-full
            bg-white/20
            blur-3xl
            opacity-0
            scale-50

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-125
          "
        />

        <Image
          src="/brands6.jpg"
          alt="Brand 6"
          width={180}
          height={100}
          className="
            relative z-10
            w-auto
            h-auto
            max-h-[90px]
            object-contain

            opacity-70
            grayscale

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:opacity-100
            group-hover:grayscale-0
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />
      </div>

    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 container-width">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-red-500 mb-6">
              Contact Details
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold text-white">
              HOW CAN WE HELP YOU?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 overflow-hidden bg-white">
            <div className="relative h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
                alt="Showroom"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="p-14 md:p-20">
              <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-12">
                Request for
                <br />
                Approximate Estimation
              </h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-neutral-300 px-6 py-5 outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-neutral-300 px-6 py-5 outline-none focus:border-black"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-neutral-300 px-6 py-5 outline-none focus:border-black"
                />

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-neutral-300 px-6 py-5 outline-none focus:border-black"
                />

                <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-10 py-5 text-lg">
                  Send Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}