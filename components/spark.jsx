import React from 'react';
import { 
  Target, 
  ArrowRight,
  Play,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Zap,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  Building2,
  Rocket,
  Star,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutSpark = () => {
  const stats = [
    { 
      number: "2,500+", 
      label: "Students Impacted", 
      subtext: "Across 15+ programs",
      icon: Users
    },
    { 
      number: "180+", 
      label: "Successful Events", 
      subtext: "Since inception 2019",
      icon: Award
    },
    { 
      number: "75+", 
      label: "Startups Launched", 
      subtext: "₹25Cr+ cumulative valuation",
      icon: Rocket
    },
    { 
      number: "500+", 
      label: "Industry Connections", 
      subtext: "Mentors & investors",
      icon: Building2
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We foster creative thinking and breakthrough solutions that address real-world challenges."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building strong networks of entrepreneurs, mentors, and industry professionals."
    },
    {
      icon: TrendingUp,
      title: "Impact Focused",
      description: "Measuring success through tangible outcomes and sustainable business growth."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Connecting local talent with global opportunities and international best practices."
    }
  ];

  const leadership = [
    {
      name: "DR. VINOD SHASTRI",
      role: "Head, Centre for Innovation and Entrepreneurship",
      background: "Business Strategy, Business Planning, Mentoring Ph.D. Symbiosis International University, 27+ Years of Exp. ",
      
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "MR. MANISH MATHUR",
      role: "AGM, Bennett Hatchery Foundation",
      background: "Mentoring, Monitoring and Evaluation, Networking Fundraising Support & Business Modelling MBA, (Pursuing Ph.D. in Entrepreneurship), 14+ Years of Exp.",
     
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "DR. AJEETA SRIVASTAVA",
      role: "Assistant Professor",
      background: "Expertise in Entrepreneurship & Gender | 10+ years in Academia, Corporate, Govt & NGOs | Teaching Economics & Entrepreneurship | Econ Hons (DU), Ph.D. (JMI) "
     
      ,image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "MR. HARSHIT AGARWAL",
      role: "Incubation Manager, Bennett Hatchery Foundation",
      background: "Mentoring, Monitoring and Evaluation, Networking Fundraising Support & Business Modelling, Accelerator programs MBA Marketing & IB, 7 years exp. ",
      
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "MR. SHUBHAM AWASTHI",
      role: "Asst. Manager, Bennett Hatchery Foundation",
      background: "Data Analysis, Project Management, Networking, Regulatory Compliance, Stakeholder Management PGDM (MBA), MCA, 10+ Years Exp. ",
      
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-red-400 text-sm font-medium tracking-wide uppercase mb-4 border border-red-500/30 px-4 py-2 rounded-full bg-red-500/5">
                  <Star size={16} />
                  Bennett University E-Cell
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">SPARK</span>
                <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                  E-CELL
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Igniting entrepreneurial excellence through innovation, mentorship, and real-world impact. 
                Where ideas transform into successful ventures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg">
                  <span>Explore Programs</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white/20 hover:border-red-400 text-white font-semibold py-4 px-8 rounded-xl hover:bg-red-500/5 flex items-center justify-center gap-3">
                  <Play size={18} />
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
                    <Rocket className="text-red-400 mb-3 mx-auto" size={32} />
                    <h3 className="text-2xl font-bold text-white">75+</h3>
                    <p className="text-sm text-gray-400">Startups Launched</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
                    <Users className="text-red-400 mb-3 mx-auto" size={32} />
                    <h3 className="text-2xl font-bold text-white">2500+</h3>
                    <p className="text-sm text-gray-400">Students Impacted</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
                    <Award className="text-red-400 mb-3 mx-auto" size={32} />
                    <h3 className="text-2xl font-bold text-white">180+</h3>
                    <p className="text-sm text-gray-400">Events Hosted</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
                    <Building2 className="text-red-400 mb-3 mx-auto" size={32} />
                    <h3 className="text-2xl font-bold text-white">500+</h3>
                    <p className="text-sm text-gray-400">Industry Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-red-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at SPARK E-Cell
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-red-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                Transforming Ideas Into <span className="text-red-500">Impact</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2019, SPARK E-Cell has evolved from a student initiative to become Bennett University's 
                  premier entrepreneurship ecosystem. We're not just another college club – we're a comprehensive 
                  platform that bridges the gap between academic learning and real-world business success.
                </p>
                <p>
                  Our approach is rooted in experiential learning, industry partnerships, and measurable outcomes. 
                  Every program we design, every mentor we onboard, and every startup we support is aligned with 
                  one goal: creating successful entrepreneurs who solve meaningful problems.
                </p>
                <p>
                  Today, our alumni network spans across 15+ countries, our startups have collectively raised over 
                  ₹250 crores, and our programs have been recognized nationally for innovation in entrepreneurship education.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8">
                  To democratize entrepreneurship education and create a sustainable ecosystem where innovative 
                  ideas are nurtured, funded, and scaled to create meaningful societal and economic impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Practical, outcome-focused programs</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Industry-validated curriculum</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Measurable impact and success metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Leadership <span className="text-red-500">Team</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experienced professionals driving our vision forward
            </p>
          </div>
        
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden"
              >
                {/* Full width image section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                   
                {/* Content section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-center border-b border-gray-700">
                  <h3 className="text-base font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-red-400 text-sm font-medium mb-2">{leader.role}</p>
                  
                </div>
                                      
                <div className="p-4 h-50 overflow-y-auto">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {leader.background}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer></Footer>
    </div>
  );
};

export default AboutSpark;