import React from 'react';
import { STORE_POLICIES } from '../data/storeData';
import { Truck, RotateCcw, ShieldCheck, Package, Clock, HelpCircle, HeartHandshake } from 'lucide-react';
import { formatINR } from '../utils/currency';

export const PoliciesSection: React.FC = () => {
  return (
    <section id="policies-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F9D5DD] text-[#8C6547] text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Customer Trust & Delivery Pledges</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
            Clear Policies. Zero Surprises.
          </h2>
          <p className="text-xs sm:text-sm text-[#8C6547]">
            Because genuine skincare should be backed by transparent practices and honest consumer guarantees.
          </p>
        </div>

        {/* 3 Main Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Delivery */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4DC] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8EFE9] text-[#3F5845] flex items-center justify-center">
              <Truck className="w-6 h-6 text-[#5F7F67]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-serif font-bold text-[#4A3728]">
                Carbon-Neutral Delivery
              </h3>
              <p className="text-xs text-[#8C6547]">
                Free on all orders over {formatINR(STORE_POLICIES.shipping.freeThreshold)}
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#5A3E2B] leading-relaxed">
              <p>
                <strong>Dispatch: </strong>{STORE_POLICIES.shipping.handlingTime}.
              </p>
              <p>
                <strong>Domestic (US & India): </strong>{STORE_POLICIES.shipping.standardDeliveryTime}.
              </p>
              <p>
                <strong>International: </strong>{STORE_POLICIES.shipping.internationalDeliveryTime}.
              </p>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#EBE4DC] text-[11px] text-[#8C6547]">
                <strong>Packaging: </strong>{STORE_POLICIES.shipping.packagingPledge}
              </div>
            </div>
          </div>

          {/* 2. Returns & Guarantee */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4DC] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FCE7EC] text-[#8C6547] flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-[#8C6547]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-serif font-bold text-[#4A3728]">
                30-Day Pure Glow Guarantee
              </h3>
              <p className="text-xs text-[#8C6547]">
                100% skin satisfaction promise
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#5A3E2B] leading-relaxed">
              <p>{STORE_POLICIES.returns.policy}</p>
              <p className="text-[11px] text-[#8C6547]">
                <strong>Transit Damage: </strong>{STORE_POLICIES.returns.damagedPledge}
              </p>
              <div className="p-3 bg-[#E8EFE9] rounded-lg border border-[#CADCCB] text-[11px] text-[#3F5845]">
                <strong>Easy Concierge: </strong>Email concierge@pureglow.com with your order number for an immediate resolution.
              </div>
            </div>
          </div>

          {/* 3. Batch Freshness & MoCRA Standards */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4DC] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#4A3728] flex items-center justify-center border border-[#EBE4DC]">
              <ShieldCheck className="w-6 h-6 text-[#5F7F67]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-serif font-bold text-[#4A3728]">
                MoCRA § 608 Safety Pledge
              </h3>
              <p className="text-xs text-[#8C6547]">
                Strict sanitation & batch traceability
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#5A3E2B] leading-relaxed">
              <p>{STORE_POLICIES.artisanPledge.smallBatch}</p>
              <p>{STORE_POLICIES.artisanPledge.ethicalSourcing}</p>
              <p>{STORE_POLICIES.artisanPledge.crueltyFree}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
