import { OptionProps } from "../Interface/SelectFieldProps";

const TaskOptions: OptionProps[] = [
    {
        value: 'NOTSTARTED',
        label: 'NOT STARTED',
    },
    {
        value: 'STARTED',
        label: 'STARTED',
    },
    {
        value: 'COMPLETED',
        label: 'COMPLETED',
    }
];

const TaskPriorityOptions: OptionProps[] = [
    {
        value: 'LOW',
        label: 'LOW',
    },
    {
        value: 'MEDIUM',
        label: 'MEDIUM',
    },
    {
        value: 'HIGH',
        label: 'HIGH',
    }
];

export { TaskOptions, TaskPriorityOptions };
