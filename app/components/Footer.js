"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // 获取当前访问次数
    fetch("/api/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.visits))
      .catch(console.error);

    // 更新访问次数
    fetch("/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisits(data.visits))
      .catch(console.error);
  }, []);

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500">
            © 2024 AIsearch. All rights reserved.
          </div>
          <div className="text-gray-500">
            访问人数：{visits.toLocaleString()}
          </div>
        </div>
      </div>
    </footer>
  );
}
