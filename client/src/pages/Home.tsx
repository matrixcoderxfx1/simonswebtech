import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink, Code, Shield, Globe, ChevronRight, Menu, X, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Assets
import logoImg from "@assets/generated_images/modern_tech_logo_for_simontechsolutions.png";
import heroBg from "@assets/generated_images/dark_abstract_technology_background.png";
import demoCafe from "@assets/generated_images/business_website_mockup.png";
import demoShop from "@assets/generated_images/e-commerce_website_mockup.png";
import demoLanding from "@assets/generated_images/landing_page_mockup.png";
import catBusiness from "@assets/generated_images/professional_business_team.png";
import catShop from "@assets/generated_images/modern_digital_commerce_concept.png";
import catLanding from "@assets/generated_images/digital_growth_and_analytics.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-primary/10 border border-primary/20 p-1">
              <img src={logoImg} alt="SimonTechSolutions" className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white">
                Simon<span className="text-primary">Tech</span>Solutions
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-mono">Namibia's Finest</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("demos")} className="text-sm font-medium hover:text-primary transition-colors">Demos</button>
            <button onClick={() => scrollToSection("packages")} className="text-sm font-medium hover:text-primary transition-colors">Packages</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
            <Button onClick={() => scrollToSection("request")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-white/10">
                <div className="flex flex-col gap-6 mt-10">
                  <button onClick={() => scrollToSection("demos")} className="text-lg font-medium text-left">Demos</button>
                  <button onClick={() => scrollToSection("packages")} className="text-lg font-medium text-left">Packages</button>
                  <button onClick={() => scrollToSection("about")} className="text-lg font-medium text-left">About</button>
                  <Button onClick={() => scrollToSection("request")} className="w-full">Get a Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Tech Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 tech-grid-bg opacity-20" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ACCEPTING NEW CLIENTS IN NAMIBIA
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow">Work</span> & Get You Clients.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Fast, secure, and conversion-focused digital solutions. From local shops to enterprise software, we build the future of Namibian business.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => scrollToSection("request")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection("demos")} variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 hover:text-white">
                View Demos
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Abstract decorative elements */}
        <div className="absolute right-0 top-1/3 w-1/2 h-1/2 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* Features Strip */}
      <div className="border-y border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Optimized for speed & performance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Bank-Grade Security</h3>
                <p className="text-sm text-muted-foreground">Protected against modern threats</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Local & Global</h3>
                <p className="text-sm text-muted-foreground">Built in Namibia, world-class quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demos Section */}
      <section id="demos" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Live Demos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">See what we can build for you. Choose a template to start or request a custom design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DemoCard 
              title="The Modern Cafe" 
              category="Business" 
              image={demoCafe} 
              description="Simple, menu-focused site with contact forms & opening hours."
            />
            <DemoCard 
              title="TechGoods Store" 
              category="E-Commerce" 
              image={demoShop} 
              description="Full product catalog, shopping cart mockup, and payment flows."
            />
            <DemoCard 
              title="SaaS Product Launch" 
              category="Landing Page" 
              image={demoLanding} 
              description="High-conversion landing page with lead capture and analytics."
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-black/20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">No hidden fees. Just professional development packages tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PackageCard 
              title="Business Standard" 
              price="N$ 1,200" 
              image={catBusiness}
              features={["Up to 5 Pages", "Contact Form", "SEO Basics", "Mobile Responsive", "1 Month Support"]}
              isPopular={false}
            />
            <PackageCard 
              title="E-Commerce Pro" 
              price="N$ 2,500" 
              image={catShop}
              features={["Unlimited Products", "Payment Integration", "Inventory Management", "Customer Dashboard", "Advanced SEO", "3 Months Support"]}
              isPopular={true}
            />
            <PackageCard 
              title="Growth Landing" 
              price="N$ 850" 
              image={catLanding}
              features={["Single High-Impact Page", "Lead Capture System", "Analytics Integration", "A/B Testing Ready", "Social Media Links"]}
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Great</h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours with a custom quote.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">We'll discuss your goals and technical needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Expert Development</h4>
                      <p className="text-sm text-muted-foreground">Built with the latest React & Node.js tech stack.</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+264 81..." className="bg-black/20 border-white/10 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Project Type</Label>
                  <Select>
                    <SelectTrigger className="bg-black/20 border-white/10">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business Website</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="custom">Custom Software</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (NAD)</Label>
                  <Select>
                    <SelectTrigger className="bg-black/20 border-white/10">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">N$ 500 - 2,000</SelectItem>
                      <SelectItem value="medium">N$ 2,000 - 5,000</SelectItem>
                      <SelectItem value="large">N$ 5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-black/20 border-white/10 focus:border-primary min-h-[100px]" />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="h-8 w-8 rounded bg-primary/10 border border-primary/20 p-1">
                <img src={logoImg} alt="Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-bold text-white">SimonTechSolutions</span>
            </div>
            <div className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} SimonTechSolutions. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <span className="text-red-500">♥</span> by Simon
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DemoCard({ title, category, image, description }: { title: string, category: string, image: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-colors"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" className="gap-2">View Demo <ExternalLink className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{category}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function PackageCard({ title, price, features, isPopular, image }: { title: string, price: string, features: string[], isPopular: boolean, image: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl overflow-hidden border bg-card flex flex-col ${isPopular ? 'border-primary shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-white/10'}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
          POPULAR
        </div>
      )}
      
      {/* Image Header */}
      <div className="h-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover opacity-60" />
      </div>
      
      <div className="p-6 pt-0 flex-1 flex flex-col relative z-20 -mt-12">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground text-sm">/project</span>
          </div>
        </div>
        
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${isPopular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                <Check className="h-3 w-3" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${isPopular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
          Choose Plan
        </Button>
      </div>
    </motion.div>
  );
}