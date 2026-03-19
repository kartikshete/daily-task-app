import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="glass-panel" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✨</div>
                <h3 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)' }}>All caught up!</h3>
                <p style={{ margin: 0 }}>You have no pending tasks. Enjoy your day!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
