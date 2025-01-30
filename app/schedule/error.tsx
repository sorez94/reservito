'use client'; // Must be a Client Component

import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    console.log(error)
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>خطایی رخ داده است!</h2>
            <p>{error.message || "خطای غیرمنتظره‌ای رخ داده است."}</p>
            <button
                onClick={() => reset()} // Retry logic: reset the error boundary
                style={{
                    padding: "10px 20px",
                    marginTop: "10px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                تلاش مجدد
            </button>
        </div>
    );
}
