"use client"

import { useState } from "react"

export default function ReviewForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // convert image → base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const submitReview = async () => {
    if (!name || !message) return alert("Please fill all fields")

    setLoading(true)

    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          text: message,
          image: image || `https://i.pravatar.cc/150?u=${name}`,
        }),
      })

      setName("")
      setMessage("")
      setImage(null)

      window.dispatchEvent(new Event("review-submitted"))
    } catch (err) {
      alert("Failed to submit review")
    }

    setLoading(false)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full h-full flex flex-col justify-between">

      <div>
        <h2 className="text-xl font-serif mb-4 text-spa-brown">
          Leave a Review
        </h2>

        {/* NAME */}
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* IMAGE UPLOAD (NOW AFTER NAME) */}
        <input
          type="file"
          accept="image/*"
          className="w-full text-sm mb-3"
          onChange={handleImageUpload}
        />

        {/* IMAGE PREVIEW */}
        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt="preview"
              className="w-16 h-16 rounded-full object-cover border"
            />
          </div>
        )}

        {/* REVIEW TEXT */}
        <textarea
          className="w-full border p-2 rounded h-24"
          placeholder="Your review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={submitReview}
        disabled={loading}
        className="bg-spa-orange text-white w-full py-2 rounded-full"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  )
}