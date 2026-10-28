import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <p className="hero-badge">404 / NOT FOUND</p>
      <h1>This page is missing.</h1>
      <p>The route you requested does not exist.</p>
      <Link to="/" className="btn">Back home</Link>
    </section>
  );
}

export default NotFound;
