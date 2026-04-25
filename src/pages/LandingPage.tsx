import { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Check } from 'lucide-react';

type CategoryId = 'vegan' | 'healthy' | 'fast' | 'no-sugar' | 'light';

type Ingredient = {
  icon: string;
  name: string;
};

type Nutrition = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MenuItem = {
  title: string;
  subtitle: string;
  price: number;
  heroImage: string;
  detailImage: string;
  description: string[];
  ingredients: Ingredient[];
  nutrition: Nutrition;
};

const menuCategories: Array<{ id: CategoryId; name: string; img: string }> = [
  { id: 'vegan', name: 'Vegan', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=60' },
  { id: 'healthy', name: 'Healthy', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=150&q=60' },
  { id: 'fast', name: 'Fast', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=60' },
  { id: 'no-sugar', name: 'No sugar', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=150&q=60' },
  { id: 'light', name: 'Light', img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=150&q=60' },
];

const menuCatalog: Record<CategoryId, MenuItem> = {
  vegan: {
    title: 'Garden Bowl with Avocado',
    subtitle: 'Herb quinoa, roasted vegetables and avocado finished with lemon dressing.',
    price: 16.99,
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: [
      'A bright plant-forward bowl built with quinoa, roasted vegetables and fresh seasonal greens.',
      'Creamy avocado, toasted seeds and citrus herbs keep it satisfying without feeling heavy.',
    ],
    ingredients: [
      { icon: '\u{1F35A}', name: 'Quinoa' },
      { icon: '\u{1F951}', name: 'Avocado' },
      { icon: '\u{1F96C}', name: 'Kale' },
      { icon: '\u{1FAD8}', name: 'Chickpeas' },
      { icon: '\u{1F34B}', name: 'Lemon' },
      { icon: '\u{1F96C}', name: 'Beetroot' },
      { icon: '\u{1F331}', name: 'Seeds' },
      { icon: '\u{1F33F}', name: 'Herbs' },
    ],
    nutrition: { kcal: 480, protein: 18, carbs: 52, fat: 20 },
  },
  healthy: {
    title: 'Chicken Roll with Ricotta',
    subtitle: 'Spiced garlic chicken rolled with ricotta and paired with fresh greens.',
    price: 18.99,
    heroImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: [
      'Tender chicken cutlets are filled with ricotta, herbs and a touch of nutmeg before being rolled and roasted.',
      'It arrives with greens and a light savory sauce to keep the plate balanced and high in protein.',
    ],
    ingredients: [
      { icon: '\u{1F357}', name: 'Chicken' },
      { icon: '\u{1F9C0}', name: 'Ricotta Cheese' },
      { icon: '\u{1F96C}', name: 'Swiss Chard' },
      { icon: '\u{1F33F}', name: 'Basil' },
      { icon: '\u{1F9C5}', name: 'Onion' },
      { icon: '\u{1F96C}', name: 'Green Salad' },
      { icon: '\u{1F9C4}', name: 'Garlic' },
      { icon: '\u{1F345}', name: 'Tomato' },
    ],
    nutrition: { kcal: 650, protein: 35, carbs: 50, fat: 28 },
  },
  fast: {
    title: 'Fire-Grilled Pasta Bowl',
    subtitle: 'A quick bowl of pasta, grilled chicken and basil tomato sauce.',
    price: 17.49,
    heroImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    description: [
      'Designed for fast service, this bowl layers pasta with grilled chicken and a rich tomato base.',
      'Fresh basil and shaved parmesan add aroma and depth without slowing down the plate.',
    ],
    ingredients: [
      { icon: '\u{1F35D}', name: 'Pasta' },
      { icon: '\u{1F357}', name: 'Chicken' },
      { icon: '\u{1F33F}', name: 'Basil' },
      { icon: '\u{1F345}', name: 'Tomato' },
      { icon: '\u{1F9C0}', name: 'Parmesan' },
      { icon: '\u{1F9C4}', name: 'Garlic' },
      { icon: '\u{1FAD2}', name: 'Olive Oil' },
      { icon: '\u{1F336}', name: 'Chili' },
    ],
    nutrition: { kcal: 710, protein: 31, carbs: 68, fat: 24 },
  },
  'no-sugar': {
    title: 'Citrus Salmon Plate',
    subtitle: 'Roasted salmon with greens, herbs and a naturally bright citrus finish.',
    price: 21.5,
    heroImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
    description: [
      'This clean plate focuses on roasted salmon, crisp greens and a dressing built without added sugar.',
      'Fresh citrus, dill and olive oil bring enough flavor to keep every bite sharp and balanced.',
    ],
    ingredients: [
      { icon: '\u{1F41F}', name: 'Salmon' },
      { icon: '\u{1F34B}', name: 'Lemon' },
      { icon: '\u{1F33F}', name: 'Dill' },
      { icon: '\u{1F952}', name: 'Cucumber' },
      { icon: '\u{1F96C}', name: 'Asparagus' },
      { icon: '\u{1F96C}', name: 'Greens' },
      { icon: '\u{1FAD2}', name: 'Olive Oil' },
      { icon: '\u{1FAD1}', name: 'Pepper' },
    ],
    nutrition: { kcal: 540, protein: 42, carbs: 14, fat: 30 },
  },
  light: {
    title: 'Summer Salad with Feta',
    subtitle: 'Leafy greens, herbs, feta and crisp vegetables with a light vinaigrette.',
    price: 15.75,
    heroImage: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
    description: [
      'A lighter menu option with crisp lettuce, cucumber, herbs and a clean vinaigrette.',
      'Feta and toasted seeds give the salad enough richness while keeping the finish fresh.',
    ],
    ingredients: [
      { icon: '\u{1F96C}', name: 'Lettuce' },
      { icon: '\u{1F9C0}', name: 'Feta' },
      { icon: '\u{1F952}', name: 'Cucumber' },
      { icon: '\u{1F955}', name: 'Radish' },
      { icon: '\u{1F33F}', name: 'Mint' },
      { icon: '\u{1F331}', name: 'Seeds' },
      { icon: '\u{1FAD7}', name: 'Vinaigrette' },
      { icon: '\u{1F9C5}', name: 'Onion' },
    ],
    nutrition: { kcal: 430, protein: 22, carbs: 28, fat: 18 },
  },
};

const menuDays = [
  {
    day: '29',
    month: 'Jul',
    note: 'Chef market pick with extra herbs and a brighter citrus finish.',
    priceAdjustment: -1,
    nutritionAdjustment: { kcal: -20, protein: 0, carbs: -2, fat: -1 },
  },
  {
    day: '30',
    month: 'Jul',
    note: 'Prepared with early harvest vegetables for a fresher midday menu.',
    priceAdjustment: -0.5,
    nutritionAdjustment: { kcal: -10, protein: 1, carbs: 0, fat: 0 },
  },
  {
    day: '31',
    month: 'Jul',
    note: 'Today\'s most requested combination, plated for the lunch rush.',
    priceAdjustment: 0,
    nutritionAdjustment: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  },
  {
    day: '01',
    month: 'Aug',
    note: 'Weekend batch with a richer sauce and extra crunch on the finish.',
    priceAdjustment: 0.75,
    nutritionAdjustment: { kcal: 25, protein: 1, carbs: 2, fat: 1 },
  },
  {
    day: '02',
    month: 'Aug',
    note: 'Light Sunday menu with fresh leaves and a cleaner overall finish.',
    priceAdjustment: -0.25,
    nutritionAdjustment: { kcal: -15, protein: 0, carbs: -1, fat: -1 },
  },
];

export default function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>('healthy');

  const selectedDay = menuDays[selectedDateIndex];
  const selectedMenu = menuCatalog[selectedCategoryId];
  const selectedPrice = (selectedMenu.price + selectedDay.priceAdjustment).toFixed(2);
  const selectedDescriptions = [...selectedMenu.description, selectedDay.note];
  const selectedNutrition = [
    { val: String(selectedMenu.nutrition.kcal + selectedDay.nutritionAdjustment.kcal), lbl: 'Kcal' },
    { val: String(selectedMenu.nutrition.protein + selectedDay.nutritionAdjustment.protein), lbl: 'Protein' },
    { val: String(selectedMenu.nutrition.carbs + selectedDay.nutritionAdjustment.carbs), lbl: 'Carbs' },
    { val: String(selectedMenu.nutrition.fat + selectedDay.nutritionAdjustment.fat), lbl: 'Fat' },
  ];

  return (
    <div className="bg-[#FAFAFA] font-sans overflow-x-hidden text-gray-900 flex-1 w-full relative">
      {/* Navigation removed - using global Header */}

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 md:pt-20 xl:min-h-[75vh] flex flex-col lg:flex-row items-center max-w-[1400px] mx-auto">
        {/* Background abstract elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/40 rounded-full blur-3xl opacity-60 mix-blend-multiply translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute sm:top-24 sm:left-24 top-10 left-10 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute top-[30%] sm:right-1/3 right-1/4 w-3.5 h-3.5 bg-red-500 rotate-45 transform"></div>
          <div className="absolute bottom-10 center left-[45%] w-3 h-3 bg-yellow-400 rounded-full opacity-70"></div>
          <svg className="absolute top-[45%] left-[-5%] w-[110%] h-[300px] text-green-300 opacity-60" preserveAspectRatio="none" viewBox="0 0 1000 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 10">
            <path d="M0,150 Q150,50 300,100 T600,150 T900,80 T1100,120"/>
          </svg>
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-[45%] lg:pr-12 z-10 text-center lg:text-left">
          <p className="text-[#E86F24] font-semibold text-sm mb-4 tracking-wide font-sans">Get Your best food here!</p>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-serif leading-[1.1] text-gray-900 mb-6 font-medium">
            Welcome to the <br className="hidden lg:block" /> Varivo bistro!
          </h1>
          <p className="text-gray-500/90 text-lg md:text-[1.1rem] max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
            Fresh, traditional dishes prepared daily and delivered straight to your doorstep.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="bg-[#E86F24] hover:bg-[#d4621c] text-white px-10 py-4 lg:py-5 rounded-2xl font-medium transition-colors shadow-[0_10px_25px_-5px_#E86F24] hover:shadow-[0_15px_30px_-5px_#E86F24] text-[15px]"
          >
            Order Now
          </button>
        </div>

        {/* Right Content - Giant Bowl */}
        <div className="w-full lg:w-[55%] mt-20 lg:mt-0 relative flex justify-center lg:justify-end z-10">
          <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px]">
            {/* The giant bowl */}
            <div className="absolute inset-0 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-10 bg-white flex items-center justify-center">
              <div className="w-[98%] h-[98%] rounded-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1600&q=80" alt="Varivo Special Dish" className="w-full h-full object-cover scale-[1.02]" />
              </div>
            </div>

            {/* Floating mini bowls */}
            <div className="absolute top-[65%] -left-6 sm:-left-16 w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] rounded-full shadow-2xl overflow-hidden z-20 transition-transform bg-white p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80" alt="Salad" className="w-full h-full object-cover scale-110" />
              </div>
            </div>

            <div className="absolute -bottom-8 left-16 sm:bottom-0 sm:left-32 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-full shadow-2xl overflow-hidden z-20 bg-white p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" alt="Grilled" className="w-full h-full object-cover scale-110" />
              </div>
            </div>

            <div className="absolute -bottom-12 right-24 sm:-bottom-8 sm:right-32 w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] rounded-full shadow-2xl overflow-hidden z-20 bg-white p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80" alt="Healthy Plate" className="w-full h-full object-cover scale-110" />
              </div>
            </div>

            <div className="absolute top-[25%] -right-8 sm:-right-16 w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] rounded-full shadow-2xl overflow-hidden z-20 bg-white p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80" alt="Fresh Meal" className="w-full h-full object-cover scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Date & Submenu Slider */}
      <section className="px-6 py-16 flex flex-col items-center mt-10 md:mt-0 relative z-20">
        <div className="flex items-center gap-8 text-gray-300 mb-10">
          <button
            type="button"
            onClick={() => setSelectedDateIndex((current) => (current - 1 + menuDays.length) % menuDays.length)}
            className="hover:text-[#E86F24] transition-colors"
            aria-label="Show previous date"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <div className="flex flex-col items-center leading-none">
            <span className="text-[2.2rem] font-bold text-gray-900 tracking-tight">{selectedDay.day}</span>
            <span className="text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">{selectedDay.month}</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedDateIndex((current) => (current + 1) % menuDays.length)}
            className="hover:text-[#E86F24] transition-colors"
            aria-label="Show next date"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14 text-sm font-semibold max-w-4xl w-full">
          {menuCategories.map((item) => {
            const isActive = item.id === selectedCategoryId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCategoryId(item.id)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
                aria-pressed={isActive}
              >
                <div className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full p-1 transition-all duration-300 ${isActive ? 'border-2 border-[#E86F24] scale-110 drop-shadow-md' : 'border-2 border-transparent scale-100 group-hover:scale-105 opacity-60 group-hover:opacity-100'}`}>
                  <img src={item.img} alt={item.name} className="w-full h-full rounded-full object-cover shadow-inner" />
                </div>
                <span className={`text-[11px] tracking-widest uppercase mt-1 ${isActive ? 'text-[#E86F24]' : 'text-gray-400 group-hover:text-gray-700'}`}>{item.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Product Feature */}
      <section className="px-6 pb-20 pt-10 text-center flex flex-col items-center relative z-20">
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-gray-900 mb-4 tracking-[-0.02em] font-medium">{selectedMenu.title.toUpperCase()}</h2>
        <p className="text-gray-400 text-[15px] max-w-lg mb-8 font-light">{selectedMenu.subtitle} {selectedDay.note}</p>

        <div className="flex items-center gap-6 mb-16">
          <span className="text-[2rem] font-semibold text-[#E86F24]">${selectedPrice}</span>
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="bg-[#E86F24] hover:bg-[#d4621c] text-white px-7 py-3 rounded-full font-medium transition-all shadow-[0_8px_20px_-5px_#E86F24] text-[15px] flex items-center gap-2.5"
          >
            <ShoppingCart size={18} /> Add to cart
          </button>
        </div>

        <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full mx-auto flex items-center justify-center -mt-8">
          <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="43"
                stroke="#F07A24"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="6 7"
                opacity="0.95"
              />
            </svg>
          </div>
          <div className="w-[74%] h-[74%] rounded-full overflow-hidden relative shadow-[0_22px_42px_-10px_rgba(0,0,0,0.28)]">
            <img src={selectedMenu.heroImage} alt={selectedMenu.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Detail Text Section */}
      <section className="px-6 py-24 mb-10 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-2 relative">
          <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full mx-auto md:ml-auto md:mr-0 flex items-center justify-center">
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="43"
                  stroke="#F07A24"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="6 7"
                  opacity="0.95"
                />
              </svg>
            </div>
            <div className="w-[74%] h-[74%] rounded-full overflow-hidden relative shadow-[0_22px_42px_-10px_rgba(0,0,0,0.22)] bg-white p-1.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={selectedMenu.detailImage}
                  alt={selectedMenu.title}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = selectedMenu.heroImage;
                  }}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-1 text-center md:text-left">
          <h3 className="text-[2.2rem] font-serif text-gray-900 mb-8 leading-tight font-medium">{selectedMenu.title}</h3>
          <div className="space-y-6 text-gray-500/80 text-[16px] leading-relaxed font-light">
            {selectedDescriptions.map((paragraph, index) => (
              <p key={paragraph} className={index === selectedDescriptions.length - 1 ? 'font-medium text-gray-600' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Box */}
      <section className="px-6 py-8 max-w-[1200px] mx-auto">
        <div className="bg-[#F8F9FA]/80 rounded-[2.5rem] p-8 md:p-10 lg:p-14 border border-gray-100 shadow-[inset_0_2px_20px_rgba(0,0,0,0.01)] backdrop-blur-sm relative overflow-hidden">
          <h3 className="text-3xl md:text-[3rem] font-serif text-center text-gray-900 mb-10 md:mb-12 font-medium">Ingredients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {selectedMenu.ingredients.map((ing) => (
              <div key={ing.name} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] border border-gray-100/80 min-h-[72px]">
                <span className="text-[22px] leading-none shrink-0">{ing.icon}</span>
                <span className="text-[15px] font-medium text-gray-800">{ing.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition info */}
      <section className="px-6 pb-32 pt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-serif text-center text-gray-900 mb-12 font-medium">Nutrition</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
          {selectedNutrition.map((nut) => (
            <div key={nut.lbl} className="bg-white flex flex-col items-center justify-center py-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
              <span className="text-3xl font-serif font-semibold text-gray-900 tracking-tight">{nut.val}</span>
              <span className="text-[11px] font-medium text-gray-400 mt-2 flex flex-col items-center gap-1.5 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E86F24]"></div>
                {nut.lbl}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="relative w-full min-h-[290px] md:min-h-[320px] flex items-center justify-center overflow-hidden mb-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80"
          alt="Pot"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.36)_55%,rgba(0,0,0,0.42)_100%)]"></div>
        <div className="relative z-10 text-center px-6 max-w-[760px] mx-auto py-14 md:py-16">
          <h2 className="text-[2.4rem] md:text-[3.1rem] font-serif text-white mb-6 tracking-tight leading-[1.02]">
            Ready to enjoy
            <br />
            your meal?
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-10 gap-y-3 mb-7 text-[13px] md:text-[14px] text-white/90 font-medium">
            <div className="flex items-center gap-1.5"><Check size={14} strokeWidth={3} className="text-white"/> <span>Fresh ingredients</span></div>
            <div className="flex items-center gap-1.5"><Check size={14} strokeWidth={3} className="text-white"/> <span>Ready in 10 mins</span></div>
            <div className="flex items-center gap-1.5"><Check size={14} strokeWidth={3} className="text-white"/> <span>Delivered daily</span></div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="bg-[#E86F24] hover:bg-[#d4621c] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_10px_24px_-8px_#E86F24] text-[14px]"
          >
            Select Meal
          </button>
        </div>
      </section>
    </div>
  );
}
