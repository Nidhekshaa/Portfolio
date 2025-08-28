import '../styles/about.css';
import { useEffect, useState } from "react";
import profileImage from "../assets/nidhekshaa photo.jpg";

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user/profile")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <p>Loading...</p>;
  return (
    <section className="about" id="about">
      <div className="profile-image">
        <img src={profileImage} alt={user.name} />
      </div>
      <div className="profile-info">
        <h2>About Me</h2>
        <p>{user.intro}</p>
        <em>"{user.quote}"</em>
        <ul>
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Date of birth:</strong> {user.dob}</li>
          <li><strong>Address:</strong> {user.address}</li>
          <li><strong>Zip code:</strong> {user.zip}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Phone:</strong> {user.phone}</li>
        </ul>
        <div className="tags">
          {user.interests.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
