"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Phone, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { CheckoutSummary } from "@/components/CheckoutSummary";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    walletAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock network request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Navigate to success page
    router.push("/confirmation");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-[#013b40]">Checkout details</h1>
      </div>

      <Card className="p-6 md:p-8">
        {/* Order Summary Section */}
        <section className="mb-8">
          <CheckoutSummary />
        </section>

        {/* User Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-[#013b40]">Recipient information</h2>
            
            <Input
              label="Recipient email"
              name="email"
              type="email"
              required
              placeholder="Enter recipient email"
              leftIcon={<Mail className="w-5 h-5" />}
              value={formData.email}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-end">
              <div className="space-y-2">
                 <label className="text-sm font-semibold text-[#013b40] ml-1">
                    Country code
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                       <span className="text-lg">🇳🇬</span>
                    </div>
                    <select className="flex w-full appearance-none rounded-2xl border border-gray-200 bg-white pl-12 pr-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013b40]">
                        <option>+234</option>
                        <option>+1</option>
                        <option>+44</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
              </div>
              <Input
                name="phone"
                type="tel"
                required
                placeholder="800 000 0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <Input
              label="Refund Wallet Address"
              name="walletAddress"
              placeholder="0x..."
              leftIcon={<WalletCards className="w-5 h-5" />}
              value={formData.walletAddress}
              onChange={handleChange}
              className="font-mono text-sm"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-14 text-lg"
              isLoading={loading}
            >
              Confirm and Pay
            </Button>
            
            <p className="text-center text-xs text-gray-500 mt-4 px-4 leading-relaxed">
                By clicking confirm, you agree to NovaCrust's Terms of Service and Privacy Policy. 
                Please ensure the network matches <strong>ERC20</strong> to avoid loss of funds.
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}