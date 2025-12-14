"use client";

import React from "react";
import Link from "next/link";
import { Check, Copy, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ConfirmationPage() {
  const [copied, setCopied] = React.useState(false);
  const txId = "NC123456789";

  const handleCopy = () => {
    navigator.clipboard.writeText(txId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-8">
        {/* Brand Logo Mock */}
        <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-[#013b40] rounded-md flex items-center justify-center text-white font-bold text-xl">
                N
             </div>
             <span className="text-2xl font-black text-[#013b40] tracking-tight">NOVACRUST</span>
        </div>

      <Card className="w-full p-8 md:p-12 text-center animate-in">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#27ae60]">
          <Check className="h-10 w-10 text-white stroke-[3]" />
        </div>

        <h1 className="mb-3 text-2xl font-bold text-[#1f2937] md:text-3xl">
          Your transaction is processing.
        </h1>
        <p className="mb-10 text-gray-500 text-lg">
          The recipient will receive it shortly.
        </p>

        {/* Transaction ID Box */}
        <div className="mb-12 rounded-xl bg-gray-50 border border-gray-100 p-5 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-colors" onClick={handleCopy}>
          <div className="flex flex-col items-start">
             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Transaction ID</span>
             <span className="text-[#013b40] font-mono font-medium mt-1">{txId}</span>
          </div>
          <div className="relative">
             <Copy className="h-5 w-5 text-gray-400 group-hover:text-[#013b40]" />
             {copied && (
                 <span className="absolute -top-8 -right-2 bg-black text-white text-xs py-1 px-2 rounded shadow-lg">Copied!</span>
             )}
          </div>
        </div>

        <Link href="/" className="block">
            <span className="text-[#013b40] font-bold text-lg hover:underline cursor-pointer">
                Go back to home
            </span>
        </Link>
      </Card>

       <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure 256-bit encrypted transaction</span>
       </div>
    </div>
  );
}