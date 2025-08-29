"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";

export default function TestsPage() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#6b21a8" }}>
          Testlar
        </h1>

        {/* Metodik yondashuv */}
        <Link href="/quiz/metodik">
          <div
            style={{
              background: "#e0f2fe",
              borderRadius: "12px",
              padding: "16px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ color: "#1d4ed8", fontWeight: "600" }}>
              Metodik yondashuv →
            </h3>
            <p style={{ fontSize: "14px", color: "#374151" }}>
              Zamonaviy o‘qitish metodlari va yondashuvlari bo‘yicha testlar
            </p>
           
          </div>
        </Link>

        {/* Psixologiya */}
        <Link href="/quiz/psixologiya">
          <div
            style={{
              background: "#d1fae5",
              borderRadius: "12px",
              padding: "16px",
              marginTop: "12px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ color: "#047857", fontWeight: "600" }}>
              Psixologiya →
            </h3>
            <p style={{ fontSize: "14px", color: "#374151" }}>
              Bolalar psixologiyasi va pedagogik psixologiya bo‘yicha testlar
            </p>
          
          </div>
        </Link>
      </div>

      {/* Pastki Navigation */}
      <Navigation />
    </div>
  );
}
