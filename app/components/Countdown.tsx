"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-10-17T15:00:00"); // ändra tiden om du vill

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      dagar: Math.floor(difference / (1000 * 60 * 60 * 24)),
      timmar: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minuter: Math.floor((difference / (1000 * 60)) % 60),
      sekunder: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div style={{
        marginTop: "1.5rem",
        fontSize: "1.5rem",
        color: "#d6336c",
        fontWeight: "bold",
        textAlign: "center"
      }}>
        Idag är dagen! 💍
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginTop: "2rem",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} style={{
          background: "#ffe6f0",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
          minWidth: "70px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#d6336c" }}>
            {value}
          </div>
          <div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.3rem" }}>
            {key}
          </div>
        </div>
      ))}
    </div>
  );
}