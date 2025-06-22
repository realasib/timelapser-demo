
import { Camera, Clock, Download, Play, Video, Image, Menu, X, Github, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    company: "TechCorp",
    avatar: "SC",
    rating: 5,
    review: "Timelapser has revolutionized how I document my coding sessions. The Python API is incredibly intuitive and the output quality is outstanding."
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    avatar: "MR",
    rating: 5,
    review: "Perfect for creating demo videos and progress presentations. The automated timelapse generation saves me hours every week."
  },
  {
    name: "Emily Watson",
    role: "UX Designer",
    company: "DesignStudio",
    avatar: "EW",
    rating: 5,
    review: "As a designer, I love how Timelapser captures my creative process. The high-quality output makes my portfolio stand out."
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    company: "CloudTech",
    avatar: "DK",
    rating: 5,
    review: "Excellent tool for documenting deployment processes and system monitoring. The customizable intervals are a game-changer."
  }
];

const Index = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Video className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold text-white">Timelapser</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
                <a href="/documentation">Documentation</a>
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
                <a href="https://github.com/timelapser/timelapser" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-900 border-gray-700 w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-2 mb-6">
                      <Video className="h-6 w-6 text-blue-400" />
                      <span className="text-xl font-bold text-white">Timelapser</span>
                    </div>
                    
                    <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start text-lg py-6" asChild onClick={() => setIsSheetOpen(false)}>
                      <a href="/documentation">Documentation</a>
                    </Button>
                    
                    <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start text-lg py-6" asChild onClick={() => setIsSheetOpen(false)}>
                      <a href="https://github.com/timelapser/timelapser" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-3" />
                        GitHub
                      </a>
                    </Button>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 justify-start text-lg py-6" onClick={() => setIsSheetOpen(false)}>
                      <Download className="h-5 w-5 mr-3" />
                      Download
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 p-4 sm:p-6 rounded-2xl">
                <Camera className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Capture Time in
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block">
              Motion
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your screen recordings into stunning timelapse videos with Timelapser. 
            The Python tool that makes desktop screen capture effortless and beautiful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white w-full sm:w-auto">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need for perfect timelapses
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Professional-grade screen recording with the simplicity of Python
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="border-0 shadow-xl bg-gray-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Smart Time Control</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Intelligent frame rate adjustment and customizable time intervals 
                for perfect timelapse sequences every time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gray-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Image className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">High Quality Output</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Crystal clear recordings with customizable resolution settings. 
                Export in multiple formats optimized for any platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gray-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Video className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Simple Python API</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Clean, intuitive Python interface that gets you recording in minutes. 
                Perfect for automation and scripting workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="bg-gray-950 py-12 sm:py-20 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get started in seconds
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Three lines of Python code. That's all it takes.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto border border-gray-700 overflow-x-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 ml-4 text-xs sm:text-sm">timelapser_example.py</span>
            </div>
            <pre className="text-green-400 font-mono text-sm sm:text-lg leading-relaxed whitespace-pre-wrap">
{`from timelapser import ScreenRecorder

recorder = ScreenRecorder(interval=5, duration=3600)
recorder.start_timelapse("my_desktop_timelapse.mp4")`}
            </pre>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            See what our community says about Timelapser
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-800/70 backdrop-blur-sm border border-gray-700">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                          <p className="text-gray-400 text-sm">{review.role} at {review.company}</p>
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed italic">
                        "{review.review}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to create amazing timelapses?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of developers already using Timelapser
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              pip install timelapser
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto" asChild>
              <a href="https://github.com/timelapser/timelapser" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Video className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              <span className="text-lg sm:text-xl font-semibold">Timelapser</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <a href="/documentation" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Documentation</a>
              <a href="https://github.com/timelapser/timelapser" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 Timelapser. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
