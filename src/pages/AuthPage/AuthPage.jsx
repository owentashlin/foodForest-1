import { useState } from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [isRegistered, setIsRegistered] = useState(false);

  function isRegisteredHandler() {
    setIsRegistered(true);
  }

  function isNotRegisteredHandler() {
    setIsRegistered(false);
  }

  return (
    <main>
      {isRegistered ? (
        <LoginForm
          isNotRegisteredHandler={isNotRegisteredHandler}
          setUser={setUser}
        />
      ) : (
        <SignUpForm
          isRegisteredHandler={isRegisteredHandler}
          setUser={setUser}
        />
      )}
    </main>
  );
}
