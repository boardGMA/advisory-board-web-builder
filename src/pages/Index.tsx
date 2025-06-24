
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, LinkedinIcon, CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/552edd07-7954-4227-9e9e-cc775891f083.png" 
              alt="GM Board Advisory Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#values" className="text-gray-700 hover:text-primary transition-colors">Values</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Board Advisory for Growth-Oriented Organizations
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leveraging decades of executive experience to help boards navigate complex challenges, 
                drive strategic growth, and achieve exceptional governance outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  <a href="#contact">Get Started</a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <a href="#services">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/d48bffeb-d588-4482-a67d-680e8ad7c610.png" 
                alt="Professional headshot" 
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Bring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique blend of strategic vision, emotional intelligence, and purpose-led leadership, developed over a successful career as a CEO and board advisor.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Doing the right thing — especially when it's not the easy option
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Empathy</h3>
                <p className="text-gray-600">
                  Connecting with people across all levels of an organization
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Purpose</h3>
                <p className="text-gray-600">
                  Driving business success with meaning and impact
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through GM Board Advisory, I offer independent governance and strategic expertise to help mission-aligned organizations thrive:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Non-Executive Director</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bringing independent perspective and strategic oversight to your board.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Board Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic guidance and governance expertise for effective board leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your board's performance? Let's discuss how we can work together 
              to achieve your strategic objectives.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription>
                  Contact me to schedule a consultation and explore how we can enhance your board's effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">gwynn@gmboardadvisory.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+44 (0)7720 089217</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    Schedule a Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/552edd07-7954-4227-9e9e-cc775891f083.png" 
              alt="GM Board Advisory Logo" 
              className="h-16 w-auto mx-auto mb-4 invert"
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
