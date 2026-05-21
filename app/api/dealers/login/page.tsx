"use client";

import axios from "axios";

import { useRouter } from "next/navigation";

import { useState } from "react";

import {
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

export default function DealerLoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const res =
        await axios.post(
          "/api/dealer/login",
          {
            email,
            password,
          }
        );

      if (res.data.success) {
        router.push(
          "/dealer/dashboard"
        );
      }
    } catch (error: any) {
      setError(
        error.response?.data
          ?.error ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex items-center justify-center p-6">
      <div className="grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-[1300px] w-full">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex bg-black text-white p-16 flex-col justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-white/50 mb-6">
              AVTHAR CERAMICS
            </p>

            <h1 className="text-6xl font-semibold tracking-tight leading-[0.95] mb-8">
              Dealer
              <br />
              Commerce
              <br />
              Portal
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-[500px]">
              Access inventory, bulk ordering,
              invoices, analytics, dealer pricing,
              and enterprise business tools.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-white/50 mb-2">
                Active Dealers
              </p>

              <h2 className="text-4xl font-semibold">
                250+
              </h2>
            </div>

            <div>
              <p className="text-white/50 mb-2">
                Monthly Transactions
              </p>

              <h2 className="text-4xl font-semibold">
                ₹12Cr+
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14 flex items-center">
          <div className="w-full max-w-[500px] mx-auto">
            {/* HEADER */}
            <div className="mb-12">
              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
                Dealer Access
              </p>

              <h2 className="text-5xl font-semibold tracking-tight mb-4">
                Welcome Back
              </h2>

              <p className="text-neutral-500 text-lg">
                Login to access your dealer dashboard and ERP tools.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={
                handleLogin
              }
              className="space-y-6"
            >
              {/* EMAIL */}
              <div>
                <label className="text-sm text-neutral-500 block mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="dealer@company.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full h-16 rounded-2xl border border-black/10 px-6 outline-none focus:border-black transition"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-neutral-500 block mb-3">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    className="w-full h-16 rounded-2xl border border-black/10 px-6 pr-14 outline-none focus:border-black transition"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400"
                  >
                    {showPassword ? (
                      <EyeOff
                        size={20}
                      />
                    ) : (
                      <Eye
                        size={20}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-2xl text-sm">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-16 rounded-2xl bg-black text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Signing In...
                  </>
                ) : (
                  "Login To Dealer Portal"
                )}
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-10 text-center">
              <p className="text-neutral-500 text-sm">
                Enterprise dealer access for authorized partners only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}