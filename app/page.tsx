import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-lg w-full px-8 py-4 bg-white shadow-xl shadow-blue-500/50">
        <nav className="flex justify-center space-x-12 items-center mt-4 relative">
          {/* Icon */}
          <Avatar className=" h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>

          {/* list */}
          <ul className="rounded-full py-2 px-4 flex gap-4 font-semibold text-sm bg-blue-500 shadow-xl shadow-blue-500/50 text-white">
            <li>Home</li>
            <li>Quotes</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* divider */}
        <div className="divide-y-1 divide-gray-300">
          <header className="grid grid-cols-2 gap-4 py-20">
            {/* Introduction */}
            <div className="flex flex-col space-y-3">
              <div>
                <h2 className="text-2xl font-mono font-semibold text-blue-500">
                  Hi I'm
                </h2>
                <h1 className="text-5xl text-blue-500 font-bold">
                  Lawrence Jeremy Poliquit
                </h1>
              </div>
              <h3 className="text-neutral-400 font-mono text-sm font-arial">
                Software developer with a focus on client-side web development.
                I specialize in building responsive, user-friendly web
                applications that combine solid functionality with polished
                design.
              </h3>
              {/* Social Links */}
              <div className="flex ms-1 items-center space-x-6 mt-4">
                {/* Facebook */}
                <Avatar>
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" />
                </Avatar>
                {/* Instagram */}
                <Avatar>
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                </Avatar>
                {/* Tiktok */}
                <Avatar>
                  <AvatarImage src="https://www.citypng.com/public/uploads/preview/tik-tok-logo-transparent-square-701751694793273qftyarldbx.png" />
                </Avatar>
                {/* Linkedin */}
                <Avatar>
                  <AvatarImage src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" />
                </Avatar>
              </div>
            </div>

            {/* Images */}
            <div>
              <Image
                src="/images/profile.jpeg"
                height={500}
                width={500}
                className="rounded-4xl"
                alt="Profile Picture"
              />
            </div>
          </header>

          {/* Tools & Technology */}
          <section className="py-20">
            <h3 className="font-mono text-lg mb-4 text-neutral-400">
              Tools & Technology
            </h3>
            <div className="sm:grid grid-cols-3 place-items-stretch gap-6 w-full">
              {/* React */}
              <Alert className="shadow-lg shadow-blue-500/50">
                <AlertTitle>React TS</AlertTitle>
                <AlertDescription>
                  React is my go-to library for crafting fast and interactive
                  user interfaces.
                </AlertDescription>
              </Alert>
              {/* Tailwind */}
              <Alert className="shadow-lg shadow-blue-500/50">
                <AlertTitle>Tailwind</AlertTitle>
                <AlertDescription>
                  I use Tailwind to quickly build modern and responsive UIs with
                  utility-first styling.
                </AlertDescription>
              </Alert>
              {/* Shadcn */}
              <Alert className="shadow-lg shadow-blue-500/50">
                <AlertTitle>Shadcn UI</AlertTitle>
                <AlertDescription>
                  I use shadcn/ui to quickly build elegant, accessible UI
                  components for my React apps.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Articles */}
          <div className="py-20">
            <h3 className="font-mono text-lg text-slate-400 mb-4">Quotes</h3>
            <div className="flex flex-col gap-6">
              <Alert>
                <AlertTitle>
                  "The only thing we have to fear is fear itself."
                </AlertTitle>
                <AlertDescription className="italic">Franklin D. Roosevelt</AlertDescription>
              </Alert>

              <Alert>
                <AlertTitle>
                  "In the end, we will remember not the words of our enemies, but
                  the silence of our friends."
                </AlertTitle>
                <AlertDescription className="italic">Martin Luther King Jr.</AlertDescription>
              </Alert>

              <Alert>
                <AlertTitle>
                  "The only thing we have to fear is fear itself."
                </AlertTitle>
                <AlertDescription className="italic">Franklin D. Roosevelt</AlertDescription>
              </Alert>

              <Alert>
                <AlertTitle>
                  "To be yourself in a world that is constantly trying to make
                  you something else is the greatest accomplishment."
                </AlertTitle>
                <AlertDescription className="italic">Ralph Waldo Emerson</AlertDescription>
              </Alert>

              <Alert>
                <AlertTitle>
                  "I have not failed. I've just found 10,000 ways that won't
                  work."
                </AlertTitle>
                <AlertDescription className="italic">Thomas Edison</AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
