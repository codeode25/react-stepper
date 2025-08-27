type Step = {
    label: string;
}

interface StepperProps {
    steps: Step[];
    current?: number;
    onStepClick: (index: number) => void
}

const Stepper: React.FC<StepperProps> = ({
    steps,
    current = 0,
    onStepClick,
}) => {
    if (steps.length === 0) {
        return <div className="text-center text-gray-500 border rounded-xl bg-gray-50 p-4">
            No steps defined
        </div>
    }

    const safeCurrent = Math.min(Math.max(current, 0), steps.length - 1);

    return <>
        This is the stepper component
    </>
}

export default Stepper;