export interface Tasks{
    id:string,
    title:string,
    description:string,
    status:TaskStatus
}
export enum TaskStatus{
    OPEN='open',
    CLOSED='closed',
    INPROGRESS="in-progress"
}