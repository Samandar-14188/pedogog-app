"use client";

import Navigation from "@/app/components/Navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TestPage() {
  const { section } = useParams(); // masalan: 2024_kuz
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<number | null>(null);

  // Savollarni API’dan olish
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("https://pedagogika-backend.onrender.com/api/tests");
        const data = await res.json();

        // faqat shu section bo‘yicha filterlash
        const filtered = data.filter((q: any) => q.section === section);

        // shuffle qilish funksiyasi
        const shuffleArray = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

        // 10 tasini olish (agar kam bo‘lsa, borini chiqaradi)
        const limited = shuffleArray(filtered).slice(0, 10);

        setQuestions(limited);
      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [section]);

  // Variant tanlash
  const handleSelect = (questionId: string, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Testni tugatish
  const handleFinish = () => {
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = answers[q._id];
      const correctAnswer = q.options[q.answer.charCodeAt(0) - 97]; // "a"->0, "b"->1, ...
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    setResult(correct);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#6b21a8" }}>
        Test: {section}
      </h2>

      {loading ? (
        <p>⏳ Savollar yuklanmoqda...</p>
      ) : questions.length === 0 ? (
        <p>❌ Savollar topilmadi</p>
      ) : (
        <div>
          {questions.map((q, i) => (
            <div
              key={q._id}
              style={{
                marginBottom: "20px",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>
                  {i + 1}. {q.question}
                </strong>
              </p>
              {q.options.map((opt: string, idx: number) => (
                <label
                  key={idx}
                  style={{ display: "block", marginTop: "6px", cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name={`q-${q._id}`}
                    value={opt}
                    checked={answers[q._id] === opt}
                    onChange={() => handleSelect(q._id, opt)}
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
          ))}

          <button
            onClick={handleFinish}
            style={{
              background: "#6b21a8",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Testni tugatish
          </button>

          {result !== null && (
            <p style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold" }}>
              ✅ Siz {questions.length} ta savoldan {result} tasiga to‘g‘ri javob berdingiz!
            </p>
          )}
        </div>
      )}
      <Navigation />
    </div>
  );
}
