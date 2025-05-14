import { useRegister } from "../hooks/useRegister";

import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

function Register() {
  const { user, isPending, register } = useRegister();

  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");

    register(email, password, displayName);
  };
  return (
    <div className="mx-auto w-[500px] p-6 rounded-2xl dark:bg-[#444444] bg-[#fafafa] mt-25">
      <div className="login-form">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <form onSubmit={handleRegister}>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Type here..."
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="displayName">Name</Label>
            <Input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="Type here..."
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Type here..."
              required
            />
          </div>

          <Button className="mb-6">
            {isPending ? "Loading..." : "Create Account"}
          </Button>
        </form>
        <p className="register-caption">
          Already have a account?
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
