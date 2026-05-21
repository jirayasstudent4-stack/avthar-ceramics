export default function ContactPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              Contact
            </p>

            <h1 className="text-7xl font-semibold tracking-tight leading-none mb-10">
              Let’s Create Extraordinary Spaces
            </h1>

            <p className="text-xl text-neutral-600 leading-10">
              Connect with our design consultants and discover premium ceramic collections tailored for your architectural vision.
            </p>
          </div>

          <form className="space-y-6">
            <input
              placeholder="Full Name"
              className="w-full border border-neutral-300 rounded-full px-8 py-5 outline-none"
            />

            <input
              placeholder="Email"
              className="w-full border border-neutral-300 rounded-full px-8 py-5 outline-none"
            />

            <textarea
              placeholder="Project Details"
              rows={6}
              className="w-full border border-neutral-300 rounded-[30px] px-8 py-5 outline-none"
            />

            <button className="bg-black text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}