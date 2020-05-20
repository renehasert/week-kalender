export interface Event {
  id: number;
  patient: string;
  age: number;
  title: string;
  notes?: string;
  date: string;
  start: string;
  end: string;
  meta?: any;
}
