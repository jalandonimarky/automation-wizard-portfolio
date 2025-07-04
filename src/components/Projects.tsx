
import { Github, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ticketing System",
      description: "A centralized helpdesk platform built to manage and prioritize internal and external support requests. Integrated with Slack and email for notifications, plus automated assignment logic based on ticket categories.",
      tech: ["Python", "API Integration", "Slack API", "Email Automation"],
      category: "Platform Development"
    },
    {
      title: "AI Robocalling Automation",
      description: "Developed a smart outbound robocall system using AI voice synthesis and CRM integration. Automates follow-ups, appointment confirmations, and client outreach while collecting call responses in real-time.",
      tech: ["AI Integration", "Voice Synthesis", "CRM APIs", "Real-time Processing"],
      category: "AI Automation"
    },
    {
      title: "Onboarding & Offboarding Automation",
      description: "Streamlined employee onboarding and offboarding across multiple platforms like Google Workspace, Azure AD, and various CRMs using Zapier and Make.com. Reduced manual workload by 70%.",
      tech: ["Zapier", "Make.com", "Google Workspace", "Azure AD"],
      category: "Process Automation"
    },
    {
      title: "CRM Sync & API Scripting",
      description: "Wrote custom Python and JavaScript scripts to sync data between HubSpot, Salesforce, and Zoho CRM. Included webhook listeners and scheduled updates for seamless integration.",
      tech: ["Python", "JavaScript", "HubSpot API", "Salesforce API", "Webhooks"],
      category: "API Development"
    },
    {
      title: "Selenium Test Automation",
      description: "Created robust Selenium-based test frameworks for internal tools and client-facing apps. Included cross-browser testing and CI/CD pipeline integration for full automation.",
      tech: ["Selenium", "CI/CD", "Cross-browser Testing", "Test Automation"],
      category: "Quality Assurance"
    },
    {
      title: "Voice-to-Text Notetaker Bot",
      description: "Discord bot built in Python that joins voice channels, records user speech, transcribes with Whisper AI, and summarizes with Mistral LLM. Useful for remote meetings and gaming sessions.",
      tech: ["Python", "Discord API", "Whisper AI", "Mistral LLM"],
      category: "AI Integration"
    },
    {
      title: "Web Scraping and Analytics Dashboard",
      description: "Scraper system using Python and BeautifulSoup to gather market intelligence, clean data, and feed into a modern dashboard (Chart.js + Flask) for business insights.",
      tech: ["Python", "BeautifulSoup", "Flask", "Chart.js", "Data Analytics"],
      category: "Data Processing"
    },
    {
      title: "CI/CD Workflow Engine",
      description: "Developed custom workflows to automate build, test, and deployment for internal tools using GitHub Actions and shell scripting. Reduced deployment time by over 80%.",
      tech: ["GitHub Actions", "Shell Scripting", "CI/CD", "DevOps"],
      category: "DevOps"
    },
    {
      title: "AI-Powered Email Summarizer",
      description: "Automated email parsing and summarization tool integrated into Outlook via Power Automate. Used OpenAI APIs to convert long emails into bullet summaries with action points.",
      tech: ["Power Automate", "OpenAI API", "Outlook Integration", "NLP"],
      category: "AI Automation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of automation solutions, API integrations, and innovative tools I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Code</span>
                </button>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <Link className="w-5 h-5" />
                  <span className="text-sm font-medium">Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
