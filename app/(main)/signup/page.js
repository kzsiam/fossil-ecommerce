"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({ email: "", password: "", first: "", last: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("Creating account...");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        firstName: form.first,
        lastName: form.last
      }),
    });

    const data = await res.json();
    setMsg(data.error ? "❌ " + data.error : "✅ " + data.message);
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="First Name" onChange={(e)=> setForm({...form, first:e.target.value})}/>
      <input placeholder="Last Name" onChange={(e)=> setForm({...form, last:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=> setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=> setForm({...form, password:e.target.value})}/>
      <button>Create Account</button>
      <p>{msg}</p>
    </form>
  );
}
