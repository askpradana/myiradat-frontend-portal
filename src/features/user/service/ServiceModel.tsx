export interface UserService {
  serviceId: number;
  serviceName: string;
  serviceCode: string;
  roleId: number;
  roleName: string;
}

export interface UserProfileResponse {
  data: {
    id: number;
    name: string;
    email: string;
    noHp: string;
    services: UserService[];
  };
}
