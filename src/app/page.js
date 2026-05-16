"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [limit, setLimit] = useState(10);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    async function fetchNotifications() {
      const response = await fetch("/api/notifications");
      const data = await response.json();

      setNotifications(data.notifications || []);
    }

    fetchNotifications();
  }, []);

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <Link href="/priority">
        <button style={{ marginBottom: "20px" }}>
          Priority Notifications
        </button>
      </Link>

      <div>
        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Event")}>
          Event
        </button>

        <button onClick={() => setFilter("Result")}>
          Result
        </button>

        <button onClick={() => setFilter("Placement")}>
          Placement
        </button>
      </div>

      <br />

      <label>Show top: </label>

      <select
        value={limit}
        onChange={(e) =>
          setLimit(Number(e.target.value))
        }
      >
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>

      <br />
      <br />

      {filtered
        .slice(0, limit)
        .map((item) => (
          <div
            key={item.ID}
            onClick={() =>
              setViewed([...viewed, item.ID])
            }
            style={{
              border: "1px solid gray",
              marginBottom: "10px",
              padding: "10px",
              cursor: "pointer",
              backgroundColor:
                viewed.includes(item.ID)
                  ? "#eeeeee"
                  : "#ccffcc",
            }}
          >
            <h3>{item.Type}</h3>

            <p>{item.Message}</p>

            <small>
              {item.Timestamp}
            </small>
          </div>
        ))}
    </div>
  );
}