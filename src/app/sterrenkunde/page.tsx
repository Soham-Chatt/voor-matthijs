import Link from "next/link";

export default function Sterrenkunde() {
  return (
    <main className="flex flex-col items-center mx-auto gap-12 sm:gap-24 px-4 my-12 sm:my-24">
      <div>
        <h1 className="mb-4">Voor Matthijs</h1>
        <p><Link href="/" className="text-neutral-600 hover:text-neutral-400 transition">Computer Science and Engineering</Link> | Sterrenkunde</p>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        <div className="dashboard-block">
          <h3>Kans op BSA halen</h3>
          <p
            className="text-5xl text-green-500 animate-[percentageCounterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--percentage)] before:content-[counter(num)]">
            <span className="sr-only">33</span>%</p>
          <div></div>
        </div>

        <div className="dashboard-block">
          <h3>Verwachte afstudeerdatum</h3>
          <p
            className="text-2xl ">Februari <span className="animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--year)] before:content-[counter(num)]">
            <span className="sr-only">2027</span></span></p>
          <div></div>
        </div>

        <div className="dashboard-block">
          <h3>EC overzicht</h3>
          <p
            className="animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-got)] before:content-[counter(num)]">
            <span className="sr-only">0</span> EC <span className="text-green-500">gehaald</span></p>
          <p
            className="animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-failed)] before:content-[counter(num)]">
            <span className="sr-only">0</span> EC <span className="text-red-600">gefaald</span></p>
          <p
            className="mb-3 animate-[counterSterrenkunde_3s_ease-out_forwards] [counter-set:_num_var(--ec-todo)] before:content-[counter(num)]">
            <span className="sr-only">180</span> EC nog te volgen</p>
          <div className="flex flex-row h-8 bg-white mx-4 border border-neutral-500 hover:border-neutral-400 transition">
            <div className="bg-green-500 animate-[progressSterrenkunde_3s_ease-out_forwards]"></div>
            <div className="bg-red-600 animate-[progressSterrenkunde_3s_ease-out_forwards]"></div>
          </div>
          <div></div>
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
              <td>4081AN1NAY</td>
              <td>AN1</td>
              <td className="hidden-cell">Analyse 1 NA</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 24/25</td>
            </tr>
            <tr>
              <td>4071ASTROY</td>
              <td>ASTRO</td>
              <td className="hidden-cell">Inleiding Astrofysica</td>
              <td>4</td>
              <td>⬜</td>
              <td>Q2 24/25</td>
            </tr>
            <tr>
              <td>4061IMN06Y</td>
              <td>IMN</td>
              <td className="hidden-cell">Introductie Moderne Natuurkunde</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 24/25</td>
            </tr>
            <tr>
              <td>4081LA1NAY</td>
              <td>LA1</td>
              <td className="hidden-cell">Lineaire Algebra 1 NA</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 24/25</td>
            </tr>
            <tr>
              <td>4031PRGR4Y</td>
              <td>PRGR</td>
              <td className="hidden-cell">Programmeermethoden NA</td>
              <td>4</td>
              <td>⬜</td>
              <td>Q2 24/25</td>
            </tr>

            <tr>
              <td>4061OPTCAY</td>
              <td>OPT</td>
              <td className="hidden-cell">Optica</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q3 24/25</td>
            </tr>
            <tr>
              <td>4061EXNA3Y</td>
              <td>EXNA</td>
              <td className="hidden-cell">Experimentele Natuurkunde deel I</td>
              <td>3</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>

            <tr>
              <td>4081AN2NAY</td>
              <td>AN2</td>
              <td className="hidden-cell">Analyse 2 NA</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>
            <tr>
              <td>4061ELMGVY</td>
              <td>EMV</td>
              <td className="hidden-cell">Elektrische en Magnetische Velden</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>
            <tr>
              <td>4061KLASAY</td>
              <td>KMA</td>
              <td className="hidden-cell">Klassieke Mechanica A</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>
            <tr>
              <td>4071PLST3Y</td>
              <td>PLST</td>
              <td className="hidden-cell">Planetenstelsels</td>
              <td>3</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>
            <tr>
              <td>4071PRST6Y</td>
              <td>PS</td>
              <td className="hidden-cell">Praktische Sterrenkunde</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>
            <tr>
              <td>4601PC11CY</td>
              <td>PC</td>
              <td className="hidden-cell">Presenteren en Communiceren</td>
              <td>1</td>
              <td>⬜</td>
              <td>Q4 24/25</td>
            </tr>

            <tr>
              <td className="col-span-5">&nbsp;</td>
            </tr>

            <tr>
              <td>4082AN3NAY</td>
              <td>AN3</td>
              <td className="hidden-cell">Analyse 3 NA</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>
            <tr>
              <td>4062CLMB3Y</td>
              <td>KMB</td>
              <td className="hidden-cell">Classical Mechanics B</td>
              <td>3</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>
            <tr>
              <td>4082LA2NAY</td>
              <td>LA2</td>
              <td className="hidden-cell">Lineaire Algebra 2 NA</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>
            <tr>
              <td>4062QUM16Y</td>
              <td>QM1</td>
              <td className="hidden-cell">Quantum Mechanics 1</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>
            <tr>
              <td>4072STAR5Y</td>
              <td>STAR</td>
              <td className="hidden-cell">Stars</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>
            <tr>
              <td>4062STAF1Y</td>
              <td>SP1</td>
              <td className="hidden-cell">Statistical Physics 1</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q2 25/26</td>
            </tr>

            <tr>
              <td>4072STRPRY</td>
              <td>ALOP</td>
              <td className="hidden-cell">Astronomy Lab and Observing Project</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>

            <tr>
              <td>4072ASOT5Y</td>
              <td>AOT</td>
              <td className="hidden-cell">Astronomical Observing Techniques</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4062KLSELY</td>
              <td>CE</td>
              <td className="hidden-cell">Classical Electrodynamics</td>
              <td>4</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4072GALC5Y</td>
              <td>GC</td>
              <td className="hidden-cell">Galaxies and Cosmology</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4072MARC1Y</td>
              <td>MAR</td>
              <td className="hidden-cell">Modern Astronomical Research</td>
              <td>1</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4062MAPR1Y</td>
              <td>MAPR</td>
              <td className="hidden-cell">Modern Astronomical and Physics Research</td>
              <td>1</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4062QUME2Y</td>
              <td>QM2</td>
              <td className="hidden-cell">Quantum Mechanics 2</td>
              <td>5</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>
            <tr>
              <td>4072STADAY</td>
              <td>SDA</td>
              <td className="hidden-cell">Statistics and Data Analysis</td>
              <td>2</td>
              <td>⬜</td>
              <td>Q4 25/26</td>
            </tr>

            <tr>
              <td className="col-span-5">&nbsp;</td>
            </tr>

            <tr>
              <td>???</td>
              <td>Keuzeruimte</td>
              <td className="hidden-cell">Keuzeruimte</td>
              <td>30</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>

            <tr>
              <td>4072BRP18Y</td>
              <td>BPR</td>
              <td className="hidden-cell">Bachelor Project: Research (S)</td>
              <td>18</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>
            <tr>
              <td>4072RAP63Y</td>
              <td>RP</td>
              <td className="hidden-cell">Radiative Processes</td>
              <td>6</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>
            <tr>
              <td>4072RSSI2Y</td>
              <td>RSSI</td>
              <td className="hidden-cell">Research Skills and Scientific Integrity (2EC)</td>
              <td>2</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>
            <tr>
              <td>4072BPRT3Y</td>
              <td>BPT</td>
              <td className="hidden-cell">Bachelor Project: Thesis (S)</td>
              <td>3</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>
            <tr>
              <td>4072BPRP1Y</td>
              <td>BPP</td>
              <td className="hidden-cell">Bachelor Project: Presentation (S)</td>
              <td>1</td>
              <td>⬜</td>
              <td>Q4 26/27</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
