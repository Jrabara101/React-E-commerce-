export default function Login() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="mt-4 space-y-4">
        <input type="email" placeholder="Email" className="block w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="block w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
