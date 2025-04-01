import { Link } from "wouter";
import FeatureCard from "@/components/FeatureCard";
import ResourceCard from "@/components/ResourceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { resources, getResourceCategoryColor } from "@/lib/resources";

const Home = () => {
  const featuredResources = resources.slice(0, 3);
  
  const features = [
    {
      icon: "fas fa-robot",
      title: "Mental Health Companion",
      description: "Voice-enabled AI bot with optional face cam for emotional analysis. Sends helpful reminders and offers personalized advice, motivational quotes, and stress-relief exercises with tailored treatment suggestions.",
      iconBgClass: "bg-primary-light/20",
      iconClass: "text-primary",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Emergency Support & Safety",
      description: "Alerts emergency contacts if abnormal behavior or critical health risks are detected. Provides direct access to mental health hotlines and connects you with healthcare professionals.",
      iconBgClass: "bg-secondary-light/20",
      iconClass: "text-secondary",
    },
    {
      icon: "fas fa-chart-line",
      title: "Daily Health Tracker & AI Insights",
      description: "Log sleep, diet, symptoms, and activity; generate easy-to-read reports. Our AI analyzes trends, predicts potential risks, and provides actionable recommendations.",
      iconBgClass: "bg-accent-light/20",
      iconClass: "text-accent",
    },
  ];

  const testimonials = [
    {
      quote: "The AI assistant helped me identify patterns in my anxiety and suggested practical techniques that actually work for me. It's been a great complement to my therapy.",
      name: "Sarah M.",
      rating: 5,
    },
    {
      quote: "The self-assessment tools gave me insights I hadn't considered before. The personalized resources helped me take the first steps toward getting professional help.",
      name: "Michael T.",
      rating: 4.5,
    },
    {
      quote: "I appreciate having access to evidence-based mental health resources all in one place. The articles are informative without being overwhelming.",
      name: "Jamie L.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/10 to-accent-light/10 pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-500 leading-tight mb-4">
                Your Journey to Better Mental Health Starts Here
              </h1>
              <p className="text-lg text-neutral-400 mb-4">
                Individuals struggling with mental health lack immediate, personalized support that integrates AI companionship, real-time health tracking, and proactive crisis prevention, leaving them vulnerable to crises.
              </p>
              <p className="text-lg text-neutral-400 mb-8">
                MindWell combines AI, real-time data analytics, and behavioral psychology to address this global mental health crisis with high social impact, making support more accessible and proactive.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/ai-support" className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300 text-center">
                  Try Mental Health Companion
                </Link>
                <Link href="/assessment" className="bg-white hover:bg-neutral-200 text-primary border border-primary font-medium px-6 py-3 rounded-md transition duration-300 text-center">
                  Start Health Tracking
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Person meditating peacefully outdoors"
                className="rounded-lg shadow-lg w-full object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-500 mb-4">How MindWell Supports You</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Our platform offers a range of tools and resources designed to support your mental health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgClass={feature.iconBgClass}
                iconClass={feature.iconClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16 bg-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-500 mb-4">Featured Resources</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Explore our curated collection of articles and guides to support your mental wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const { bgColor, textColor } = getResourceCategoryColor(resource.category);
              return (
                <ResourceCard
                  key={resource.id}
                  category={resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  categoryColor={textColor}
                  bgColorClass={bgColor}
                  readTime={resource.readTime}
                  title={resource.title}
                  description={resource.description}
                  imageSrc={resource.imageSrc}
                />
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/resources" className="inline-flex items-center bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium px-6 py-3 rounded-md transition duration-300">
              View All Resources <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shield-alt text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-center text-2xl font-bold text-neutral-600 mb-4">Emergency Support & Safety</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span>Automated alerts to emergency contacts if concerning behavior patterns are detected</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span>One-touch access to mental health crisis hotlines</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span>Direct connectivity to healthcare professionals</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span>Location sharing with trusted contacts during emergencies</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition duration-300">
                      Configure Emergency Contacts
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-neutral-500 mb-4">Safety When You Need It Most</h2>
                <p className="text-neutral-400 mb-4">
                  MindWell's emergency support system provides peace of mind by ensuring help is always available during critical moments.
                </p>
                <p className="text-neutral-400 mb-4">
                  Our intelligent monitoring system can detect patterns that may indicate a mental health crisis and automatically alert your designated emergency contacts.
                </p>
                <p className="text-neutral-400 mb-4">
                  Set up your emergency contact network and create a personalized safety plan that activates automatically when needed.
                </p>
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-primary mt-6">
                  <p className="text-sm font-medium text-neutral-500">
                    "The emergency alert feature gave me confidence to live independently while managing my condition. My family has peace of mind knowing they'll be alerted if I need help."
                  </p>
                  <p className="text-sm text-neutral-400 mt-2">— Michael R., MindWell User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-500 mb-4">Voices from Our Community</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Hear from people who have found support and guidance through MindWell.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Mental Wellness Journey Today</h2>
            <p className="text-primary-light text-lg mb-8">
              Take the first step towards better mental health with our AI companion and evidence-based resources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/ai-support" className="bg-white text-primary hover:bg-neutral-100 font-medium px-8 py-3 rounded-md transition duration-300">
                Use Mental Health Companion
              </Link>
              <Link href="/assessment" className="bg-primary-dark text-white hover:bg-primary-dark/80 font-medium px-8 py-3 rounded-md transition duration-300">
                Start Health Tracking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
