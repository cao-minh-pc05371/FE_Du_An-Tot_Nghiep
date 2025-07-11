import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import StepInfo from './StepInfo';
import StepPayment from './StepPayment';

const Checkout = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen py-4 px-2 sm:py-6 sm:px-4 lg:py-8 lg:px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-neutral-200">
                    <div className="flex mb-4 sm:mb-6 border-b border-gray-200 text-xs sm:text-sm font-semibold">
                        <div
                            className={`pb-2 px-2 sm:px-4 flex-1 text-center ${step === 1
                                ? 'border-b-2 border-red-600 text-red-600'
                                : 'text-gray-400'
                                }`}
                        >
                            1. THÔNG TIN
                        </div>
                        <div
                            className={`pb-2 px-2 sm:px-4 flex-1 text-center ${step === 2
                                ? 'border-b-2 border-red-600 text-red-600'
                                : 'text-gray-400'
                                }`}
                        >
                            2. THANH TOÁN
                        </div>
                    </div>

                    {step === 1 ? (
                        <StepInfo onNext={() => setStep(2)} />
                    ) : (
                        <StepPayment onBack={() => setStep(1)} />
                    )}
                </div>

                <OrderSummary />
            </div>
        </div>
    );
};

export default Checkout;
