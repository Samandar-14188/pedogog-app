"use client"; // chunki hook ishlatyapmiz

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./index.css";

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { key: "home", label: "Bosh sahifa", icon: <HomeOutlined />, href: "/" },
    { key: "tests", label: "Testlar", icon: <FileTextOutlined />, href: "/quiz" },
    { key: "profile", label: "Profil", icon: <UserOutlined />, href: "/profil" },
    { key: "about", label: "Biz haqimizda", icon: <InfoCircleOutlined />, href: "/about" },
  ];

  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-bottom-nav-inner">
        {tabs.map((t) => {
          const isActive = pathname === t.href;
          return (
            <Link
              key={t.key}
              href={t.href}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <div className="icon-wrapper">
                {t.key === "tests" ? (
                  <Badge count={1} size="small">
                    {t.icon}
                  </Badge>
                ) : (
                  t.icon
                )}
              </div>
              <span className="nav-label">{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
