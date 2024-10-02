import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-3xl bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-5xl font-medium tracking-tight">About Me</h1>

      <div className="prose prose-invert">
        <p>
          Hello! I’m Jibril, a passionate game developer with a deep love for
          creating immersive and engaging gaming experiences. I started my
          journey in video game development at the age of 11, driven by my
          fascination with how games are built and how they can tell compelling
          stories. Over the years, I have developed my skills through various{" "}
          <a href="/projects">projects</a>, focusing on coding, design, and game
          mechanics.
        </p>
        <p>
          As a game developer, I aim to craft unique experiences that captivate
          players and push the boundaries of gameplay. I'm constantly learning
          and experimenting to improve my work and stay on the cutting edge of
          the gaming industry.
        </p>

        <a href="mailto:JibrilElAzouzi@outlook.com">Let's connect !</a>

        <h2>My passions</h2>
        <p>
          Outside of programming, I enjoy listening to music, which keeps me
          inspired, staying active through sports like jogging or working out,
          and diving into <a href="#">books</a>, especially biographies and tutorial guides.
          These hobbies help me maintain balance and fuel my creativity in
          everyday life.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Skills Acquired :</strong>
            <ul>
              <li>
                <strong>Lua :</strong> Lightweight scripting for games.
              </li>
              <li>
                <strong>Git :</strong> Version control system for code.
              </li>
              <li>
                <strong>Roblox Studio :</strong> Game creation platform for
                Roblox.
              </li>
              <li>
                <strong>Algorithm Design :</strong>Ability to design efficient
                algorithms to solve complex problems, optimizing code
                performance.
              </li>
              <li>
                <strong>Creativity : </strong>Ability to propose original and
                innovative solutions, particularly in the development of video
                games and complex projects.
              </li>
            </ul>
          </li>
          <li>
            <strong>Learning Skills:</strong>
            <ul>
              <li>
                <strong>C++ :</strong> Language for performance-critical
                applications.
              </li>
              <li>
                <strong>Vulkan :</strong> Low-level graphics API.
              </li>
              <li>
                <strong>SDL :</strong> Multimedia library for game development.
              </li>
              <li>
                <strong>Next.js :</strong> Design of intuitive and attractive
                user interfaces, with particular attention to user experience.
              </li>
              <li>
                <strong>UI/UX Design :</strong> React framework for
                server-rendered apps.
              </li>
            </ul>
            <p>
              <a href="/blog/tech-use">Click here</a> to view full list of tech i use.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
