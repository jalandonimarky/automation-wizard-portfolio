
import { Mail, Github, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to automate your processes, integrate your systems, or build innovative solutions? 
            I'm always excited to work on challenging projects that make a real impact.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <Terminal className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Technical Consultation</h3>
              <p className="text-gray-300 leading-relaxed">
                Need help with automation strategies, API integrations, or technical architecture? 
                Let's discuss your project requirements and find the best solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Project Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                Looking for a technical partner for your startup or existing business? 
                I specialize in building scalable automation solutions that grow with you.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
             href="mailto:contact@example.com" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>

            <a 
              href="https://github.com" 
              className="border border-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
          
          <div className="text-gray-400">
            <p className="mb-4">Always eager to learn and grow in this ever-evolving field!</p>
            <p>Let's connect and explore how technology can drive innovation together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
