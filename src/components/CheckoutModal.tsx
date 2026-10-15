import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard, Truck, ArrowRight, ArrowLeft, Printer, Sparkles, Package } from 'lucide-react';
import { STORE_POLICIES } from '../data/storeData';
import { formatINR } from '../utils/currency';
import { PureGlowLogo } from './PureGlowLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  appliedPromo: string;
  onOrderCompleted: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  shipping,
  total,
  appliedPromo,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••'
  });

  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);

  if (!isOpen) return null;

  const handleAutofillDemo = () => {
    setFormData({
      fullName: 'Ganga Bangari',
      email: 'Bangariganga1977@gmail.com',
      phone: '+1 (555) 234-5678',
      address: '742 Evergreen Botanical Way, Suite 4B',
      city: 'Portland',
      state: 'Oregon',
      postalCode: '97201',
      country: 'United States',
      shippingMethod: 'standard',
      paymentMethod: 'card',
      cardNumber: '4242 •••• •••• 8910',
      cardExp: '08/29',
      cardCvc: '381'
    });
  };

  const handlePlaceOrder = () => {
    const orderId = `PG-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderDetails = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      items: [...items],
      subtotal,
      discount,
      shipping,
      total,
      shippingAddress: {
        fullName: formData.fullName || 'Valued Customer',
        email: formData.email || 'customer@example.com',
        address: formData.address || 'Standard Address',
        city: formData.city || 'Portland',
        state: formData.state || 'OR',
        postalCode: formData.postalCode || '97201',
        country: formData.country || 'United States'
      },
      shippingMethod: formData.shippingMethod === 'express' ? 'Artisan Express (1-2 Days)' : 'Carbon-Neutral Standard (3-5 Days)',
      paymentMethod: formData.paymentMethod.toUpperCase()
    };

    setConfirmedOrder(newOrder);
    onOrderCompleted(newOrder);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="checkout-modal-container"
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EBE4DC] animate-in zoom-in-95 duration-200 flex flex-col justify-between"
      >
        {/* Checkout Header */}
        <div className="p-4 sm:p-5 border-b border-[#EBE4DC] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PureGlowLogo size="sm" showSubtitle={false} />
            <span className="text-[#8C6547] text-xs font-mono hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5F7F67]">
              <Lock className="w-3.5 h-3.5 text-[#5F7F67]" />
              <span>{step === 4 ? 'Order Confirmed' : '256-Bit Encrypted'}</span>
            </div>
          </div>

          {step !== 4 && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAutofillDemo}
                className="text-[11px] font-semibold text-[#8C6547] hover:text-[#4A3728] bg-white border border-[#D8C7B8] px-2.5 py-1 rounded-md transition-colors cursor-pointer"
              >
                ⚡ Autofill Demo
              </button>
              <button
                onClick={onClose}
                className="p-1 text-[#8C6547] hover:text-[#4A3728] rounded-md transition-colors cursor-pointer"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Step Progress indicator (if not finished) */}
        {step !== 4 && (
          <div className="bg-white px-6 py-3 border-b border-[#EBE4DC] flex items-center justify-between text-xs text-[#8C6547] font-medium">
            <span className={step >= 1 ? 'text-[#4A3728] font-bold' : ''}>1. Shipping</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#4A3728] font-bold' : ''}>2. Delivery</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#4A3728] font-bold' : ''}>3. Payment</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-8 flex-1">
          {/* STEP 1: Address */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold font-serif text-[#4A3728] uppercase tracking-wider">
                Shipping Destination & Contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ganga Bangari"
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                  />
                </div>

                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">Email Address (Order Updates)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Bangariganga1977@gmail.com"
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#5A3E2B] font-medium mb-1">Street Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street name, apartment, suite"
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                  />
                </div>

                <div>
                  <label className="block text-[#5A3E2B] font-medium mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">State / Region</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                      className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="Zip"
                      className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#5A3E2B] font-medium mb-1">Country / Territory</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-[#FAF7F2] text-[#4A3728] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#8C6547]"
                  >
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Delivery Method */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold font-serif text-[#4A3728] uppercase tracking-wider">
                Select Delivery Method
              </h3>

              <div className="space-y-3">
                <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  formData.shippingMethod === 'standard'
                    ? 'border-[#4A3728] bg-[#FAF7F2] shadow-xs'
                    : 'border-[#EBE4DC] bg-white hover:bg-[#FAF7F2]/50'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={() => setFormData({ ...formData, shippingMethod: 'standard' })}
                      className="mt-1 text-[#4A3728] focus:ring-[#8C6547]"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#4A3728]">
                        Carbon-Neutral Standard Delivery (3-5 Business Days)
                      </div>
                      <p className="text-xs text-[#8C6547] mt-0.5">
                        Biodegradable packaging, butter paper wrap, corrugated cardboard mailer.
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#3F5845]">
                    {shipping === 0 ? 'FREE' : formatINR(shipping)}
                  </div>
                </label>

                <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  formData.shippingMethod === 'express'
                    ? 'border-[#4A3728] bg-[#FAF7F2] shadow-xs'
                    : 'border-[#EBE4DC] bg-white hover:bg-[#FAF7F2]/50'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={formData.shippingMethod === 'express'}
                      onChange={() => setFormData({ ...formData, shippingMethod: 'express' })}
                      className="mt-1 text-[#4A3728] focus:ring-[#8C6547]"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#4A3728]">
                        Priority Artisan Air (1-2 Business Days)
                      </div>
                      <p className="text-xs text-[#8C6547] mt-0.5">
                        Priority cured-batch selection and expedited courier handling.
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#4A3728]">
                    +{formatINR(STORE_POLICIES.shipping.expressRate)}
                  </div>
                </label>
              </div>

              <div className="p-3.5 bg-[#E8EFE9] border border-[#CADCCB] rounded-xl text-xs text-[#3F5845] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#5F7F67] shrink-0 mt-0.5" />
                <p>
                  <strong>Freshness Guarantee: </strong>Every soap bar is inspected and wrapped in protective unbleached butter paper to ensure zero sweat or softening during transit.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold font-serif text-[#4A3728] uppercase tracking-wider">
                Payment Method & Order Summary
              </h3>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 rounded-xl border text-center font-medium cursor-pointer transition-colors ${
                    formData.paymentMethod === 'card'
                      ? 'bg-[#4A3728] text-white border-[#4A3728]'
                      : 'bg-[#FAF7F2] text-[#4A3728] border-[#D8C7B8]'
                  }`}
                >
                  Credit / Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'apple_pay' })}
                  className={`p-3 rounded-xl border text-center font-medium cursor-pointer transition-colors ${
                    formData.paymentMethod === 'apple_pay'
                      ? 'bg-[#4A3728] text-white border-[#4A3728]'
                      : 'bg-[#FAF7F2] text-[#4A3728] border-[#D8C7B8]'
                  }`}
                >
                  Apple Pay / GPay
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`p-3 rounded-xl border text-center font-medium cursor-pointer transition-colors ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-[#4A3728] text-white border-[#4A3728]'
                      : 'bg-[#FAF7F2] text-[#4A3728] border-[#D8C7B8]'
                  }`}
                >
                  Pay on Delivery
                </button>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="p-4 bg-[#FAF7F2] border border-[#EBE4DC] rounded-xl space-y-3 text-xs">
                  <div>
                    <label className="block text-[#5A3E2B] font-medium mb-1">Card Number</label>
                    <div className="relative">
                      <CreditCard className="w-4 h-4 text-[#8C6547] absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 border border-[#D8C7B8] rounded-lg bg-white text-[#4A3728] font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#5A3E2B] font-medium mb-1">Expiration Date</label>
                      <input
                        type="text"
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-white text-[#4A3728] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5A3E2B] font-medium mb-1">CVV / Security Code</label>
                      <input
                        type="text"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full p-2.5 border border-[#D8C7B8] rounded-lg bg-white text-[#4A3728] font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Order Final Overview */}
              <div className="p-4 bg-white border border-[#EBE4DC] rounded-xl text-xs space-y-1.5">
                <div className="flex justify-between text-[#8C6547]">
                  <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                  <span className="font-mono">{formatINR(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#3F5845]">
                    <span>Discount ({appliedPromo})</span>
                    <span className="font-mono">-{formatINR(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#8C6547]">
                  <span>Shipping</span>
                  <span className="font-mono">{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#4A3728] pt-2 border-t border-[#EBE4DC]">
                  <span>Grand Total</span>
                  <span className="font-mono">{formatINR(total)}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Order Confirmed Screen */}
          {step === 4 && confirmedOrder && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#E8EFE9] text-[#3F5845] mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-[#5F7F67]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#4A3728]">
                  Thank You, {confirmedOrder.shippingAddress.fullName}!
                </h3>
                <p className="text-xs text-[#8C6547]">
                  Your order has been received by the Pure Glow workshop in India.
                </p>
                <div className="inline-block mt-2 px-3 py-1 bg-[#FAF7F2] border border-[#EBE4DC] rounded-lg font-mono text-xs text-[#4A3728] font-bold">
                  Order ID: {confirmedOrder.orderId}
                </div>
              </div>

              {/* Order Summary Receipt Box */}
              <div className="bg-[#FAF7F2] border border-[#EBE4DC] rounded-xl p-5 text-left text-xs space-y-3 font-sans">
                <div className="flex items-center justify-between border-b border-[#EBE4DC] pb-2 font-mono text-[11px] text-[#8C6547]">
                  <span>Date: {confirmedOrder.date}</span>
                  <span>Payment: {confirmedOrder.paymentMethod}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-bold text-[#4A3728] block">Items in this Batch:</span>
                  {confirmedOrder.items.map((i) => (
                    <div key={i.product.id} className="flex justify-between text-[#5A3E2B]">
                      <span>{i.quantity}x {i.product.name} ({i.product.weightVolume})</span>
                      <span className="font-mono">{formatINR(i.product.price * i.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#EBE4DC] space-y-1">
                  <div className="flex justify-between text-[#8C6547]">
                    <span>Shipping To:</span>
                    <span>{confirmedOrder.shippingAddress.address}, {confirmedOrder.shippingAddress.city}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#4A3728] pt-1">
                    <span>Total Paid:</span>
                    <span className="font-mono">{formatINR(confirmedOrder.total)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 border border-[#D8C7B8] text-[#4A3728] text-xs font-semibold rounded-full hover:bg-[#FAF7F2] flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#4A3728] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#362419] transition-all cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Steps 1-3) */}
        {step !== 4 && (
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border-t border-[#EBE4DC] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                className="px-4 py-2 text-xs font-semibold text-[#8C6547] hover:text-[#4A3728] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !formData.fullName) {
                    handleAutofillDemo();
                  }
                  setStep((step + 1) as 1 | 2 | 3);
                }}
                className="px-6 py-2.5 bg-[#4A3728] hover:bg-[#362419] text-[#FAF7F2] text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FCE7EC]" />
              </button>
            ) : (
              <button
                id="place-order-final-button"
                type="button"
                onClick={handlePlaceOrder}
                className="px-8 py-3 bg-[#5F7F67] hover:bg-[#4E6F56] text-white text-xs font-bold rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Place Order ({formatINR(total)})</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
