interface StatusInterface {
    [key: string]: string;
}
export const TASK_STATUSES: StatusInterface = {
    "PENDING" : "着手不可",
    "READY" : "未着手",
    "DOING" : "着手中",
    "DONE" : "完了"
}