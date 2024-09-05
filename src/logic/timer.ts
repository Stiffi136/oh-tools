import { DateTime, Interval } from "luxon";

export function nextCrateResetTime() {
    const startOfDay = DateTime.utc().startOf("day");
    const hoursLater = startOfDay.plus({ hours: 4 });
    let interval = Interval.fromDateTimes(startOfDay, hoursLater);

    let i = 0
    while(!interval.contains(DateTime.utc()) && i < 6){
        interval = interval.set({ start: interval.start?.plus({hours: 4}), end: interval.end?.plus({hours: 4}) })
        i++;
    }

    return interval.end?.toLocal();
}

export function durationUntilNextCrateReset(resetTime: DateTime) {
    return resetTime.diffNow()
}