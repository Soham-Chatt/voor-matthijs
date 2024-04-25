import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Matthijs vs Soham | Sterrenkunde",
  description: "Dashboard voor Soham met allemaal informatie over hoe hij niet/wel zijn BSA/studie Sterrenkunde gaat halen",
};

export default function Soham() {
  return (
    <main className="flex flex-col items-center mx-auto gap-12 sm:gap-24 px-4 my-12 sm:my-24">
      <div>
        <h1 className="mb-4">Matthijs vs Soham</h1>
        <p>
          <Link href="/">Computer Science and Engineering</Link> |&nbsp;
          <Link href="/sterrenkunde">Sterrenkunde</Link> |&nbsp;
          <Link href="/soham">Voor Soham</Link> |
          VS
        </p>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        <div className="dashboard-block">
          <h3>Matthijs</h3>
          <p
            className="animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-got)] before:content-[counter(num)]">
            <span className="sr-only">0</span> EC <span className="text-green-500">gehaald</span></p>
          <p
            className="animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-failed)] before:content-[counter(num)]">
            <span className="sr-only">0</span> EC <span className="text-red-600">gefaald</span></p>
          <p
            className="mb-3 animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-todo)] before:content-[counter(num)]">
            <span className="sr-only">180</span> EC nog te volgen</p>
          <div
            className="flex flex-row h-8 bg-white border border-neutral-500 hover:border-neutral-400 transition">
            <div className="bg-green-500 animate-[progressSterrenkundeGreen_3s_ease-out_forwards]"></div>
            <div className="bg-red-600 animate-[progressSterrenkundeRed_3s_ease-out_forwards]"></div>
          </div>
        </div>
        <div className="dashboard-block">
          <h3>Soham</h3>
          <p
            className="animate-[counterSoham_3s_ease-out_forwards] [counter-set:_num_var(--ec-got)] before:content-[counter(num)]">
            <span className="sr-only">11</span> EC <span className="text-green-500">gehaald</span></p>
          <p
            className="animate-[counterSoham_3s_ease-out_forwards] [counter-set:_num_var(--ec-failed)] before:content-[counter(num)]">
            <span className="sr-only">0</span> EC <span className="text-red-600">gefaald</span></p>
          <p
            className="mb-3 animate-[counterSoham_3s_ease-out_forwards] [counter-set:_num_var(--ec-todo)] before:content-[counter(num)]">
            <span className="sr-only">169</span> EC nog te volgen</p>
          <div
            className="flex flex-row h-8 bg-white border border-neutral-500 hover:border-neutral-400 transition">
            <div className="bg-green-500 animate-[progressSohamGreen_3s_ease-out_forwards]"></div>
            <div className="bg-red-600 animate-[progressSohamRed_3s_ease-out_forwards]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
