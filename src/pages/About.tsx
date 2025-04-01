import { Link } from "wouter";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 skew-x-12 transform origin-bottom-left"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neutral-800">About </span>
              <span className="text-primary">MindWell</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              We're on a mission to democratize mental health support through technology and evidence-based resources.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg transform -rotate-6"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/15 rounded-lg transform rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration"
                    className="rounded-xl shadow-xl relative z-10 w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-neutral-800 mb-6 flex items-center">
                  <div className="w-12 h-1 bg-primary mr-4"></div>
                  Our Mission
                </h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  At MindWell, we believe that everyone deserves access to quality mental health resources and support. Our mission
                  is to leverage technology to make mental health information and tools more accessible, understandable, and
                  actionable for people worldwide.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We're committed to developing a platform that provides immediate, personalized support that integrates AI companionship, 
                  real-time health tracking, and proactive crisis prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">What We Offer</h2>
            <p className="text-lg text-neutral-600">
              MindWell provides a comprehensive suite of services designed to support your mental wellness journey.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-robot text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">AI Companion</h3>
              <p className="text-neutral-600">
                Our AI assistant is available 24/7 to provide empathetic support, information,
                and resources tailored to your needs. Access personalized guidance whenever you need it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-book-open text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Resource Library</h3>
              <p className="text-neutral-600">
                Access our curated collection of evidence-based articles, guides, and tools
                covering various mental health topics. Learn strategies to improve your wellbeing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-clipboard-check text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Self-Assessment Tools</h3>
              <p className="text-neutral-600">
                Take validated mental health screenings to gain insights into your
                well-being and identify areas where you might benefit from additional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-neutral-800 mb-6 flex items-center">
                  <div className="w-12 h-1 bg-primary mr-4"></div>
                  Our Approach
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  We believe in a holistic approach to mental health that recognizes the complex interplay between biological,
                  psychological, and social factors.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-neutral-800 mb-2">Evidence-Based</h4>
                    <p className="text-neutral-600">We rely on established research and clinical best practices.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-neutral-800 mb-2">Accessible</h4>
                    <p className="text-neutral-600">We make mental health information approachable for everyone.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-neutral-800 mb-2">Empowering</h4>
                    <p className="text-neutral-600">We provide actionable strategies for mental well-being.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-neutral-800 mb-2">Supportive</h4>
                    <p className="text-neutral-600">We create a non-judgmental, compassionate environment.</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg transform rotate-6"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/15 rounded-lg transform -rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Holistic approach to mental health"
                    className="rounded-xl shadow-xl relative z-10 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">The Challenge We're Addressing</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  This challenge combines AI, real-time data analytics, and behavioral psychology to address a global mental health crisis 
                  with high social impact. By leveraging technology, we're fostering innovation in mental health solutions, making support 
                  more accessible and proactive.
                </p>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  The problem is genuine, urgent, and solvable, making it an ideal focus for our team to drive meaningful change.
                </p>
                
                <div className="flex items-center p-4 bg-primary/10 rounded-lg mb-8">
                  <div className="mr-4 text-primary text-4xl">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">Our Innovation</h4>
                    <p className="text-neutral-600">
                      We're developing a platform that provides immediate, personalized support integrating AI companionship, 
                      real-time health tracking, and proactive crisis prevention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <i className="fas fa-exclamation-circle mr-3"></i>
                Important Note
              </h3>
              <p className="text-neutral-700 mb-4">
                While MindWell offers valuable resources and support, it is not a substitute for professional mental health care.
                Our AI assistant and self-assessment tools are designed to complement, not replace, the care provided by qualified
                mental health professionals.
              </p>
              <p className="text-neutral-700">
                If you're experiencing a mental health crisis or need immediate support, please contact a crisis helpline or seek
                professional help. The National Suicide Prevention Lifeline is available 24/7 at 988.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 text-center">Get Started Today</h3>
              <p className="text-lg text-neutral-700 mb-8 text-center">
                Take the first step in your mental wellness journey by exploring our resources or connecting with our AI
                assistant.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/resources"
                  className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition duration-300 text-center shadow-md hover:shadow-lg flex-1 max-w-xs mx-auto"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-book-open mr-2"></i>
                    Explore Resources
                  </span>
                </Link>
                <Link
                  href="/ai-support"
                  className="bg-white hover:bg-neutral-50 text-primary border border-primary font-medium px-8 py-3 rounded-lg transition duration-300 text-center shadow-md hover:shadow-lg flex-1 max-w-xs mx-auto"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-robot mr-2"></i>
                    Talk with AI Assistant
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
