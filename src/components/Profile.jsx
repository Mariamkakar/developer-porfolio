import profilePic from "../assets/image.jpg";

function Profile({ name, title, bio }) {
  return (
    <section className="profile-section">
      <div className="hero-image">
        <img src={profilePic} alt="profile" />
      </div>

      <div className="profile-info">
        <h2>{name}</h2>

        <h3>{title}</h3>

        <p>{bio}</p>
        <button className="profile-btn">View My Work</button>
      </div>
    </section>
  );
}

export default Profile;
