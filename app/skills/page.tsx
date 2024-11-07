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
                src="/placeholder.svg?height=300&width=300"
                alt="John Doe"
                width={300}
                height={300}
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">John Doe</h1>
              <h2 className="text-xl md:text-2xl mb-6">Game Developer & Designer</h2>
              <p className="text-lg mb-6">
                With over 8 years of experience in game development, I{"'"}ve had the pleasure of working on a variety of projects,
                from indie mobile games to AAA console titles. My passion lies in creating immersive worlds and engaging gameplay
                experiences that push the boundaries of interactive entertainment.
              </p>
              <p className="text-lg">
                When I{"'"}m not coding or designing, you can find me exploring virtual worlds, participating in game jams,
                or mentoring aspiring game developers. I believe in the power of games to inspire, educate, and bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}  
      <SkillsComponent />
    </div>
  )
};