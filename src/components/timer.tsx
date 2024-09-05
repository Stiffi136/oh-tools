import { DateTime, Duration } from "luxon";

interface Props {
    title: string;
    time: DateTime;
    duration: Duration;
}

function Timer({ title, duration, time }: Props) {
    return (
        <div className="grid w-1/2 mx-auto justify-center space-y-4 text-text">
            <div className="relative inline-flex">
                <h1 className="text-4xl text-center">{title}</h1>
                <p title="(Untested) This timer may only apply to EU servers" className="absolute font-bold top-2 -right-4 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-md bg-secondary py-1 px-1 text-xs text-white">EU</p>
            </div>
            <div className="justify-center mx-auto text-3xl text-center">
                <p className="border-4 border-accent rounded-lg p-1 px-2">
                    {duration.toFormat("hh:mm:ss")}
                </p>
                <p className="underline decoration-accent decoration-4">
                    {time?.toLocaleString(DateTime.TIME_SIMPLE)}
                </p>
            </div>
        </div>
    );
}

export default Timer;
