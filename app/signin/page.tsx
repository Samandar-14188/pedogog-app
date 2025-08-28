"use client";

import { Form, Input, Button } from "antd";

export default function Signin() {
  const onFinish = (values: any) => {
    console.log("Kirish ma'lumotlari:", values);
    // bu yerda backend API chaqirish (login) yoziladi
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f9fafb",
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Kirish</h2>

        <Form
          name="signin"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Telefon raqam"
            name="phone"
            rules={[
              { required: true, message: "Iltimos, telefon raqamingizni kiriting!" },
              {
                pattern: /^(\+998|998)?[0-9]{9}$/,
                message: "Telefon raqam formati noto‘g‘ri! (masalan: +998901234567)",
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
              Kirish
            </Button>
          </Form.Item>
        </Form>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Hali ro‘yxatdan o‘tmaganmisiz?{" "}
          <a href="/signup">Ro‘yxatdan o‘tish</a>
        </p>
      </div>
    </div>
  );
}
