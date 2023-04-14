import React, { useState } from "react";

export function MessagingModal() {
  const [message, setMessage] = useState("");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSendMessage(event) {
    event.preventDefault();

    // Send the message to the server using an API
    // ...

    // Clear the message input field
    setMessage("");
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Compose Message</h2>
        <form onSubmit={handleSendMessage}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
