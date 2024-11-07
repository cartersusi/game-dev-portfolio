import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/content/projects';

export const SmallProjects = () => {
    return (
        <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export const LargeProjects = () => {
    return (
        <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h1>
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={600} 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <Link href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};