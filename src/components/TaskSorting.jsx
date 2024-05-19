import React from 'react';
import MySelect from './UI/select/MySelect';

const TaskSorting = (({ sorting, setSorting }) => {
    return (
        <div>
            <MySelect
                value={sorting.sort}
                onChange={sortedAndSearchedTasks => setSorting({ ...sorting, sort: sortedAndSearchedTasks })}
                defaultValue='Сортировка'
                options={[
                    { value: 'decription', name: 'По описанию' },
                    { value: 'urgency', name: 'По срочности' },
                    { value: 'time', name: 'По дате' },
                ]}
            />
        </div>
    )
})

export default TaskSorting;
