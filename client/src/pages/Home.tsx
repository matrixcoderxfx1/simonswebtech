import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ExternalLink, Code, Shield, Globe, ChevronRight, Menu, X, MessageSquare, Zap, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Assets
import logoImg from "@assets/generated_images/modern_tech_logo_for_simontechsolutions.png";
import heroBg from "@assets/generated_images/dark_abstract_technology_background.png";
import demoCafe from "@assets/generated_images/business_website_mockup.png";
import demoShop from "@assets/generated_images/e-commerce_website_mockup.png";
import demoLanding from "@assets/generated_images/landing_page_mockup.png";
import catBusiness from "@assets/generated_images/professional_business_team.png";
import catShop from "@assets/generated_images/modern_digital_commerce_concept.png";
import catLanding from "@assets/generated_images/digital_growth_and_analytics.png";

type CategoryType = "business" | "ecommerce" | "landing";

const PACKAGES: Record<CategoryType, Array<{ title: string, price: string, features: string[], isPopular?: boolean, image: string }>> = {
  business: [
    {
      title: "Business Basic",
      price: "N$ 250",
      image: catBusiness,
      features: ["1 Page Website", "Contact Link", "1 Revision", "Mobile Friendly", "Hosting Setup"],
      isPopular: false
    },
    {
      title: "Business Plus",
      price: "N$ 450",
      image: catBusiness,
      features: ["Up to 3 Pages", "Contact Form", "SEO Basics", "Social Media Links", "2 Revisions", "Map Integration"],
      isPopular: true
    },
    {
      title: "Business Premium",
      price: "N$ 1,200",
      image: catBusiness,
      features: ["5+ Pages", "Custom Branding", "Advanced Animations", "Premium Design", "SEO Pro", "Priority Support"],
      isPopular: false
    }
  ],
  ecommerce: [
    {
      title: "Shop Basic",
      price: "N$ 350",
      image: catShop,
      features: ["Product Listing", "Mock Shopping Cart", "WhatsApp Order", "Mobile Responsive", "Basic Search"],
      isPopular: false
    },
    {
      title: "Shop Plus",
      price: "N$ 600",
      image: catShop,
      features: ["Multi-page Shop", "Category Filtering", "Basic SEO", "Order Management", "Admin Dashboard"],
      isPopular: true
    },
    {
      title: "Shop Premium",
      price: "N$ 850",
      image: catShop,
      features: ["Full Payment Setup", "Advanced Design", "Inventory System", "Customer Accounts", "Analytics Dashboard", "Priority Support"],
      isPopular: false
    }
  ],
  landing: [
    {
      title: "Landing Basic",
      price: "N$ 150",
      image: catLanding,
      features: ["Single Page", "Lead Capture Form", "Fast Loading", "Mobile Optimized"],
      isPopular: false
    },
    {
      title: "Landing Plus",
      price: "N$ 450",
      image: catLanding,
      features: ["Form Integration", "Analytics Setup", "Social Proof Section", "Email Auto-responder", "A/B Testing Ready"],
      isPopular: true
    },
    {
      title: "Landing Premium",
      price: "N$ 600",
      image: catLanding,
      features: ["Conversion Optimization", "Custom Illustrations", "Advanced Tracking", "CRM Integration", "Copywriting Help"],
      isPopular: false
    }
  ]
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    setTimeout(() => scrollToSection("packages"), 100);
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
            <button onClick={() => scrollToSection("solutions")} className="text-sm font-medium hover:text-primary transition-colors">Solutions</button>
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
                  <button onClick={() => scrollToSection("solutions")} className="text-lg font-medium text-left">Solutions</button>
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
              <Button onClick={() => scrollToSection("solutions")} variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 hover:text-white">
                View Solutions
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

      {/* Solutions / Categories Section (Replaces Demos) */}
      <section id="solutions" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Select a category to view our specialized packages. We have the perfect fit for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionCard 
              title="Business Website" 
              category="business"
              image={demoCafe} 
              description="Perfect for cafes, service providers, and local businesses looking to establish a strong online presence."
              isActive={selectedCategory === "business"}
              onClick={() => handleCategorySelect("business")}
            />
            <SolutionCard 
              title="E-Commerce Store" 
              category="ecommerce"
              image={demoShop} 
              description="Start selling online with a powerful, secure, and easy-to-manage online store."
              isActive={selectedCategory === "ecommerce"}
              onClick={() => handleCategorySelect("ecommerce")}
            />
            <SolutionCard 
              title="Landing Page" 
              category="landing"
              image={demoLanding} 
              description="High-converting single pages designed to capture leads and promote specific products."
              isActive={selectedCategory === "landing"}
              onClick={() => handleCategorySelect("landing")}
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-black/20 relative overflow-hidden min-h-[600px] transition-all duration-500">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          
          {!selectedCategory ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
               <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
                <MousePointerClick className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Select a Solution Above</h3>
              <p className="text-muted-foreground">Click on a card in the "Choose Your Solution" section to see pricing packages.</p>
            </div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
                  {selectedCategory === 'business' && "Business Packages"}
                  {selectedCategory === 'ecommerce' && "E-Commerce Packages"}
                  {selectedCategory === 'landing' && "Landing Page Packages"}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Professional development packages tailored to your needs.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {PACKAGES[selectedCategory].map((pkg, idx) => (
                  <PackageCard 
                    key={idx}
                    title={pkg.title}
                    price={pkg.price}
                    image={pkg.image}
                    features={pkg.features}
                    isPopular={pkg.isPopular || false}
                  />
                ))}
              </div>
            </motion.div>
          )}
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
                  <Select defaultValue={selectedCategory || undefined}>
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

function SolutionCard({ title, category, image, description, isActive, onClick }: { title: string, category: string, image: string, description: string, isActive: boolean, onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn(
        "group relative rounded-xl overflow-hidden border bg-card transition-all cursor-pointer",
        isActive ? "border-primary ring-2 ring-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]" : "border-white/10 hover:border-primary/50"
      )}
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className={cn(
          "absolute inset-0 bg-black/50 transition-opacity flex items-center justify-center",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}>
          <Button variant={isActive ? "default" : "secondary"} className="gap-2 pointer-events-none">
            {isActive ? "Selected" : "View Packages"} <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{category}</div>
        <h3 className={cn("text-xl font-bold text-white mb-2 transition-colors", isActive && "text-primary")}>{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function PackageCard({ title, price, features, isPopular, image }: { title: string, price: string, features: string[], isPopular: boolean, image: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl overflow-hidden border bg-card flex flex-col ${isPopular ? 'border-primary shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' : 'border-white/10'}`}
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
          Choose {title}
        </Button>
      </div>
    </motion.div>
  );
}