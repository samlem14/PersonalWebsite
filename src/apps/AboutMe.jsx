// Each "app" is just a React component. Whatever you return here gets
// rendered inside the window body. Plain HTML works, and so does any
// React95 component.
import headshot from '../assets/headshot.jpg';

export default function AboutMe() {
  return (
    <div className="doc">
      <h1>Sam Lemme</h1>
      <p className="subtitle">Associate VFX Producer, Haymaker VFX</p>
	  
      <hr />
	  
      <figure className="doc-figure">
        <img src={headshot} alt="Sam and Minx" />
        <figcaption>Sam and Minx</figcaption>
      </figure>

      <p>
		A visual effects producer for episodic television, features, and
        large-format immersive work. Day to day that means scheduling and
        bidding shots, running client reviews, and always keeping the pipeline
        honest.
      </p>

      <p>
        He can also build the tooling around the work: Flow Production Tracking
        automation, Google Apps Script reporting, and other utilities
        that take the tedium out of delivery days.
      </p>
	  
      <hr />

      <h2>What I work on</h2>
      <ul>
        <li>Shot scheduling, bidding, and vendor coordination</li>
        <li>Flow Production Tracking configuration and automation</li>
        <li>Client-facing delivery communication</li>
      </ul>

    </div>
  );
}
