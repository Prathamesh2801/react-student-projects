import { Link } from "react-router-dom";

export default function EventsPage() {
  return (
    <div className="bg-purple-400 h-[80vh]">
      <h1>Events Page</h1>
      <div>

      <ul className="">
        <li>
          <Link to="e1">Event 1</Link>
        </li>
        <li>
          <Link to="e2">Event 2</Link>
        </li>
        <li>
          <Link to="e3">Event 3</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}
