import { useRecurrenceStore } from "@/store/recurrenceStore"
import { useMemo } from "react"
import { getRecurringDates } from "@/utils/getRecurringDates"

export function useRecurringDates() {
  const { type, interval, daysOfWeek, pattern, startDate, endDate } = useRecurrenceStore()
  
  const recurringDates = useMemo(() => {
    return getRecurringDates({
      type,
      interval,
      daysOfWeek,
      pattern,
      startDate,
      endDate,
    })
  }, [type, interval, daysOfWeek, pattern, startDate, endDate])

  return recurringDates
}
