export const metadata = {
  title: "About Us",
  description: "About Us",
};

const page = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Get to know us</h1>
            <p className="mt-3 text-lg text-slate-500 md:text-xl md:mt-700">
              Learn more about our story, mission, and values.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto bg-slate-700 text-white-900 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-white-900 mb-4">
              Our Story
            </h2>
            <main className="text-xl">
              <p>
                Once upon a time in Strawsbury, a group of eco-warriors united
                to combat plastic waste. They birthed Simply Straws—stylish,
                sustainable sippers crafted with love and a sprinkle of magic.
              </p>
              <br />
              <p>
                From cafe epiphanies to global revolution, we've championed
                eco-friendly sipping. Join us on our quest to save the
                planet—one sip at a time!
              </p>
              <br />
              <p>Sip smart, sip stylish, sip Simply Straws.</p>
            </main>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-700 text-white-900 rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-2xl font-bold text-white-900 mb-4">
              Our Mission
            </h2>
            <main className="text-xl">
              <p>
                At Simply Straws, our mission is simple yet powerful: to reduce
                plastic waste and promote sustainable living by providing
                eco-friendly alternatives to single-use plastic straws.
              </p>
              <br />
              <p>
                We are committed to crafting high-quality reusable straws that
                not only elevate your drinking experience but also contribute to
                a healthier planet for generations to come.
              </p>
            </main>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-700 text-white-900 rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-2xl font-bold text-white-900 mb-4">
              Our Values
            </h2>
            <main className="text-xl">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="bg-teal-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold  mb-4">Sustainability</h3>
                  <p className="text-lg leading-relaxed">
                    We are committed to reducing environmental impact through
                    eco-friendly practices and products.
                  </p>
                </li>
                <li className="bg-purple-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-white-800 mb-4">
                    Quality
                  </h3>
                  <p className="text-lg text-white-700 leading-relaxed">
                    We uphold the highest standards of craftsmanship to deliver
                    durable and reliable reusable straws.
                  </p>
                </li>
                <li className="bg-blue-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-white-800 mb-4">
                    Innovation
                  </h3>
                  <p className="text-lg text-white-700 leading-relaxed">
                    We continuously innovate to create innovative solutions that
                    enhance the drinking experience while being eco-conscious.
                  </p>
                </li>
                <li className="bg-orange-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-white-800 mb-4">
                    Community
                  </h3>
                  <p className="text-lg text-white-700 leading-relaxed">
                    We believe in building a supportive community that shares
                    our passion for sustainability and making a positive impact.
                  </p>
                </li>
              </ul>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
