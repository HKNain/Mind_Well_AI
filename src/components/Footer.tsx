import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-neutral-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2">
                <i className="fas fa-brain text-primary"></i>
              </div>
              <span className="text-white font-bold text-xl">MindWell</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Empowering you on your journey to better mental health through technology and evidence-based resources.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary-light transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-light transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-light transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-light transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-neutral-300 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-neutral-300 hover:text-white transition">
                  Self-Assessment
                </Link>
              </li>
              <li>
                <Link href="/ai-support" className="text-neutral-300 hover:text-white transition">
                  AI Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-neutral-300 hover:text-white transition">
                  Mental Health Articles
                </Link>
              </li>
              <li>
                <Link href="/resources?category=anxiety" className="text-neutral-300 hover:text-white transition">
                  Anxiety Resources
                </Link>
              </li>
              <li>
                <Link href="/resources?category=depression" className="text-neutral-300 hover:text-white transition">
                  Depression Resources
                </Link>
              </li>
              <li>
                <Link href="/resources?category=stress" className="text-neutral-300 hover:text-white transition">
                  Stress Management
                </Link>
              </li>
              <li>
                <Link href="/resources?category=sleep" className="text-neutral-300 hover:text-white transition">
                  Sleep Improvement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Important Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-neutral-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-300 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-neutral-300 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-neutral-300 hover:text-white transition">
                  Accessibility
                </Link>
              </li>
              <li>
                <div className="bg-white/10 p-3 rounded-lg mt-2">
                  <p className="text-white font-medium">Crisis Support</p>
                  <p className="text-neutral-300 text-sm">
                    If you're in crisis, call the National Crisis Hotline at{" "}
                    <a href="tel:988" className="text-primary-light font-medium">
                      988
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-400 pt-6 text-center text-neutral-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MindWell. All rights reserved. MindWell is not a
            substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
