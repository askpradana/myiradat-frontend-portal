export default function HomeFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-brand-700 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-brand-100 bg-brand-50 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-brand-300 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-brand-500 transition hover:text-brand-700"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                {/* svg */}
              </a>
              <a
                className="text-brand-500 transition hover:text-brand-700"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                {/* svg */}
              </a>
              <a
                className="text-brand-500 transition hover:text-brand-700"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                {/* svg */}
              </a>
              <a
                className="text-brand-500 transition hover:text-brand-700"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>
                {/* svg */}
              </a>
              <a
                className="text-brand-500 transition hover:text-brand-700"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Dribbble </span>
                {/* svg */}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-brand-700"> Services </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-brand-700"> About </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-brand-700"> Support </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-500 transition hover:text-brand-700"
                    href="#"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-100 pt-8">
          <p className="text-center text-xs/relaxed text-brand-300">
            © adauntukkamu. 2025. All rights reserved.
            <br />
            Created with{" "}
            <a
              href="#"
              className="text-brand-500 underline transition hover:text-brand-700"
            >
              Typescript
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-brand-500 underline transition hover:text-brand-700"
            >
              NextJS
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
