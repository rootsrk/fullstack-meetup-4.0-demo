import { useRef, FormEvent } from "react";

export function FormWithRef() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access the input values through the refs
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
