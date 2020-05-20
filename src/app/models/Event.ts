export interface Event {
  id: number;
  patient: string;
  age: number;
  title: string;
  notes?: string;
  start: Date;
  end: Date;
  meta?: any;
}
