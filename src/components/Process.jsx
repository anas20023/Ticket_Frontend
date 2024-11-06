/* eslint-disable react/prop-types */
import LocationSelect from "./LocationSelect";
import SeatSelect from "./seatSelect";
import ConfirmPayment from "./ConfirmPayment.jsx";
const Process = ({ currStep, onStepChange }) => {
    const handleNextStep = () => {
        console.log(currStep);
        if (currStep < 3) onStepChange(currStep + 1);
    };

    return (
        <div className="w-full bg-slate-100 rounded-b-md px-4">
            {currStep === 1 && <LocationSelect onNext={handleNextStep} />}
            {currStep === 2 && <SeatSelect onNext={handleNextStep} />}
            {currStep === 3 && <ConfirmPayment />}
        </div>
    );
};

export default Process;
