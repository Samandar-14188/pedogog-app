"use client";

import { Form, Input, Button } from "antd";

export default function Signup() {
  const onFinish = (values: any) => {
    console.log("Ro‘yxatdan o‘tish ma'lumotlari:", values);
    // bu yerda backend API chaqirib, foydalanuvchini bazaga qo‘shish mumkin
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

        <Form
          name="signup"
          layout="vertical"
          onFinish={onFinish}
        >
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

          <Form.Item
            label="Parolni tasdiqlash"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Parolni qayta kiriting!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Parollar mos emas!"));
                },
              }),
            ]}
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
