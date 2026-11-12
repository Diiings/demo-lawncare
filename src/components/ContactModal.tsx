'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white-900">Send an Inquiry</h2>
        <p className="text-white-600 mt-2">Have a question or custom request? Drop us a line!</p>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
      >
        {/* Replace with Client's Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="FORM_ACCESS_KEY" />

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Message / Pet Details</label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your pet or required service..."
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition text-sm"
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}