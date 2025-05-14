import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { useLogin } from "../hooks/useLogin";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

function Login() {
  const { login, isPending } = useLogin();
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };
  return (
    <div className="mx-auto w-[500px] p-6 rounded-2xl bg-[#fafafa] mt-40">
      <div className="login-form">
        <h1 className="text-4xl font-bold mb-8">Login</h1>
        <form onSubmit={handleLogin}>
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
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Type here..."
              required
            />
          </div>

          <Button className="mb-6">{isPending ? "Loading..." : "Login"}</Button>
        </form>
        <p className="register-caption">
          Need to create account?
          <Link className="underline" to="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
