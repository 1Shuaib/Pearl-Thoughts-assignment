// store/recurrenceStore.ts
import { create } from 'zustand'

interface RecurrenceState {
  type: 'daily' | 'weekly' | 'monthly' | 'yearly'
  interval: number
  daysOfWeek: number[]
  pattern: string
  startDate: Date
  endDate?: Date
  setState: (updates: Partial<RecurrenceState>) => void
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  type: 'weekly',
  interval: 1,
  daysOfWeek: [],
  pattern: '',
  startDate: new Date(),
  endDate: undefined,
  setState: (updates) => set((state) => ({ ...state, ...updates })),
}))
