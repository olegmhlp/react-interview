export interface Item {
    id: number;
    title: string;
    status: boolean;
}

export interface TaskList {
    taskList: Item[];
}
