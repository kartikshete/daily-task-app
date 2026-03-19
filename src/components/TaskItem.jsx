import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div
            className={`glass-panel fade-in`}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                marginBottom: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderLeft: `4px solid ${task.completed ? '#10b981' : 'var(--accent-primary)'}`,
                opacity: task.completed ? 0.7 : 1,
                transform: task.completed ? 'scale(0.98)' : 'scale(1)'
            }}
        >
            <div
                onClick={() => onToggle(task.id)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid var(--accent-primary)',
                    marginRight: '16px',
                    backgroundColor: task.completed ? 'var(--accent-primary)' : 'transparent',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                }}
            >
                {task.completed && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                )}
            </div>

            <span style={{
                flex: 1,
                fontSize: '1.1rem',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)',
                transition: 'color 0.2s ease'
            }}>
                {task.text}
            </span>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(task.id);
                }}
                className="btn-danger"
                style={{
                    padding: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                }}
                aria-label="Delete task"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    );
};

export default TaskItem;
