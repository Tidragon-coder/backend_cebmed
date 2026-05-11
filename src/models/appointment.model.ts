export interface AppointmentModel {
  id: number;
  user_id: string;
  title: string;
  description: string | null;
  location: string | null;
  start_time: Date;
  end_time: Date;
  notifications_enabled: boolean;
  consultation_type: string | null;
  reminder_delay: number | null;
  created_at: Date;
  updated_at: Date;
}

export interface CreateAppointmentInput {
  title: string;
  description?: string;
  location?: string;
  start_time: string;
  end_time: string;
  notificationsEnabled?: boolean;
  consultationType?: string;
  reminderDelay?: number;
}

export interface UpdateAppointmentInput {
  title?: string;
  description?: string;
  location?: string;
  start_time?: string;
  end_time?: string;
  notificationsEnabled?: boolean;
  consultationType?: string;
  reminderDelay?: number;
}

export interface AppointmentListResponse {
  count: number;
  data: AppointmentModel[];
}
