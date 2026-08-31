// Each "app" is just a React component. Whatever you return here gets
// rendered inside the window body. Plain HTML works, and so does any
// React95 component.
import headshot from "C:\Users\sammy\personal-website\src\Assets\headshot.jpg";

export default function AboutMe() {
  return (
    <div className="doc">
      <h1>Sam Lemme</h1>
      <p className="subtitle">Associate VFX Producer, Haymaker VFX</p>

      <hr />
	  
      <figure className="doc-figure">
        <img src={headshot} alt="Sam and Minx" />
        <figcaption>Los Angeles, 2025</figcaption>
      </figure>

      <p>
        I produce visual effects for episodic television, features, and
        large-format immersive work. Day to day that means scheduling and
        bidding shots, running client reviews, and keeping the pipeline
        honest between Gothenburg and Los Angeles.
      </p>

      <p>
        I also build the tooling around the work: Flow Production Tracking
        automation, Google Apps Script reporting, and AutoHotkey utilities
        that take the tedium out of delivery days.
      </p>

      <h2>What I work on</h2>
      <ul>
        <li>Shot scheduling, bidding, and vendor coordination</li>
        <li>Flow Production Tracking configuration and automation</li>
        <li>Client-facing delivery communication</li>
        <li>Pipeline scripting in Python and Apps Script</li>
      </ul>

      <h2>Elsewhere</h2>
      <p>
        Open the other icons on the desktop for credits and contact details.
      </p>
    </div>
  );
}
