"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";

export default function SectionPage() {
  const { category } = useParams(); // masalan: metodik yoki psixologiya
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch("https://pedagogika-backend.onrender.com/api/tests");
        const data = await res.json();

        // API-dagi sectionlarni olish (faqat tanlangan category bo‘yicha)
        // ⚠️ API’da category field yo‘q, shuning uchun hozircha barcha sectionlar olinadi
        const uniqueSections = Array.from(new Set(data.map((q: any) => q.section)));

        setSections(uniqueSections);
      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#6b21a8" }}>
        {category} bo‘yicha variantlar
      </h2>

      {loading ? (
        <p>⏳ Yuklanmoqda...</p>
      ) : sections.length === 0 ? (
        <p>❌ Variantlar topilmadi</p>
      ) : (
        sections.map((sec) => (
          <Link key={sec} href={`/quiz/${category}/${sec}`}>
            <div
              style={{
                background: "#fef9c3",
                borderRadius: "12px",
                padding: "16px",
                marginTop: "12px",
                cursor: "pointer",
              }}
            >
              <h3 style={{ color: "#ca8a04", fontWeight: "600" }}>{sec} →</h3>
              <p style={{ fontSize: "14px", color: "#374151" }}>
                Shu variantdagi test savollari
              </p>
            </div>
          </Link>
        ))
      )}
      <Navigation />
    </div>
  );
}
