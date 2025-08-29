"use client";

import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const res = await fetch("https://pedagogika-backend.onrender.com/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        message.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
        router.push("/signin"); // foydalanuvchini login sahifasiga yuboramiz
      } else {
        message.error(data.message || "Xatolik yuz berdi!");
      }
    } catch (err) {
      message.error("Server bilan bog‘lanishda xatolik!");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "24px",
          borderRadius: "12px",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Ro‘yxatdan o‘tish</h2>

        <Form name="signup" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Ism"
            name="name"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input placeholder="Ismingiz" />
          </Form.Item>

          <Form.Item
            label="Telefon raqam"
            name="phone"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting!" },
              {
                pattern: /^(\+998|998)?[0-9]{9}$/,
                message: "Telefon raqam noto‘g‘ri! (+998901234567)",
              },
            ]}
          >
            <Input type="tel" placeholder="+998 90 123 45 67" />
          </Form.Item>

          <Form.Item
            label="Parol"
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password placeholder="********" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Ro‘yxatdan o‘tish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
