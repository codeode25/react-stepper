
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
    return <>
        This is the stepper component
    </>
}

export default Stepper;