"use client";

import Navigation from "./components/Navigation";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#6b21a8" }}>
          Xush kelibsiz!
        </h1>
        <p style={{ marginTop: "8px", color: "#374151", lineHeight: "1.5" }}>
          Pedagogik mahorat platformasiga xush kelibsiz. Bu platforma orqali
          siz o‘z pedagogik ko‘nikmalaringizni rivojlantirishingiz mumkin.
        </p>

        {/* Testlar kartasi */}
        <Link href="/tests">
          <div
            style={{
              background: "#e0f2fe",
              borderRadius: "12px",
              padding: "16px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ color: "#1d4ed8", fontWeight: "600" }}>📝 Testlar</h3>
            <p style={{ fontSize: "14px", color: "#374151" }}>
              Turli xil pedagogik testlarni topib, bilimingizni sinab ko‘ring
            </p>
          </div>
        </Link>

        {/* Rivojlanish kartasi */}
        <div
          style={{
            background: "#d1fae5",
            borderRadius: "12px",
            padding: "16px",
            marginTop: "12px",
          }}
        >
          <h3 style={{ color: "#047857", fontWeight: "600" }}>📚 Rivojlanish</h3>
          <p style={{ fontSize: "14px", color: "#374151" }}>
            Pedagogik mahoratingizni oshirish uchun materiallar
          </p>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
