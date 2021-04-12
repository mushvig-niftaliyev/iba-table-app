export enum ERequestStatus {
    IDLE = "idle",
    ERROR = "error",
    LOADING = "loading",
    SUCCESS = "success",
}

export interface IEmployeeDetails {
    id: number | null;
    name: string;
    surname: string;
    dateOfBirth: string;
    position: string;
    phoneNumber: string;
}

export enum ETabs {
    ALL,
    UPDATED,
    DELETED,
}
