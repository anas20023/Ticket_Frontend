import { useState } from "react";
import locations from "../data/location.js";

const LocationSelect = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [category, setCategory] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [farePs, setFarePs] = useState(0);

    const HandleFare = (from, to, category) => {
        if (!from || !to || !category) {
            setFarePs(0); // Reset fare if any field is missing
            return;
        }

        const fromLocation = locations.find((location) => location.name === from);
        const toLocation = locations.find((location) => location.name === to);

        if (!fromLocation || !toLocation) {
            setFarePs(0); // Reset fare if locations are invalid
            return;
        }

        const pointDistance = Math.abs(fromLocation.point - toLocation.point);
        const fare = category === 'Non-AC' ? pointDistance  : pointDistance * 1.5;
        setFarePs(fare);
    };

    // Call HandleFare in each onChange to auto-update fare
    const handleFromChange = (e) => {
        const newFrom = e.target.value;
        setFrom(newFrom);
        HandleFare(newFrom, to, category);
    };

    const handleToChange = (e) => {
        const newTo = e.target.value;
        setTo(newTo);
        HandleFare(from, newTo, category);
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        HandleFare(from, to, newCategory);
    };

    return (
        <>
            {/* First part - Location Select */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center max-w-4xl mx-auto my-6 px-4 py-6 border border-gray-200 lg:rounded-lg bg-white">
                <div className="w-full lg:w-1/2">
                    <label htmlFor="from" className="block text-gray-700 text-sm font-semibold mb-1">
                        From
                    </label>
                    <select
                        id="from"
                        value={from}
                        onChange={handleFromChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    >
                        <option value="" disabled>Select your starting location</option>
                        {locations.map((location) => (
                            <option key={location.name} value={location.name}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full lg:w-1/2">
                    <label htmlFor="to" className="block text-gray-700 text-sm font-semibold mb-1">
                        To
                    </label>
                    <select
                        id="to"
                        value={to}
                        onChange={handleToChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    >
                        <option value="" disabled>Select your destination</option>
                        {locations
                            .filter((location) => location.name !== from)
                            .map((location) => (
                                <option key={location.name} value={location.name}>
                                    {location.name}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
            {/* Second part - Category and Date Select */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center max-w-4xl mx-auto my-6 px-4 py-6 border border-gray-200 lg:rounded-lg bg-white">
                <div className="w-full lg:w-1/2">
                    <label htmlFor="category-select" className="block text-gray-700 text-sm font-semibold mb-1">
                        Select Category
                    </label>
                    <select
                        id="category-select"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Non-AC">Non-AC</option>
                        <option value="AC">AC</option>
                    </select>
                </div>

                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <label htmlFor="journey-date" className="block text-gray-700 text-sm font-semibold mb-1">
                        Select Journey Date
                    </label>
                    <input
                        type="date"
                        id="journey-date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        value={journeyDate}
                        onChange={(e) => setJourneyDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center max-w-4xl mx-auto my-6 px-4 py-6 border border-gray-200 lg:rounded-lg bg-white">
                <label htmlFor="Estimated Fare Per Seat" className="text-lg">Estimated Fare</label>
                <h2 className="font-bold text-center">${farePs} Per Seat</h2>
            </div>
        </>
    );
};

export default LocationSelect;
