
import { Camera, Clock, Download, Play, Video, Image, Menu, Github, ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Documentation = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ children, language, id }: { children: string; language: string; id: string }) => (
    <div className="relative bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm">{language}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          onClick={() => copyToClipboard(children, id)}
        >
          {copiedCode === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className={`text-sm ${getLanguageColor(language)}`}>
          {children}
        </code>
      </pre>
    </div>
  );

  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case 'python':
        return 'text-green-400';
      case 'bash':
      case 'shell':
        return 'text-blue-400';
      case 'json':
        return 'text-yellow-400';
      case 'yaml':
        return 'text-purple-400';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation - Same as Index */}
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
                <a href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </a>
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
                      <a href="/">
                        <ArrowLeft className="h-5 w-5 mr-3" />
                        Back to Home
                      </a>
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

      {/* Documentation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Timelapser - from installation to advanced usage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#installation" className="block text-gray-300 hover:text-blue-400 transition-colors py-1">Installation</a>
                  <a href="#quickstart" className="block text-gray-300 hover:text-blue-400 transition-colors py-1">Quick Start</a>
                  <a href="#configuration" className="block text-gray-300 hover:text-blue-400 transition-colors py-1">Configuration</a>
                  <a href="#examples" className="block text-gray-300 hover:text-blue-400 transition-colors py-1">Examples</a>
                  <a href="#api" className="block text-gray-300 hover:text-blue-400 transition-colors py-1">API Reference</a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Installation */}
            <section id="installation">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Installation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Install via pip</h3>
                    <CodeBlock language="bash" id="install-pip">
{`pip install timelapser`}
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Install from source</h3>
                    <CodeBlock language="bash" id="install-source">
{`git clone https://github.com/timelapser/timelapser.git
cd timelapser
pip install -e .`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">System Requirements</h3>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                      <li>Python 3.7 or higher</li>
                      <li>FFmpeg (for video processing)</li>
                      <li>Pillow (for image processing)</li>
                      <li>OpenCV (for screen capture)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quick Start */}
            <section id="quickstart">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Quick Start</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Basic Usage</h3>
                    <CodeBlock language="python" id="basic-usage">
{`from timelapser import ScreenRecorder

# Create a recorder instance
recorder = ScreenRecorder(
    interval=5,        # Capture screenshot every 5 seconds
    duration=3600,     # Record for 1 hour
    output_dir="./recordings"
)

# Start recording
recorder.start_timelapse("my_project.mp4")`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">With Custom Settings</h3>
                    <CodeBlock language="python" id="custom-settings">
{`from timelapser import ScreenRecorder

recorder = ScreenRecorder(
    interval=2,          # More frequent captures
    duration=7200,       # 2 hours
    resolution=(1920, 1080),  # Full HD
    fps=30,              # Output video FPS
    quality="high"       # Video quality
)

recorder.start_timelapse("high_quality_timelapse.mp4")`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Configuration */}
            <section id="configuration">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Configuration File</h3>
                    <p className="text-gray-300 mb-3">Create a <code className="bg-gray-700 px-2 py-1 rounded">timelapser.yaml</code> file:</p>
                    <CodeBlock language="yaml" id="config-yaml">
{`recording:
  interval: 5
  duration: 3600
  resolution: [1920, 1080]
  
video:
  fps: 24
  quality: "medium"
  format: "mp4"
  
output:
  directory: "./recordings"
  filename_template: "{date}_{time}_timelapse.{format}"`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Environment Variables</h3>
                    <CodeBlock language="bash" id="env-vars">
{`export TIMELAPSER_OUTPUT_DIR="/path/to/recordings"
export TIMELAPSER_DEFAULT_INTERVAL=5
export TIMELAPSER_DEFAULT_QUALITY="high"`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Examples */}
            <section id="examples">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Coding Session Timelapse</h3>
                    <CodeBlock language="python" id="coding-example">
{`from timelapser import ScreenRecorder
import datetime

# Record a coding session
recorder = ScreenRecorder(
    interval=10,  # Every 10 seconds
    duration=14400,  # 4 hours
    region=(0, 0, 1920, 1080)  # Full screen
)

today = datetime.date.today()
filename = f"coding_session_{today.strftime('%Y%m%d')}.mp4"
recorder.start_timelapse(filename)`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Design Process Capture</h3>
                    <CodeBlock language="python" id="design-example">
{`from timelapser import ScreenRecorder

# Capture design work with higher frequency
recorder = ScreenRecorder(
    interval=3,      # Every 3 seconds for smooth transitions
    duration=7200,   # 2 hours
    fps=60,          # Smooth playback
    quality="high"
)

recorder.start_timelapse("design_process.mp4")`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Automated Daily Recording</h3>
                    <CodeBlock language="python" id="automated-example">
{`import schedule
import time
from timelapser import ScreenRecorder

def start_daily_recording():
    recorder = ScreenRecorder(
        interval=30,     # Every 30 seconds
        duration=28800,  # 8 hours work day
    )
    
    import datetime
    today = datetime.date.today()
    filename = f"workday_{today.strftime('%Y%m%d')}.mp4"
    
    recorder.start_timelapse(filename)

# Schedule daily recording at 9 AM
schedule.every().day.at("09:00").do(start_daily_recording)

while True:
    schedule.run_pending()
    time.sleep(60)`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* API Reference */}
            <section id="api">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">API Reference</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">ScreenRecorder Class</h3>
                    <CodeBlock language="python" id="api-class">
{`class ScreenRecorder:
    def __init__(
        self,
        interval: int = 5,
        duration: int = 3600,
        resolution: tuple = None,
        fps: int = 24,
        quality: str = "medium",
        output_dir: str = "./recordings",
        region: tuple = None
    ):
        """
        Initialize the ScreenRecorder.
        
        Args:
            interval: Seconds between screenshots
            duration: Total recording duration in seconds
            resolution: Output video resolution (width, height)
            fps: Output video frames per second
            quality: Video quality ("low", "medium", "high")
            output_dir: Directory to save recordings
            region: Screen region to capture (x, y, width, height)
        """
    
    def start_timelapse(self, filename: str) -> None:
        """Start the timelapse recording."""
    
    def stop_recording(self) -> None:
        """Stop the current recording."""
    
    def pause_recording(self) -> None:
        """Pause the current recording."""
    
    def resume_recording(self) -> None:
        """Resume a paused recording."""`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Utility Functions</h3>
                    <CodeBlock language="python" id="api-utils">
{`from timelapser.utils import (
    get_screen_resolution,
    compress_video,
    convert_format
)

# Get current screen resolution
width, height = get_screen_resolution()

# Compress an existing video
compress_video("input.mp4", "output.mp4", quality="medium")

# Convert video format
convert_format("input.mp4", "output.avi")`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
