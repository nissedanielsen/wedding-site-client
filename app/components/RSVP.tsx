"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("rsvps").insert([
      { name, attending }
    ]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <p>Tack för ditt svar! 💍</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ditt namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
        Jag kommer
      </label>
      <button type="submit">Skicka RSVP</button>
    </form>
  );
}