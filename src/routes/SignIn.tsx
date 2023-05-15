import { FormEventHandler, useState } from "react";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Code to submit the form data to your backend API
  }

  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

      <input type="submit" value="Sign in" />
    </form>
  );
}
