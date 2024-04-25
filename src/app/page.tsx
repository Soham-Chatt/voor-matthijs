import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto gap-12 sm:gap-24 px-4 my-12 sm:my-24">
      <div>
        <h1 className="mb-4">Voor Matthijs</h1>
        <p>
          Computer Science and Engineering |&nbsp;
          <Link href="/sterrenkunde">Sterrenkunde</Link> |&nbsp;
          <Link href="/soham">Voor Soham</Link> |&nbsp;
          <Link href="/vs">VS</Link>
        </p>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        <div className="dashboard-block">
          <h3>Kans op BSA halen</h3>
          <p
            className="text-5xl text-green-500 animate-[percentageCounter_3s_ease-out_forwards] [counter-set:_num_var(--percentage)] before:content-[counter(num)]">
            <span className="sr-only">80</span>%</p>
          <div></div>
        </div>

        <div className="dashboard-block">
          <h3>Verwachte afstudeerdatum</h3>
          <p
            className="text-2xl ">April <span className="animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--year)] before:content-[counter(num)]">
            <span className="sr-only">2027</span></span></p>
          <div></div>
        </div>

        <div className="dashboard-block">
          <h3>EC overzicht</h3>
          <p
            className="animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--ec-got)] before:content-[counter(num)]">
            <span className="sr-only">15</span> EC <span className="text-green-500">gehaald</span></p>
          <p
            className="animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--ec-failed)] before:content-[counter(num)]">
            <span className="sr-only">15</span> EC <span className="text-red-600">gefaald</span></p>
          <p
            className="mb-3 animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--ec-todo)] before:content-[counter(num)]">
            <span className="sr-only">150</span> EC nog te volgen</p>
          <div className="flex flex-row h-8 bg-white mx-4 border border-neutral-500 hover:border-neutral-400 transition">
            <div className="bg-green-500 animate-[progressGreen_3s_ease-out_forwards]"></div>
            <div className="bg-red-600 animate-[progressRed_3s_ease-out_forwards]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-full">
      <h2 className="mb-6">Alle vakken</h2>
        <div className="bg-neutral-900 rounded-lg p-4 overflow-x-auto border border-neutral-700 hover:border-neutral-600 transition">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Afkorting</th>
                <th className="hidden-cell">Naam</th>
                <th>EC</th>
                <th>Behaald</th>
                <th>(Verwachte) behaaldatum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CSE1100</td>
                <td>OOP</td>
                <td className="hidden-cell">Object Oriented Programming</td>
                <td>5</td>
                <td>✅</td>
                <td>Q1 23/24</td>
              </tr>
              <tr>
                <td>CSE1300</td>
                <td>RL</td>
                <td className="hidden-cell">Reasoning & Logic</td>
                <td>5</td>
                <td>✅</td>
                <td>Q1 23/24</td>
              </tr>
              <tr>
                <td>CSE1400</td>
                <td>CO</td>
                <td className="hidden-cell">Computer Organisation</td>
                <td>5</td>
                <td>✅</td>
                <td>Q1 23/24</td>
              </tr>

              <tr>
                <td>CSE1200</td>
                <td>CALC</td>
                <td className="hidden-cell">Calculus</td>
                <td>5</td>
                <td>❌</td>
                <td className="text-red-600">Q2 24/25</td>
              </tr>
              <tr>
                <td>CSE1305</td>
                <td>ADS</td>
                <td className="hidden-cell">Algorithms and Data Structures</td>
                <td>5</td>
                <td>❌</td>
                <td className="text-red-600">Q3 24/25</td>
              </tr>
              <tr>
                <td>CSE1500</td>
                <td>WDT</td>
                <td className="hidden-cell">Web- & Database Technology</td>
                <td>5</td>
                <td>❌</td>
                <td className="text-yellow-400">Q3 23/24</td>
              </tr>

              <tr>
                <td>CSE1205</td>
                <td>LA</td>
                <td className="hidden-cell">Linear Algebra</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-yellow-400">Q4 23/24</td>
              </tr>
              <tr>
                <td>CSE1105</td>
                <td>OOPP</td>
                <td className="hidden-cell">Object Oriented Programming Project</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q3 23/24</td>
              </tr>
              <tr>
                <td>CSE1505</td>
                <td>IDM</td>
                <td className="hidden-cell">Information and Data Management</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q3 23/24</td>
              </tr>

              <tr>
                <td>CSE1210</td>
                <td>PTS</td>
                <td className="hidden-cell">Probability Theory and Statistics</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q4 23/24</td>
              </tr>
              <tr>
                <td>CSE1110</td>
                <td>SQT</td>
                <td className="hidden-cell">Software Quality and Testing</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q4 23/24</td>
              </tr>
              <tr>
                <td>CSE1405</td>
                <td>CN</td>
                <td className="hidden-cell">Computer Networks</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q4 23/24</td>
              </tr>

              <tr>
                <td className="col-span-5">&nbsp;</td>
              </tr>

              <tr>
                <td>CSE2115</td>
                <td>SEM</td>
                <td className="hidden-cell">Software Engineering Methods</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q1 24/25</td>
              </tr>
              <tr>
                <td>CSE2510</td>
                <td>ML</td>
                <td className="hidden-cell">Machine Learning</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q1 25/26</td>
              </tr>
              <tr>
                <td>CSE2???</td>
                <td>VC A</td>
                <td className="hidden-cell">Variant Course A</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q1 25/26</td>
              </tr>

              <tr>
                <td>CSE2310</td>
                <td>AD</td>
                <td className="hidden-cell">Algorithm Design</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q2 25/26</td>
              </tr>
              <tr>
                <td>CSE2215</td>
                <td>CG</td>
                <td className="hidden-cell">Computer Graphics</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q2 25/26</td>
              </tr>
              <tr>
                <td>CSE2???</td>
                <td>VC B</td>
                <td className="hidden-cell">Variant Course B</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q2 25/26</td>
              </tr>

              <tr>
                <td>CSE2315</td>
                <td>ACC</td>
                <td className="hidden-cell">Automata, Computability and Complexity</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q3 25/26</td>
              </tr>
              <tr>
                <td>CSE2120</td>
                <td>CPL</td>
                <td className="hidden-cell">Concepts of Programming Languages</td>
                <td>5</td>
                <td>⬜</td>
                <td>Q3 24/25</td>
              </tr>
              <tr>
                <td>CSE2???</td>
                <td>VC C</td>
                <td className="hidden-cell">Variant Course C</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q3 25/26</td>
              </tr>

              <tr>
                <td>CSE2000</td>
                <td>SP</td>
                <td className="hidden-cell">Software Project</td>
                <td>15</td>
                <td>⬜</td>
                <td>Q4 24/25</td>
              </tr>

              <tr>
                <td className="col-span-5">&nbsp;</td>
              </tr>

              <tr>
                <td>???</td>
                <td>Minor</td>
                <td className="hidden-cell">Minor</td>
                <td>30</td>
                <td>⬜</td>
                <td className="text-red-600">Q2 26/27</td>
              </tr>

              <tr>
                <td>CSE3???</td>
                <td>Elec 1</td>
                <td className="hidden-cell">Elective 1</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q3 26/27</td>
              </tr>
              <tr>
                <td>CSE3???</td>
                <td>Elec 2</td>
                <td className="hidden-cell">Elective 2</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q3 26/27</td>
              </tr>
              <tr>
                <td>CSE3???</td>
                <td>Elec 3</td>
                <td className="hidden-cell">Elective 3</td>
                <td>5</td>
                <td>⬜</td>
                <td className="text-red-600">Q3 26/27</td>
              </tr>

              <tr>
                <td>CSE3000</td>
                <td>RP</td>
                <td className="hidden-cell">Research Project</td>
                <td>15</td>
                <td>⬜</td>
                <td>Q4 25/26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
