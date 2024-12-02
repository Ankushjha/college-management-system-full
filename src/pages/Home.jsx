import { Link} from "react-router-dom";

export function Home() {
  
  return (
    <>
      <div className="container flex gap-8">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}
