import { Check, MapPin } from 'lucide-react';

const orderStatuses = [
  { label: 'Order Placed', tone: 'orange' },
  { label: 'Order Ready', tone: 'orange' },
  { label: 'Order Picked Up', tone: 'orange' },
  { label: 'Order Completed', tone: 'green' },
] as const;

export default function OrderSuccessPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-white font-sans overflow-x-hidden text-gray-900 mx-auto w-full flex-1">
      {/* Navigation removed - using global Header */}

      {/* Success Notification Hero */}
      <div className="bg-gradient-to-b from-[#F2FFF7]/60 to-white pt-10 pb-16 mt-[-100px] pt-[140px]">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_0_4px_10px_rgba(0,0,0,0.02)]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-[3.25rem] h-[3.25rem] rounded-full border-[3px] border-[#2ECA6B] flex items-center justify-center">
                <Check size={28} className="text-[#2ECA6B]" strokeWidth={3.5} />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 tracking-tight font-medium">Order Placed Successfully!</h1>
          <p className="text-gray-400 text-[15px] max-w-md mx-auto leading-relaxed">
            Thank you for your order! Your delicious meal is being prepared and will be delivered within 30-45 minutes.
          </p>
        </div>
      </div>

      <main className="max-w-[1100px] mx-auto px-6 py-4 min-h-[60vh]">
        
        {/* Map Placeholder */}
        <div className="w-full h-[220px] md:h-[280px] rounded-[1.5rem] overflow-hidden relative shadow-sm border border-gray-100 mb-6 bg-[#E5EADD]">
          {/* Abstract Map Background Simulation using CSS and image blend */}
          <div className="absolute inset-0 bg-[#f0f4eb]">
            <div className="absolute top-1/4 left-[-10%] w-[120%] h-3 bg-white transform -rotate-6"></div>
            <div className="absolute top-1/2 left-[-10%] w-[120%] h-4 bg-white transform rotate-3"></div>
            <div className="absolute top-[-10%] left-1/3 w-3 h-[120%] bg-white transform rotate-12"></div>
            <div className="absolute top-[-10%] left-2/3 w-2 h-[120%] bg-white transform -rotate-12"></div>
            <div className="absolute top-1/3 left-0 w-full h-8 bg-[#D0E8E1] transform rotate-12 opacity-80"></div>
          </div>
          {/* Noise/Texture Overlays */}
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Map Texture" className="w-full h-full object-cover opacity-15 mix-blend-overlay max-h-none block" />
          
          <div className="absolute inset-0 flex items-center justify-center -mt-6">
            <div className="flex flex-col items-center drop-shadow-md">
               <MapPin size={36} className="text-[#E86F24] fill-white" strokeWidth={1.5} />
               <div className="w-2 h-1 bg-black/20 rounded-[100%] mt-1 blur-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="text-[11px] font-medium mb-8 text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
          <button onClick={() => onNavigate('landing')} className="hover:text-gray-700 transition-colors">Home</button> 
          <span>/</span> 
          <button onClick={() => onNavigate('cart')} className="hover:text-gray-700 transition-colors">Cart</button> 
          <span>/</span> 
          <button onClick={() => onNavigate('checkout')} className="hover:text-gray-700 transition-colors">Checkout</button> 
          <span>/</span> 
          <span className="text-[#E86F24]">Order Tracking</span>
        </div>

        {/* Order Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight">Order <span className="text-gray-400 font-light">#1024</span></h2>
          
          <div className="flex flex-wrap items-center gap-4">
             <div className="border border-gray-200 text-gray-500 font-medium px-6 py-3 rounded-full text-[13px] bg-white">
               +101 9249 9293 192
             </div>
             <button className="bg-[#E86F24] hover:bg-[#d4621c] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm text-[13px]">
               Mark as complete
             </button>
          </div>
        </div>

        {/* Status Row */}
        <div className="mb-12 mt-4 flex flex-wrap items-center gap-3">
          {orderStatuses.map((status) => (
            <div
              key={status.label}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold border ${
                status.tone === 'green'
                  ? 'bg-[#EAF6ED] text-[#2CA745] border-[#D7EFDD]'
                  : 'bg-[#FFF2E8] text-[#E86F24] border-[#FFE1CF]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  status.tone === 'green' ? 'bg-[#2CA745]/12 text-[#2CA745]' : 'bg-[#E86F24]/12 text-[#E86F24]'
                }`}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{status.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Order Details box */}
          <div>
            <h3 className="text-[1.15rem] font-semibold text-gray-900 mb-5 tracking-tight font-sans">Order Details</h3>
            <div className="space-y-6">
              
              <div className="space-y-1">
                <p className="text-[11px] text-gray-400 font-medium">Order ID</p>
                <p className="text-[14px] text-gray-900 font-semibold tracking-wide">1024</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-[11px] text-gray-400 font-medium">Order Time</p>
                <p className="text-[14px] text-gray-900 font-semibold tracking-wide">08-01-2024 • 01:55 PM</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] text-gray-400 font-medium">Payment Method</p>
                <p className="text-[14px] text-gray-900 font-semibold tracking-wide">Cash</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] text-gray-400 font-medium">Store Address</p>
                <p className="text-[14px] text-gray-900 font-semibold tracking-wide">1033 West Glebe Road Alexandria VA 22305</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] text-gray-400 font-medium">Utensils & Condiments</p>
                <p className="text-[14px] text-gray-900 font-semibold tracking-wide">Included</p>
              </div>

            </div>
          </div>

          {/* Order Summary box */}
          <div>
            <h3 className="text-[1.15rem] font-semibold text-gray-900 mb-5 tracking-tight font-sans">Order Summary</h3>
            <div className="space-y-6">
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-gray-700">x2 Kung Pao Chicken</span>
                  <span className="text-[13px] font-semibold text-gray-900">$4.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-gray-700">x3 Chow Foon</span>
                  <span className="text-[13px] font-semibold text-gray-900">$12.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-gray-700">x1 Fried Rice</span>
                  <span className="text-[13px] font-semibold text-gray-900">$8.00</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200/60 mb-6"></div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-gray-500">Subtotal</span>
                  <span className="text-[13px] font-semibold text-gray-900">$24.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-gray-500">Service Charges</span>
                  <span className="text-[13px] font-semibold text-gray-900">$1.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-gray-500">Tax</span>
                  <span className="text-[13px] font-semibold text-gray-900">$1.44</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200/60 mb-6"></div>

              <div className="flex justify-between items-center">
                <span className="text-[16px] font-semibold text-gray-900 tracking-tight">Total</span>
                <span className="text-[1.25rem] font-bold text-gray-900 tracking-tight">$26.44</span>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
