import { motion } from "motion/react";
import React from "react";
import { FaCheck } from "react-icons/fa";

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
        <div className="flex items-center w-full mb-10">
            {steps.map((step, i) => {
                const completed = i < safeCurrent;
                const active = i === safeCurrent;

                return <React.Fragment key={i}>
                    <div className="relative flex items-center flex-row gap-2">
                        <button
                            type="button"
                            onClick={() => onStepClick(i)}
                            className={`
                                relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                                ${completed ? 'bg-blue-600 border-blue-600 text-white' : ''}
                                ${active && !completed ? 'border-blue-600 text-blue-600' : ''}
                                ${!active && !completed ? 'border-gray-300 text-gray-400' : ''}    
                            `}
                            aria-current={active ? 'step' : undefined}
                        >
                            {completed ? <FaCheck /> : i + 1}
                        </button>
                    </div>

                    <div
                        className="hidden md:block text-sm text-gray-700 truncate text-ellipsis max-w-[70px] ml-2"
                    >
                        {step.label}
                    </div>

                    {i < steps.length - 1 && (
                        <div className="flex-1 h-0.5 bg-gray-300 mx-3 relative">
                            <motion.div
                                className="h-full bg-blue-600"
                                initial={{width: 0}}
                                animate={{width: completed ? '100%' : '0%'}}
                                transition={{duration: 0.35}}
                                style={{ maxWidth: '100%'}}
                            >

                            </motion.div>
                        </div>
                    )}
                </React.Fragment>
            })}
        </div>
    </>
}

export default Stepper;