import { Code, Database, Settings, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: "API Development", description: "Python, JavaScript, REST APIs" },
    { icon: Settings, title: "Automation", description: "CI/CD, Selenium, Zapier, Make.com" },
    { icon: Database, title: "CRM Integration", description: "HubSpot, Salesforce, Zoho" },
    { icon: Users, title: "Project Management", description: "Startup experience, Team leadership" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" />

          <img
            src="https://i.ibb.co/fzq0dpxL/MARKY-new.png"
            alt="Marky Jalandoni"
            className="w-48 h-48 rounded-full border-4 border-purple-400 shadow-2xl object-cover mx-auto mb-8 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi there! I'm a passionate Technical Engineer and Automation Specialist with a knack for
              API scripting, Python, and JavaScript. Over the years, I've had the privilege of working
              in helpdesk and technical support roles, ultimately managing projects for startups.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I began my career in helpdesk support, where I learned how technology impacts people in their daily work.
              That experience gave me a strong foundation in troubleshooting, user empathy, and practical thinking.
              It also helped me understand how different systems interact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Over time, I shifted toward backend development and process automation. I’ve worked on building
              chatbots, creating backend workflows, and linking data across tools. I’m also well-versed in CRM platforms,
              helping teams simplify onboarding and offboarding processes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My projects have included integrations and automation using tools like Zapier, Make.com, Decisions.com,
              Activepieces, n8n, Latenode, and Power Automate. For testing and reliability, I use Selenium and
              occasionally Cypress or Playwright to build quality checks into the process. I also manage version control
              and deployment workflows using GitHub, GitLab, and occasionally Heroku or Azure when needed.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
            <div className="space-y-4">

              {/* Programming */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Python & JavaScript Development</span>
              </div>

              {/* Automation & Integration */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">API Integration & Automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">CI/CD Pipeline Development</span>
              </div>

              {/* Platforms */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">CRM Platform Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Low-Code/No-Code (Zapier, Make, Decisions, etc.)</span>
              </div>

              {/* QA & Monitoring */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Test Automation with Selenium</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">UI Testing Tools (Cypress, Playwright)</span>
              </div>

              {/* DevOps & Tools */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Version Control (Git, GitHub, GitLab)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Cloud & Infra (Azure, GCP, Heroku)</span>
              </div>

            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-300">
                <skill.icon className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
