import logo from "../../assets/imges/header-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#131921] text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex px-4  items-center justify-center flex-col md:flex-row md:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="w-[120px] shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />

        <span className="block text-sm text-white text-center">
          © 2023{" "}
          <a href="/" className="hover:underline font-semibold">
            Menna Ayman
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
