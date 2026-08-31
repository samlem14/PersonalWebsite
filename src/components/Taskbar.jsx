import { useEffect, useState } from 'react';
import { apps } from '../apps/registry.jsx';

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w95-tray">
      {now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
    </div>
  );
}

export default function Taskbar({ windows, focusedId, onOpen, onTaskClick }) {
  const [startOpen, setStartOpen] = useState(false);

  // Close the Start menu on any outside click.
  useEffect(() => {
    if (!startOpen) return;
    const close = (e) => {
      if (!e.target.closest('.w95-start-menu, .w95-start-button')) {
        setStartOpen(false);
      }
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [startOpen]);

  return (
    <>
      {startOpen && (
        <div className="w95-start-menu">
          <div className="w95-start-banner">
            <span>Sam95</span>
          </div>
          <ul>
            {apps.map((app) => (
              <li key={app.id}>
                <button
                  onClick={() => {
                    onOpen(app);
                    setStartOpen(false);
                  }}
                >
                  <span className="w95-start-icon">
                    <app.icon />
                  </span>
                  {app.title}
                </button>
              </li>
            ))}
            <li className="w95-start-sep" />
            <li>
              <button onClick={() => setStartOpen(false)}>Shut Down...</button>
            </li>
          </ul>
        </div>
      )}

      <div className="w95-taskbar">
        <button
          className={`w95-start-button${startOpen ? ' is-pressed' : ''}`}
          onClick={() => setStartOpen((v) => !v)}
        >
          <span className="w95-flag" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          Start
        </button>

        <div className="w95-task-list">
          {windows.map((w) => {
            const app = apps.find((a) => a.id === w.appId);
            const active = w.id === focusedId && !w.minimized;
            return (
              <button
                key={w.id}
                className={`w95-task-button${active ? ' is-active' : ''}`}
                onClick={() => onTaskClick(w.id)}
              >
                <span className="w95-task-icon">
                  <app.icon />
                </span>
                {app.title}
              </button>
            );
          })}
        </div>

        <Clock />
      </div>
    </>
  );
}
