import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Award, Play, CheckCircle } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-300">
              <CheckCircle className="w-4 h-4" />
              North By West Electric - Excellence Since 1999
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Powering
                </span>
                <br />
                <span className="text-white">Tomorrow's</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Leading electrical engineering company delivering cutting-edge power solutions, intelligent automation
                systems, and sustainable energy technologies for the modern world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">Power Systems</h3>
                <p className="text-sm text-slate-400 mt-1">Advanced electrical solutions</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">Safety First</h3>
                <p className="text-sm text-slate-400 mt-1">Certified & compliant</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">25+ Years</h3>
                <p className="text-sm text-slate-400 mt-1">Industry experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl -rotate-12"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Advanced Electrical Engineering Solutions"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Project Success Rate</p>
                      <p className="text-cyan-300 text-sm">Industry Leading Performance</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white">98.5%</p>
                      <p className="text-green-400 text-sm">↗ +2.3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="mt-20 pt-12 border-t border-slate-700/50">
          <p className="text-center text-slate-400 mb-8">Industry Recognition & Certifications</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">ISO 9001</div>
              <div className="text-sm text-slate-400">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-slate-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.2%</div>
              <div className="text-sm text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
