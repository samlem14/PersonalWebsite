const credits = [
  { title: 'Wizard of Oz at Sphere', year: '2025', type: 'Immersive' },
  { title: 'Will Trent', year: '2024', type: 'Series' },
  { title: 'Megalopolis', year: '2024', type: 'Feature' },
  { title: 'Madame Web', year: '2024', type: 'Feature' },
  { title: 'Unfrosted', year: '2024', type: 'Feature' },
  { title: 'The Marvels', year: '2023', type: 'Feature' },
];

export default function Credits() {
  return (
    <div className="doc">
      <h1>Selected credits</h1>

      <table className="w95-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((c) => (
            <tr key={c.title}>
              <td>{c.title}</td>
              <td>{c.year}</td>
              <td>{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: 16 }}>
        Full filmography is on IMDb. Double-click the IMDb icon on the desktop
        to open it in a new tab.
      </p>
    </div>
  );
}
