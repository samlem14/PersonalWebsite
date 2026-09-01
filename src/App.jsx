import { useState, useCallback } from 'react';
import { apps, getApp } from './apps/registry.jsx';
import DesktopIcon from './components/DesktopIcon.jsx';
import Window from './components/Window.jsx';
import Taskbar from './components/Taskbar.jsx';

let zCounter = 10;
const nextZ = () => ++zCounter;

export default function App() {
  const [windows, setWindows] = useState([]);
  const [focusedId, setFocusedId] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const openApp = useCallback((app) => {
    // Links leave the desktop entirely.
    if (app.kind === 'link') {
      window.open(app.url, '_blank', 'noopener,noreferrer');
      return;
    }

    setWindows((prev) => {
      // One instance per app: if it is already open, restore and focus it.
      const existing = prev.find((w) => w.appId === app.id);
      if (existing) {
        setFocusedId(existing.id);
        return prev.map((w) =>
          w.id === existing.id ? { ...w, minimized: false, z: nextZ() } : w
        );
      }

      const id = `${app.id}-${Date.now()}`;
      const offset = prev.length * 26;
      const width = app.width ?? 480;
      const height = app.height ?? 360;

      setFocusedId(id);
      return [
        ...prev,
        {
          id,
          appId: app.id,
          x: 90 + offset,
          y: 60 + offset,
          width,
          height,
          z: nextZ(),
          minimized: false,
          maximized: false,
        },
      ];
    });
  }, []);

  const focusWindow = useCallback((id) => {
    setFocusedId(id);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, z: nextZ() } : w))
    );
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setFocusedId((cur) => (cur === id ? null : cur));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
    setFocusedId((cur) => (cur === id ? null : cur));
  }, []);

  const toggleMaximize = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const moveWindow = useCallback((id, pos) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...pos } : w))
    );
  }, []);

  // Clicking a taskbar button minimizes if already focused, else restores.
  const handleTaskClick = useCallback(
    (id) => {
      const w = windows.find((x) => x.id === id);
      if (!w) return;
      if (w.id === focusedId && !w.minimized) {
        minimizeWindow(id);
      } else {
        setWindows((prev) =>
          prev.map((x) =>
            x.id === id ? { ...x, minimized: false, z: nextZ() } : x
          )
        );
        setFocusedId(id);
      }
    },
    [windows, focusedId, minimizeWindow]
  );

  return (
    <div
      className="w95-desktop"
      onPointerDown={(e) => {
        if (e.target.classList.contains('w95-desktop')) setSelectedIcon(null);
      }}
    >
      <div className="w95-nameplate">
        <span>Sam</span>
        <span>Lemme</span>
      </div>

      <div className="w95-icon-grid">
        {apps
          .filter((a) => a.onDesktop !== false)
          .map((app) => (
            <DesktopIcon
              key={app.id}
              app={app}
              isSelected={selectedIcon === app.id}
              onSelect={setSelectedIcon}
              onOpen={openApp}
            />
          ))}
      </div>

      {windows.map((w) => (
        <Window
          key={w.id}
          win={w}
          app={getApp(w.appId)}
          isFocused={w.id === focusedId}
          onFocus={focusWindow}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onToggleMaximize={toggleMaximize}
          onMove={moveWindow}
        />
      ))}

      <Taskbar
        windows={windows}
        focusedId={focusedId}
        onOpen={openApp}
        onTaskClick={handleTaskClick}
      />
    </div>
  );
}
