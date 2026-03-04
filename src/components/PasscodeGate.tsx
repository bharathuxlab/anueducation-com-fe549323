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
    <div className="min-h-screen bg-gradient-to-b from-anu-maroon to-anu-dark flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center space-y-6"
      >
        <img src={anuLogo} alt="ANU Logo" className="h-20 w-20 mx-auto" />
        <h2 className="text-xl font-bold text-anu-maroon">
          Acharya Nagarjuna University
        </h2>
        <p className="text-sm text-muted-foreground">Enter passcode to continue</p>
        <input
          type="password"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          placeholder="Enter passcode"
          className="w-full border border-border rounded-md px-4 py-2 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-anu-maroon"
          autoFocus
        />
        {error && <p className="text-red-500 text-sm">Incorrect passcode</p>}
        <button
          type="submit"
          className="w-full bg-anu-maroon text-white py-2 rounded-md font-semibold hover:bg-anu-dark transition-colors"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasscodeGate;
