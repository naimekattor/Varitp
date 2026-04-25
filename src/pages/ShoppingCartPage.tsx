import { Menu, ShoppingCart as CartIcon, Trash2, Facebook, Twitter, Instagram, Linkedin, Send, UtensilsCrossed } from 'lucide-react';

export default function ShoppingCartPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const cartItems = [
    {
      id: 1,
      name: 'Chicken Roll with Ricotta',
      desc: 'Grilled chicken breast rolled with creamy ricotta cheese and fresh herbs',
      price: 18.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Chicken Roll with Ricotta',
      desc: 'Grilled chicken breast rolled with creamy ricotta cheese and fresh herbs',
      price: 18.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Chicken Roll with Ricotta',
      desc: 'Grilled chicken breast rolled with creamy ricotta cheese and fresh herbs',
      price: 18.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden text-gray-900 mx-auto w-full flex-1">
      {/* Navigation removed - using global Header */}

      <div className="bg-gradient-to-b from-[#FFF5F0]/60 to-white pt-24 pb-12">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="text-[13px] font-medium mb-6 text-gray-400">
            <button onClick={() => onNavigate('landing')} className="hover:text-gray-700 transition-colors">Home</button> / <span className="text-[#E86F24]">Cart</span>
          </div>

          <h1 className="text-4xl md:text-[2.75rem] font-serif font-medium text-gray-900 tracking-tight">Your Shopping Cart</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1400px] mx-auto px-6 pb-8 md:pb-16 min-h-[60vh]">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Cart Items List */}
          <div className="w-full lg:w-[60%] space-y-5">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-6 relative">
                {/* Trash Icon top right desktop, or right edge */}
                <button className="absolute top-5 right-5 text-red-500 hover:text-red-700 transition-colors hover:bg-red-50 p-1.5 rounded-full">
                  <Trash2 size={20} strokeWidth={1.5} />
                </button>

                {/* Item Image */}
                <div className="w-full sm:w-[130px] h-[130px] shrink-0 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2 shadow-inner border border-gray-50">
                  <img src={item.image} alt={item.name} className="w-[90%] h-[90%] object-cover rounded-md" />
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="pr-10">
                    <h3 className="text-xl font-serif text-gray-900 mb-2 leading-tight font-medium">{item.name}</h3>
                    <p className="text-[12px] text-gray-400 leading-relaxed max-w-[95%]">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-6 sm:mt-4">
                    {/* Quantity Control */}
                    <div className="flex items-center bg-[#F8F9FA] rounded-[0.7rem] overflow-hidden border border-gray-100">
                      <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors hover:bg-gray-200/50">
                        <span className="text-lg leading-none select-none">&minus;</span>
                      </button>
                      <span className="w-9 h-9 flex items-center justify-center text-sm font-semibold text-gray-900 select-none bg-white">
                        {item.quantity}
                      </span>
                      <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors hover:bg-gray-200/50">
                        <span className="text-lg leading-none select-none">&#43;</span>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-[1.35rem] font-medium text-[#E86F24] leading-none mb-1">${item.price.toFixed(2)}</div>
                      <div className="text-[10px] text-gray-400">${item.price.toFixed(2)} each</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[40%] bg-[#FAF9F8] border border-gray-100 rounded-[1.5rem] p-8 md:p-10 sticky top-8 shadow-sm">
            <h2 className="text-[1.4rem] font-serif font-medium text-gray-900 mb-8 tracking-tight">Order Summary</h2>
            
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

            <div className="flex justify-between items-end mb-10">
              <span className="text-[1rem] font-semibold text-gray-900">Total</span>
              <span className="text-[1.7rem] font-bold text-[#E86F24] tracking-tight">${(68.97 + 4.99 + 6.90).toFixed(2)}</span>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('checkout')}
                className="w-full bg-[#E86F24] hover:bg-[#d4621c] text-white py-3.5 rounded-xl font-medium transition-colors shadow-sm text-[14px]"
              >
                Proceed to checkout
              </button>
              <button 
                onClick={() => onNavigate('landing')}
                className="w-full bg-white text-[#E86F24] border border-[#E86F24] hover:bg-orange-50 py-3.5 rounded-xl font-medium transition-colors text-[14px]"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
