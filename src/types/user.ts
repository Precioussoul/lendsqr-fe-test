export type UserStatus = 'active' | 'inactive' | 'pending' | 'blacklisted';

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}

export interface UserTableHeader {
  key: keyof User | 'actions';
  label: string;
  sortable?: boolean;
  filterable?: boolean;
}
