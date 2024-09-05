import { durationUntilNextCrateReset, nextCrateResetTime } from "./logic/timer";
import Timer from "./components/timer";
import { useEffect, useState } from "react";

function App() {
    const crateResetTime = nextCrateResetTime();
    if (!crateResetTime) return <>Error</>;
    const untilNextCrateReset = durationUntilNextCrateReset(crateResetTime);

    const [_, setRefreshTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setRefreshTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="container mx-auto text-text flex flex-col min-h-screen p-4">
            <div className="flex flex-col justify-center space-y-4">
                <div>
                    <h1 className="text-center text-4xl">Once Human Timers</h1>
                    <p className="text-center">Oh, it's a timer</p>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="my-auto">
                    <Timer
                        title="Next Crate Reset"
                        time={crateResetTime}
                        duration={untilNextCrateReset}
                    />
                </div>
            </div>
            <div className="flex flex-col text-center">
                <a href="https://github.com/Stiffi136">
                    by Stiffi136 (IGN: Stifson)
                </a>
            </div>
        </main>
    );
}

export default App;
