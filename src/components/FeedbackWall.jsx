import { useState } from "react";

function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Malik",
      rating: 5,
      comment: "Amazing portfolio!",
    },
    {
      id: 2,
      name: "Muskan",
      rating: 4,
      comment: "Very clean design.",
    },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const addFeedback = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      name,
      rating: Number(rating),
      comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <section id="feedback" className="feedback-section">
      <h2>Visitor Feedback </h2>

      <form onSubmit={addFeedback}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>

        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Add Feedback</button>
      </form>

      <div className="feedback-list">
        {feedbacks.map((item) => (
          <div className="feedback-card" key={item.id}>
            <h3>{item.name}</h3>

            <p>{"⭐".repeat(item.rating)}</p>

            <p>{item.comment}</p>

            {item.rating === 5 && (
              <div className="featured">🌟 Featured Review</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackWall;
