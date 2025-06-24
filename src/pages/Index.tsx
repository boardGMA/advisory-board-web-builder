
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
              A unique combination of strategic vision, operational excellence, and governance expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Strategic Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proven track record of guiding organizations through transformational growth, 
                  strategic pivots, and complex market challenges with decisive leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep expertise in optimizing business operations, implementing scalable processes, 
                  and driving performance improvements across diverse industries.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Innovation Catalyst</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Champion of innovation and digital transformation, helping organizations 
                  adapt to changing markets and emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My career has been defined by a commitment to excellence and a passion for helping 
                organizations reach their full potential. Over the past three decades, I have had 
                the privilege of serving in various leadership roles across multiple industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From my early days as a management consultant to my tenure as a C-suite executive, 
                I have consistently focused on driving strategic growth, fostering innovation, and 
                building high-performing teams. This journey has equipped me with a unique perspective 
                on the challenges and opportunities facing modern organizations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, I channel this experience into board advisory work, helping directors and 
                leadership teams navigate complex decisions, optimize governance structures, and 
                achieve sustainable growth in an increasingly competitive landscape.
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every engagement and relationship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Unwavering commitment to ethical leadership and transparent communication 
                  in all business relationships and decisions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Pursuing the highest standards in every engagement, delivering exceptional 
                  value and measurable results for stakeholders.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Building strong partnerships and fostering inclusive environments where 
                  diverse perspectives drive innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Embracing change and championing forward-thinking approaches to solve 
                  complex challenges and create sustainable competitive advantages.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive board advisory services tailored to your organization's unique needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Planning & Governance</CardTitle>
                <CardDescription>
                  Comprehensive strategic planning and governance framework development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Board Effectiveness Assessment</h4>
                  <p className="text-gray-600">Evaluate current board performance and identify improvement opportunities</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Strategic Planning Facilitation</h4>
                  <p className="text-gray-600">Guide long-term strategic planning processes and implementation</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Governance Framework Design</h4>
                  <p className="text-gray-600">Develop robust governance structures and best practices</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Leadership Development</CardTitle>
                <CardDescription>
                  Executive coaching and leadership development programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Executive Coaching</h4>
                  <p className="text-gray-600">One-on-one coaching for C-suite executives and board members</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Board Director Training</h4>
                  <p className="text-gray-600">Comprehensive training programs for new and experienced directors</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Succession Planning</h4>
                  <p className="text-gray-600">Develop robust succession plans for key leadership positions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Risk Management</CardTitle>
                <CardDescription>
                  Comprehensive risk assessment and mitigation strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Risk Assessment</h4>
                  <p className="text-gray-600">Identify and evaluate enterprise-wide risks and vulnerabilities</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Crisis Management Planning</h4>
                  <p className="text-gray-600">Develop comprehensive crisis response and business continuity plans</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Compliance Oversight</h4>
                  <p className="text-gray-600">Ensure regulatory compliance and ethical business practices</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Organizational Transformation</CardTitle>
                <CardDescription>
                  Strategic change management and organizational development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Change Management</h4>
                  <p className="text-gray-600">Guide organizations through major transformational initiatives</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Digital Transformation</h4>
                  <p className="text-gray-600">Navigate technology adoption and digital business model evolution</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Culture Development</h4>
                  <p className="text-gray-600">Build high-performance cultures aligned with strategic objectives</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
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
                    <p className="text-gray-600">info@gmboardadvisory.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-600">Connect on LinkedIn</p>
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
              © 2024 GM Board Advisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
