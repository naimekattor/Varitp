import { Menu, UtensilsCrossed } from 'lucide-react';

export default function AllOrdersPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  
  const items = [
    { qty: 2, name: "Kung Pao Chicken", price: "$4.00" },
    { qty: 3, name: "Chow Foon", price: "$12.00" },
    { qty: 1, name: "Fried Rice", price: "$8.00" }
  ];

  const orders = [
    { id: '1024', status: 'New', time: null },
    { id: '1024', status: 'Preparing', time: '15m' },
    { id: '1024', status: 'New', time: null },
    { id: '1024', status: 'Ready', time: '15m' },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 mx-auto w-full overflow-x-hidden flex-1">
      
      {/* Order Nav Tabs (Matching Image) */}
      <div className="w-full flex justify-center lg:justify-start border-b border-gray-100/80 mt-2">
        <div className="max-w-[1240px] w-full mx-auto px-6 flex gap-8 text-[13.5px] font-semibold">
          <button className="text-[#E86F24] border-b-2 border-[#E86F24] pb-4">All orders</button>
          <button className="text-gray-400 pb-4 hover:text-gray-600 transition-colors">Active orders</button>
          <button className="text-gray-400 pb-4 hover:text-gray-600 transition-colors">Ready for pickup</button>
          <button className="text-gray-400 pb-4 hover:text-gray-600 transition-colors">Completed</button>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-6 py-12 min-h-[50vh]">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-[2.75rem] font-serif font-medium text-gray-900 mb-12 tracking-tight">All Orders</h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-10 pb-20">
          
          {orders.map((order, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-[1.25rem] p-6 lg:p-8 flex flex-col shadow-[0_2px_14px_rgba(0,0,0,0.015)]">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                <h2 className="text-[20px] font-medium text-gray-900 font-sans tracking-tight pt-1">
                  Order #{order.id}
                </h2>
                
                {/* Status Badge */}
                {order.status === 'New' && (
                  <span className="bg-[#FFF2E8] text-[#E86F24] px-4 py-1.5 rounded-full text-[13px] font-semibold">New</span>
                )}
                {order.status === 'Preparing' && (
                   <span className="bg-[#FEF5E3] text-[#EAB532] px-4 py-1.5 rounded-full text-[13px] font-semibold">Preparing</span>
                )}
                {order.status === 'Ready' && (
                   <span className="bg-[#EAF6ED] text-[#22C55E] px-4 py-1.5 rounded-full text-[13px] font-semibold">Ready</span>
                )}
              </div>

              {/* Customer Data */}
              <div className="py-6 flex items-center gap-4">
                <div className="w-[52px] h-[52px] bg-[#FFF2E8] text-[#E86F24] rounded-full flex items-center justify-center font-semibold text-[18px]">
                  SJ
                </div>
                <div>
                  <h3 className="text-[17px] text-gray-900 font-semibold mb-0.5">Sarah Johnson</h3>
                  <p className="text-[13px] text-gray-400">+1 555 346 3875</p>
                </div>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-3.5 pb-6 border-b border-gray-100">
                {items.map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center">
                      <div className="text-[13px] font-semibold text-gray-900">
                        <span className="text-[#E86F24] mr-1.5 font-bold">x{item.qty}</span>
                        {item.name}
                      </div>
                      <span className="text-[13.5px] font-bold text-gray-900">{item.price}</span>
                   </div>
                ))}
              </div>

              {/* Prep Time Selector */}
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between py-6 gap-y-4">
                <span className="text-[14.5px] font-semibold text-gray-800">Prep Time:</span>
                <div className="flex gap-2.5">
                  {['5m', '15m', '30m', '45m'].map(t => (
                    <button 
                      key={t}
                      className={`w-[54px] sm:w-[62px] py-[7px] rounded-full text-[13px] font-medium transition-colors ${
                        order.time === t 
                          ? 'bg-[#E86F24] text-white border border-[#E86F24]' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-2 mt-auto">
                {order.status === 'New' || order.status === 'Preparing' ? (
                   <button className="w-full border-[1.5px] border-[#E86F24] text-[#E86F24] hover:bg-[#FFF2E8] transition-colors py-3.5 rounded-[0.8rem] text-[14px] font-semibold">
                     Mark as Ready
                   </button>
                ) : (
                   <>
                     <div className="w-full bg-[#E5F5E8] text-[#2CA745] py-3.5 rounded-[0.8rem] text-center text-[13px] font-semibold mb-3">
                       Customer is notified, Food is ready for pickup
                     </div>
                     <button className="w-full bg-[#E86F24] text-white hover:bg-[#d4621c] transition-colors py-3.5 rounded-[0.8rem] text-[14px] font-semibold shadow-sm">
                       Order Completed
                     </button>
                   </>
                )}
              </div>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
