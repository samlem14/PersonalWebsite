export default function DesktopIcon({ app, isSelected, onSelect, onOpen }) {
  return (
    <button
      className={`w95-desktop-icon${isSelected ? ' is-selected' : ''}`}
      onClick={() => onSelect(app.id)}
      onDoubleClick={() => onOpen(app)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen(app);
      }}
    >
      <span className="w95-desktop-icon-img">
        <app.icon />
      </span>
      <span className="w95-desktop-icon-label">{app.title}</span>
    </button>
  );
}
