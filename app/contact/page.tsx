import Image from 'next/image'
import { SkillsComponent } from '@/components/skills'

export default async function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Bio Section */}
      <section className="py-12 md:py-20 bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/raccoon.jpg"
                alt="raccoon"
                width={300}
                height={300}
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Braeden Susi</h1>
              <h2 className="text-xl md:text-2xl mb-6">Gameplay Programmer</h2>
              <p className="text-lg mb-6">
                I have been passionate about game development from a really young age. Not just wanting to make games, but thinking about how games are made. How do the character move and speak in time? How does the game know what I want to do? Why do my Pokémon keep losing this Gym Fight?
              </p>
              <p className="text-lg mb-6">
              Originally from an engineering background, I decided to pivot to a Game Design major to feed my curiosity. I now serve as a Technical Designer for my games, translating designs and ideas into implementable details.
              </p>
              <p className="text-lg">
              I have the most experience with Unity and C# Programming, completing three projects as a Director. However, I’ve come around to Unreal’s Blueprint and general toolset, creating multiple level blockouts and leading a long-term project as Lead Programmer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
};