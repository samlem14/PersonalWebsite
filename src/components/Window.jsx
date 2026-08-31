import { useRef } from 'react';

const TASKBAR_HEIGHT = 36;

export default function Window({
  win,
  app,
  isFocused,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onMove,
}) {
  const drag = useRef(null);

  const startDrag = (e) => {
    // Ignore drags that start on the title bar buttons.
    if (e.target.closest('.w95-titlebar-btn')) return;
    if (win.maximized) return;

    onFocus(win.id);
    drag.current = {
      pointerId: e.pointerId,
      offsetX: e.clientX - win.x,
      offsetY: e.clientY - win.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onDrag = (e) => {
    if (!drag.current || drag.current.pointerId !== e.pointerId) return;

    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - TASKBAR_HEIGHT - 24;

    onMove(win.id, {
      x: Math.min(Math.max(e.clientX - drag.current.offsetX, -win.width + 80), maxX),
      y: Math.min(Math.max(e.clientY - drag.current.offsetY, 0), maxY),
    });
  };

  const endDrag = (e) => {
    if (!drag.current) return;
    e.currentTarget.releasePointerCapture(drag.current.pointerId);
    drag.current = null;
  };

  const Body = app.component;

  const frameStyle = win.maximized
    ? { left: 0, top: 0, width: '100%', height: `calc(100% - ${TASKBAR_HEIGHT}px)`, zIndex: win.z }
    : { left: win.x, top: win.y, width: win.width, height: win.height, zIndex: win.z };

  return (
    <div
      className={`w95-window${win.minimized ? ' is-minimized' : ''}`}
      style={frameStyle}
      onPointerDown={() => onFocus(win.id)}
      role="dialog"
      aria-label={app.title}
    >
      <div
        className={`w95-titlebar${isFocused ? '' : ' is-inactive'}`}
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={() => onToggleMaximize(win.id)}
      >
        <span className="w95-titlebar-icon">
          <app.icon />
        </span>
        <span className="w95-titlebar-text">{app.title}</span>

        <button
          className="w95-titlebar-btn"
          aria-label="Minimize"
          onClick={() => onMinimize(win.id)}
        >
          <span className="glyph-min" />
        </button>
        <button
          className="w95-titlebar-btn"
          aria-label={win.maximized ? 'Restore' : 'Maximize'}
          onClick={() => onToggleMaximize(win.id)}
        >
          <span className="glyph-max" />
        </button>
        <button
          className="w95-titlebar-btn w95-titlebar-close"
          aria-label="Close"
          onClick={() => onClose(win.id)}
        >
          <span className="glyph-close" />
        </button>
      </div>

      <div className="w95-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>Help</span>
      </div>

      <div className="w95-window-body">
        <Body />
      </div>
    </div>
  );
}
