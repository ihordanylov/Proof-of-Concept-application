export interface JobModel {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel {
  id: number;
  name: string;
  dateOfBirth: Date;
  email: string;
  status: string;
  hourlyRate: string;
  createdAt: Date;
  updatedAt: Date;
}
