import React from "react";
import { Copy, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export const CheckoutSummary = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, toast notification here
  };

  return (
    <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 space-y-4 mb-8">
      <div className="flex justify-between items-center group cursor-pointer" onClick={() => handleCopy("1.00 ETH")}>
        <span className="text-gray-500 text-sm font-medium">You pay</span>
        <div className="flex items-center gap-2 text-[#013b40] font-bold text-lg">
           1.00 ETH
           <Copy className="w-4 h-4 text-gray-400 group-hover:text-[#013b40] transition-colors" />
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm font-medium">Network</span>
        <span className="text-[#013b40] font-semibold">Ethereum (ERC20)</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm font-medium">To Wallet</span>
        <div className="flex items-center gap-2">
            <span className="text-[#013b40] font-semibold">NovaCrust Vault</span>
        </div>
      </div>
      
      <div className="h-px bg-gray-200 w-full my-2" />
      
       <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm font-medium">You receive</span>
        <div className="flex items-center gap-2">
             <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md text-sm">≈ 3,845,200.00 NGN</span>
        </div>
      </div>
    </div>
  );
};