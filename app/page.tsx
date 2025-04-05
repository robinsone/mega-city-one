import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Building2, Users, AlertTriangle, ChevronRight, Skull } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.jpg?height=1080&width=1920"
            alt="Mega-City One Skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-red-600 mr-2" />
            <span className="text-xl font-bold tracking-wider">MEGA-CITY ONE</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#sectors" className="hover:text-red-500 transition-colors">
              Sectors
            </Link>
            <Link href="#justice" className="hover:text-red-500 transition-colors">
              Justice Dept.
            </Link>
            <Link href="#citizens" className="hover:text-red-500 transition-colors">
              Citizens
            </Link>
          </div>
          <Button variant="destructive" className="hidden md:block">
            EMERGENCY
          </Button>
        </nav>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <Badge variant="outline" className="mb-4 text-red-500 border-red-500">
            POPULATION: 800 MILLION
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            WELCOME TO <span className="text-red-600">MEGA-CITY ONE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The sprawling metropolis stretching from Boston to Washington D.C. Under the watchful eye of the Judges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive">
              REPORT CRIME
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
              CITIZEN SERVICES
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <Link href="#about" className="animate-bounce">
            <ChevronRight className="h-8 w-8 rotate-90 text-red-500" />
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ESTABLISHED 2070
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">THE LAST MEGALOPOLIS</h2>
            <p className="text-lg text-gray-400">
              After the Atomic Wars, Mega-City One emerged as one of the few bastions of human civilization. A sprawling
              urban nightmare where Justice is swift and final.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <Building2 className="h-10 w-10 text-red-500 mb-2" />
                <CardTitle>800 LEVELS HIGH</CardTitle>
                <CardDescription className="text-gray-400">
                  Mega-blocks tower into the sky, housing tens of thousands of citizens each
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The city's architecture is a testament to humanity's resilience and technological prowess, with
                  structures reaching unprecedented heights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <Users className="h-10 w-10 text-red-500 mb-2" />
                <CardTitle>95% UNEMPLOYMENT</CardTitle>
                <CardDescription className="text-gray-400">
                  With automation handling most jobs, citizens find other ways to occupy their time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The social fabric of Mega-City One is strained by massive unemployment, leading to rampant crime and
                  the rise of bizarre subcultures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-red-500 mb-2" />
                <CardTitle>17,000 CRIMES PER DAY</CardTitle>
                <CardDescription className="text-gray-400">
                  From jaywalking to murder, the Judges are always busy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Crime is a constant in the city, with everything from petty infractions to major felonies keeping the
                  Justice Department working around the clock.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Justice Department Section */}
      <section id="justice" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge variant="outline" className="mb-4 text-red-500 border-red-500">
                LAW ENFORCEMENT
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">THE JUDGES</h2>
              <p className="text-lg text-gray-400 mb-6">
                In Mega-City One, the Judges are the law. They act as police, jury, and executioner, dispensing instant
                justice in a city teetering on the edge of chaos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded mr-4 mt-1">
                    <Skull className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Judge, Jury, Executioner</h3>
                    <p className="text-gray-400">
                      Empowered to arrest, convict, sentence, and execute criminals on the spot
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded mr-4 mt-1">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Elite Training</h3>
                    <p className="text-gray-400">15 years of intensive training at the Academy of Law</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded mr-4 mt-1">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Zero Tolerance</h3>
                    <p className="text-gray-400">No crime is too small for the attention of the Judges</p>
                  </div>
                </div>
              </div>
              <Button variant="destructive" className="mt-8">
                LEARN ABOUT THE LAW
              </Button>
            </div>
            <div className="md:w-1/2 relative h-[500px]">
              <Image
                src="/Dredd-Landing-Social.png?height=800&width=600"
                alt="Judge Dredd"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">JUDGE DREDD</h3>
                <p className="text-gray-300">The most feared and respected Judge in Mega-City One</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">
              CITY GEOGRAPHY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">SECTORS OF MEGA-CITY ONE</h2>
            <p className="text-lg text-gray-400">
              The city is divided into numbered sectors, each with its own distinct character and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 13, 27, 45, 119, 301].map((sector) => (
              <Card key={sector} className="bg-zinc-800 border-zinc-700 hover:border-red-600 transition-colors">
                <CardHeader>
                  <CardTitle>SECTOR {sector}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Home to {Math.floor(Math.random() * 100) + 10} million citizens and
                    {Math.floor(Math.random() * 100) + 50} mega-blocks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-900/20 p-0">
                    Sector details <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
              VIEW ALL SECTORS
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">CITIZEN COMPLIANCE IS MANDATORY</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Remember, the Judges are watching. Report suspicious activity and stay within the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive">
              REPORT A CRIME
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              CITIZEN REGISTRATION
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Shield className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold tracking-wider">MEGA-CITY ONE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                Sectors
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                Justice Dept.
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                Citizens
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                Emergency
              </Link>
            </div>
          </div>
          <Separator className="bg-zinc-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
            <p>© 2099 Justice Department of Mega-City One. All rights reserved.</p>
            <p>Remember: "I AM THE LAW"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

