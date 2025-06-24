
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, LinkedinIcon, CheckCircle, Users, Target, Lightbulb, Sparkles, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/552edd07-7954-4227-9e9e-cc775891f083.png" 
              alt="GM Board Advisory Logo" 
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
            <a href="#values" className="text-gray-700 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Values</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-200/30 rounded-full animate-pulse delay-700"></div>
          <Star className="absolute top-32 right-1/3 w-8 h-8 text-yellow-400/40 animate-pulse delay-1000" />
          <Sparkles className="absolute bottom-20 right-10 w-6 h-6 text-blue-400/50 animate-bounce delay-500" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Strategic Board Advisory</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                  Leveraging decades of executive experience
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I help boards and founders unlock long-term value through strategic insight & governance expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <a href="#contact" className="flex items-center space-x-2">
                    <span>Get Started</span>
                    <Sparkles className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-blue-50 transition-all duration-300 hover:border-blue-300">
                  <a href="#services">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/d48bffeb-d588-4482-a67d-680e8ad7c610.png" 
                  alt="Professional headshot" 
                  className="relative rounded-lg shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">What I Bring</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unique Strategic Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique blend of strategic vision, emotional intelligence, and purpose-led leadership, developed over a successful career as a CEO and board advisor.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-gray-700">My Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">A New Chapter</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Following an extensive executive leadership career, I've entered a new chapter — focused on supporting businesses through purposeful leadership, Non-Executive Director (NED) roles, and strategic consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Core Values</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guiding Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Doing the right thing — especially when it's not the easy option
                </p>
              </div>
            </div>
            
            <div className="group flex items-start space-x-4 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Empathy</h3>
                <p className="text-gray-600">
                  Connecting with people across all levels of an organization
                </p>
              </div>
            </div>
            
            <div className="group flex items-start space-x-4 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-amber-100 p-2 rounded-lg group-hover:bg-amber-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Purpose</h3>
                <p className="text-gray-600">
                  Driving business success with meaning and impact
                </p>
              </div>
            </div>
            
            <div className="group flex items-start space-x-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">
                  Embracing change and continuous learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-800">What I Do</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through GM Board Advisory, I offer independent governance and strategic expertise to help mission-aligned organizations thrive:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Non-Executive Director</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bringing independent perspective and strategic oversight to your board.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-purple-100">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Board Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic guidance and governance expertise for effective board leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-amber-50 border-amber-100">
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                  <Lightbulb className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Strategic Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Purpose-driven strategic consulting to help your organization thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Contact</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your board's performance? Let's discuss how we can work together 
              to achieve your strategic objectives.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50 border-blue-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription>
                  Contact me to schedule a consultation and explore how we can enhance your board's effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">gwynn@gmboardadvisory.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+44 (0)7720 089217</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                    Schedule a Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/552edd07-7954-4227-9e9e-cc775891f083.png" 
              alt="GM Board Advisory Logo" 
              className="h-16 w-auto mx-auto mb-4 invert hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-400 mb-4">
              Strategic Board Advisory for Growth-Oriented Organizations
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 GM Board Advisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
