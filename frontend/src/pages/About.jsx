import '../styles/about.css';
import profileImage from "../assets/nidhekshaa photo.jpg";

const About = () => {
  const user = {
    name:"Nidhekshaa N K",
    dob:"March 30, 2005",
    address:"Komarapalayam, Namakkal, Tamil Nadu, India",
    zip:"638183",
    email:"nknidhekshaa@gmail.com",
    phone:"+91-88389-72605",
    intro:"I'm Nidhekshaa N K, I’m a passionate MERN stack developer who transitioned into tech from a creative background, combining design sensibility with strong development skills. I enjoy building responsive, user-focused full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    quote:"Design is intelligence made visible. Code brings it to life.",
    interests:["Music","Travel","Movie","Sports"]
  }

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
