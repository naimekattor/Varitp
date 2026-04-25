import { Menu, UtensilsCrossed, Facebook, Twitter, Linkedin, Send } from 'lucide-react';

export default function CheckoutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const summaryItems = [
    { id: 1, name: 'Roast Chicken & Polenta', quantity: 1, price: 18.99, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=150&q=80' },
    { id: 2, name: 'Roast Chicken & Polenta', quantity: 1, price: 18.99, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=150&q=80' },
    { id: 3, name: 'Roast Chicken & Polenta', quantity: 1, price: 18.99, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=150&q=80' }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden text-gray-900 mx-auto w-full flex-1">
      {/* Navigation removed - using global Header */}

      <main className="w-full max-w-[1400px] mx-auto px-6 py-8 md:py-16 min-h-[60vh]">
        {/* Breadcrumb */}
        <div className="text-[13px] font-medium mb-6 text-gray-400 flex items-center gap-1.5">
          <button onClick={() => onNavigate('landing')} className="hover:text-gray-700 transition-colors">Home</button> 
          <span>/</span> 
          <button onClick={() => onNavigate('cart')} className="hover:text-gray-700 transition-colors">Cart</button> 
          <span>/</span> 
          <span className="text-[#E86F24]">Checkout</span>
        </div>

        <h1 className="text-4xl md:text-[2.75rem] font-serif font-medium text-gray-900 mb-10 tracking-tight">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Form Section */}
          <div className="w-full lg:w-[60%] space-y-6">
            
            {/* Personal Information */}
            <div className="bg-white border text-left border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">First Name *</label>
                  <input type="text" placeholder="Enter the Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">Last Name *</label>
                  <input type="text" placeholder="Enter the Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-gray-800">Email Address *</label>
                  <input type="email" placeholder="Enter the Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-gray-800">Phone Number *</label>
                  <input type="tel" placeholder="Enter the Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white border text-left border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">Delivery Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-gray-800">Street Address *</label>
                  <input type="text" placeholder="Enter the Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">City *</label>
                  <input type="text" placeholder="Enter the Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">ZIP Code *</label>
                  <input type="text" placeholder="Enter the Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <div className="bg-orange-50/50 text-[#E86F24] text-[13px] font-medium py-3.5 px-5 rounded-xl border border-[#FFE4D6]">
                    Estimated Delivery: 30-45 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white border border-gray-100 text-left shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">Payment Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-gray-800">Cardholder Name *</label>
                  <input type="text" placeholder="Enter the Card Holder Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-gray-800">Card Number *</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300 tracking-[0.1em]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">Expiry Date *</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-gray-800">CVV *</label>
                  <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <div className="bg-[#FAF9F8] text-gray-400 text-[12px] font-medium py-3.5 px-5 rounded-xl border border-gray-100 text-center sm:text-left">
                    Your payment information is encrypted and secure. We do not store your card details.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-10 lg:pb-0">
               <button onClick={() => onNavigate('cart')} className="flex-[0.4] bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 py-3.5 rounded-xl font-medium transition-colors text-[14px]">
                 Back
               </button>
               <button onClick={() => onNavigate('success')} className="flex-1 bg-[#E86F24] hover:bg-[#d4621c] text-white py-3.5 rounded-xl font-medium transition-colors text-[14px] shadow-sm">
                 Place order
               </button>
            </div>
          </div>

          {/* Right Summary Sidebar */}
          <div className="w-full lg:w-[40%] bg-[#FAF9F8] border border-gray-100 rounded-[1.5rem] p-8 md:p-10 sticky top-8 shadow-sm">
            <h2 className="text-[1.4rem] font-serif font-medium text-gray-900 mb-8 tracking-tight">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-5 mb-8">
              {summaryItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                   <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-gray-100 shadow-sm p-1">
                     <img src={item.image} alt={item.name} className="w-[90%] h-[90%] object-cover rounded-md" />
                   </div>
                   <div className="flex-1">
                     <h4 className="text-[12px] font-semibold text-gray-900 leading-tight">{item.name}</h4>
                     <p className="text-[10px] text-gray-400 mt-1">x {item.quantity}</p>
                   </div>
                   <div className="text-[12px] font-bold text-gray-900">
                     ${item.price.toFixed(2)}
                   </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="flex gap-2 mb-8">
              <input type="text" placeholder="Promo code" className="flex-1 bg-white border border-gray-200 px-4 py-2.5 rounded-lg text-[13px] outline-none focus:border-[#E86F24] transition-colors placeholder:text-gray-300" />
              <button className="bg-[#2D2D2D] hover:bg-black text-white px-6 py-2.5 rounded-lg text-[13px] font-medium transition-colors shadow-sm">
                Apply
              </button>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4 text-[13px] font-medium border-b border-gray-200/60 pb-6 mb-6">
              <div className="flex justify-between items-center text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-900 font-semibold">$68.97</span>
              </div>
              <div className="flex justify-between items-center text-gray-500">
                <span>Delivery Fee</span>
                <span className="text-gray-900 font-semibold">$4.99</span>
              </div>
              <div className="flex justify-between items-center text-gray-500">
                <span>Tax</span>
                <span className="text-gray-900 font-semibold">$6.90</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <span className="text-[1rem] font-semibold text-gray-900">Total</span>
              <span className="text-[1.7rem] font-bold text-[#E86F24] tracking-tight">${(68.97 + 4.99 + 6.90).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
