import { useMemo, useState } from "react"
import Stepper from "./Stepper";

function App() {
  const steps = useMemo(() => {
    return [
      {label: 'Step One'},
      {label: 'Step Two'},
      {label: 'Step Three'},
      {label: 'Step Four'},
    ];

  }, [])

  const [step, setStep] = useState(0);

  return (
    <>
      <div className="space-y-10 p-6">
        <section>
          <h2 className="text-xl font-bold mb-4">React Stepper Component</h2>
          <Stepper 
            steps={steps}
            current={step}
            onStepClick={setStep}
          />
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="rounded-md border px-3 py-2 bg-white hover:bg-gray-50"
            >
              Prev
            </button>
            <button
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              className="rounded-md border px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
