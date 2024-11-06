/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi"

const SeatSelect = ({ onNext }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Toggle seat selection
    const toggleSeat = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) =>
            prevSelectedSeats.includes(seatNumber)
                ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
                : [...prevSelectedSeats, seatNumber]
        );
    };

    // Render seat grid in 2:2 layout with a final row of 4 seats
    const renderSeats = () => {
        const seats = [];
        for (let i = 1; i <= 45; i++) {
            const isLastRow = i > 41; // Last 4 seats are in the last row
            const isSelected = selectedSeats.includes(i);
            seats.push(
                <button
                    key={i}
                    onClick={() => toggleSeat(i)}
                    className={`w-10 h-10 m-1 text-sm font-medium rounded-lg 
                        ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} 
                        dark:${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} 
                        transition-colors`}
                >
                    {i}
                </button>
            );
        }
        return seats;
    };

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto my-6 px-4 py-6">
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Driver seat */}
                <div className="flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400">
                    <GiSteeringWheel size={24} />
                </div>
                {/* Front row (disabled seats) */}
                <button className="w-10 h-10 m-1 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                    1
                </button>
                <button className="w-10 h-10 m-1 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                    2
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {/* Seat grid */}
                <div className="grid grid-cols-4 gap-2 md:grid-cols-4">
                    {renderSeats().slice(0, 40)}
                </div>
                {/* Last row with 4 seats */}
                <div className="flex justify-center gap-2 mt-4">
                    {renderSeats().slice(40)}
                </div>
            </div>

            {/* Next button */}
            <button
                onClick={onNext}
                disabled={selectedSeats.length === 0}
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow 
                    hover:bg-blue-600 disabled:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:disabled:bg-blue-400 transition-colors"
            >
                Next
            </button>
        </div>
    );
};

export default SeatSelect;
