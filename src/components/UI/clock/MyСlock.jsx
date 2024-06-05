import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./MyClockStyles.css";

const MyСlock = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="myClock">
            <Clock value={value} />
        </div>
    );
};
export default MyСlock;
