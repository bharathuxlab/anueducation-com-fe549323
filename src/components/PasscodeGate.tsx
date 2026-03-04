import { useState } from "react";
import anuLogo from "@/assets/anu-logo.png";

const PASSCODE_HASH = "96183";

const PasscodeGate = ({ children }: { children: React.ReactNode }) => {
  const [authorized, setAuthorized] = useState(
    () => sessionStorage.getItem("anu_access") === "granted"
  );
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === PASSCODE_HASH) {
      sessionStorage.setItem("anu_access", "granted");
      setAuthorized(true);
    } else {
      setError(true);
      setCode("");
    }
  };

  if (authorized) return <>{children}</>;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xs text-center space-y-4">
        <input
          type="password"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          placeholder="Enter passcode"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-gray-400"
          autoFocus
        />
        {error && <p className="text-red-500 text-sm">Incorrect passcode</p>}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasscodeGate;
