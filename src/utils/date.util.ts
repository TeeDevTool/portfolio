import { EventData } from "@app/common/interface";

const LAST_MONTH = 11;

export function fillMonthWithinRange(event: EventData[]): EventData[] {
  const minTime = new Date(event[0].startDate).getTime();
  const maxTime = new Date().getTime();

  let runningDate = new Date(minTime);
  let runningIndex = 0;
  let filledIndex = 0;

  let newEvent: EventData[] = [];

  while (runningDate.getTime() < maxTime) {
    const currentDate = event[runningIndex]?.startDate;

    if (
      currentDate &&
      runningDate.getMonth() === currentDate.getMonth() &&
      runningDate.getFullYear() === currentDate.getFullYear()
    ) {
      newEvent.push(event[runningIndex]);
      runningIndex++;
    } else {
      const tempData = {
        id: `F${filledIndex}`,
        startDate: new Date(runningDate),
        name: "",
      };

      newEvent.push(tempData);
      filledIndex++;
    }

    if (runningDate.getMonth() === LAST_MONTH) {
      runningDate.setFullYear(runningDate.getFullYear() + 1);
      runningDate.setMonth(0);
    } else {
      runningDate.setMonth(runningDate.getMonth() + 1);
    }
  }

  return newEvent;
}

export function* fillMonthWithinRangeGenerator(events: EventData[]): Generator<Partial<EventData>> {
  const minTime = new Date(events[0].startDate).getTime();
  const maxTime = new Date().getTime();

  const runningDate = new Date(minTime);
  let runningIndex = 0;
  let filledIndex = 0;

  while (runningDate.getTime() < maxTime) {
    const currentDate = events[runningIndex]?.startDate;

    if (
      currentDate &&
      runningDate.getMonth() === currentDate.getMonth() &&
      runningDate.getFullYear() === currentDate.getFullYear()
    ) {
      yield events[runningIndex];
      runningIndex++;
    } else {
      yield {
        id: `F${filledIndex}`,
        startDate: new Date(runningDate),
      };
      filledIndex++;
    }

    if (runningDate.getMonth() === LAST_MONTH) {
      runningDate.setFullYear(runningDate.getFullYear() + 1);
      runningDate.setMonth(0);
    } else {
      runningDate.setMonth(runningDate.getMonth() + 1);
    }
  }
}
