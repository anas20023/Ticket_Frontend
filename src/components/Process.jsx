/* eslint-disable no-unused-vars */
import LocationSelect from "./LocationSelect";
import { useState } from "react";
const Process = () => {
    const [currprocess, setCurrProcess] = useState('LocationSelect');
    return (
        <div className="w-full  bg-slate-100 rounded-b-md px-4">
            {currprocess === 'LocationSelect' ? <LocationSelect /> : null}
        </div>
    )
}
export default Process;