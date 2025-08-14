import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Review" },
    { name: "description", content: "Provides appropriate feedback for you to get hired!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
          <div className="page-heading">
              <h1>Track your applications and resume ratings</h1>
              <h2>Do all of this with AI-powered feedback.</h2>
          </div>
      </section>

  </main>;
}
