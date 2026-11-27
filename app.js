/* Lazord Menu - edit CFG / data below */
const CFG={
 phone:"01027455555", whatsapp:"201027455555",
 instagram:"https://www.instagram.com/laz0rd1?jplx=eW4wcWQ2cjE4bHRh",
 facebook:"https://www.facebook.com/share/1MvZFjRahL/",
 map:"https://maps.app.goo.gl/KihcEQGLdeWhVBa5A",
 prod:"IMG-20261127-WA", logo:"logo.png",
 devIG:"https://instagram.com/q_7vmza", devWA:"https://wa.me/201066350362"
};
const EN_ADDR="Kafr El Sheikh - Chill Out Mall - in front of Sanaa Park";
const AR_ADDR="كفر الشيخ - مول chill out - أمام حديقة صنعاء";
/* ===== DATA ===== */
const CATS=[
{id:"hot",ar:"مشروبات ساخنة",en:"Hot Drinks",d:["شاي وقهوة وكل الساخن","على أصولها"],addons:1,g:[{im:[80,84,82,81,83,85,87,88,89,9002,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],items:[["شاي",,40],["شاي نكهات",,50],["شاي كرك",,85],["شاي حليب",,85],["قهوة تركي سنجل",,60],["قهوة تركي دبل",,70],["قهوة فرنساوي",,70],["قهوة بندق",,70],["قهوة نوتيلا",,75],["اسبريسو سنجل",,60],["اسبريسو دبل",,70],["اسبريسو ميكاتو",,75],["اسبريسو افوكادو",,80],["كورتادو",,90],["فلات وايت",,105],["لاتيه",,95],["كابتشينو",,100],["هوت موكا",,110],["هوت اسبانيش",,105],["ماتشا (هوت)",,110],["هوت امريكان",,85],["هوت شوكليت",,110],["هوت شوكليت بندق",,120],["هوت سيدر",,95],["سحلب مكسرات",,105]]}]},
{id:"ice",ar:"آيس كوفي",en:"Ice Coffee",d:["قهوة مثلجة على طريقتنا","اسبريسو، حليب، وثلج كريستالي"],addons:1,g:[{im:[17,19,18,21,24,20,23,22],items:[["ايس لاتيه","Iced Latte",105],["ايس اسبانيش لاتيه","Iced Spanish Latte",120],["ايس اسبانيش جوز هند","Iced Spanish Coconut",130],["ايس كراميل ميكاتو","Iced Caramel Macchiato",115],["ايس موكا","Iced Mocha",115],["ايس سولتد كراميل","Iced Salted Caramel",120],["ايس اميركان","Iced Americano",100],["ايس شوكليت بستاشيو لاتيه","Iced Choc Pistachio Latte",140]]}]},
{id:"frap",ar:"فرابتشينو & فرابيه",en:"Frappuccino & Frappe",d:["مثلجات كريمية","بالقهوة والصوص"],addons:1,g:[
 {t:"فرابتشينو",im:[35,33,34,32],items:[["فرابتشينو كلاسيك",,105],["فرابتشينو شوكليت",,110],["فرابتشينو كراميل",,110],["فرابتشينو سولتد كراميل",,120]]},
 {t:"فرابيه",im:[31,30,25,29,28,26,27],items:[["فرابيه كراميل",,105],["فرابيه شوكليت",,105],["فرابيه بيستاشيو",,120],["فرابيه كوكيز",,115],["فرابيه بلوبري اناناس",,125],["فرابيه سولتد كراميل كريم",,125],["فرابيه كوفي نت بينز",,125]]}]},
{id:"tea",ar:"آيس تي & ماتشا",en:"Ice Tea & Matcha",d:["ماتشا وتارو وشاي مثلج","منعش وخفيف"],addons:1,g:[
 {t:"ماتشا",im:[45,46,47,48],items:[["ماتشا كلاسيك",,105],["اسبانيش ماتشا",,110],["ماتشا كوكونات",,120],["ماتشا فراولة",,120]]},
 {t:"كلاودي",im:[49,50,51,52],items:[["تارو كلاسيك",,100],["سبانيش تارو",,110],["تارو بوبا",,120],["كلاودي ماتشا",,110]]},
 {t:"ايس تي",im:[53,54,55,57],items:[["ايس تي خوخ",,105],["ايس تي باشون",,110],["ايس تي مانجا",,105],["ايس تي بلوبيري",,105]]}]},
{id:"filter",ar:"قهوة فلتر",en:"Filter Coffee",d:["قهوة مختصة","تحضير يدوي على أصوله"],g:[{im:[105,106],items:[["V60",,105,["ايس أو هوت"]],["فرينش بريس",,90]]}]},
{id:"smoothie",ar:"سموذي",en:"Smoothie",d:["فواكه طازجة مخفوقة","منعش وكثيف"],addons:1,g:[{im:[38,36,39,37,40,41,42,43,44],items:[["اسموزي مانجا",,95],["اسموزي فراولة",,95],["اسموزي بلوبيري",,100],["اسموزي مكس بيري",,100],["اسموزي اناناس",,100],["اسموزي بطيخ",,100],["اسموزي ليمون نعناع",,90],["اسموزي بيناكولادا",,100],["اسموزي كركديه",,110]]}]},
{id:"juice",ar:"عصاير فريش",en:"Fresh Juice",d:["عصير فواكه طازج","يتحضّر في لحظتها"],g:[{im:[56,59,61,58,60],items:[["مانجو",,100],["فراولة",,95],["جوافة",,95],["بطيخ",,95],["ليمون نعناع",,85]]}]},
{id:"shake",ar:"ميلك شيك",en:"Milk Shakes",d:["شيك كريمي بآيس كريم","وكريمة مخفوقة"],addons:1,g:[{im:[69,71,70,73,72,74,78,76,77,75,79],items:[["ميلك شيك فانيليا",,105],["ميلك شيك مانجا",,105],["ميلك شيك فراولة",,105],["ميلك شيك شوكليت",,105],["ميلك شيك كراميل",,105],["ميلك شيك بلوبيري",,110],["ميلك شيك نوتيلا",,110],["ميلك شيك لوتس",,110],["ميلك شيك اوريو",,115],["ميلك شيك بستاشيو",,140],["ميلك شيك كيندر",,135]]}]},
{id:"soda",ar:"صودا وموخيتو",en:"Soda Drink",d:["موخيتو منعش","بفوار وثلج"],g:[{im:[62,67,9003,63,64,65,68],items:[["موخيتو كلاسيك",,90],["موخيتو بلوبيري",,100],["موخيتو فراولة",,100],["موخيتو بينا كولادا فراولة",,115],["موخيتو باشون",,100],["موخيتو جراندين",,115],["شيري كولا",,95]]}]},
{id:"soft",ar:"مشروبات غازية",en:"Soft Drink",d:["مشروبات باردة","ومياه"],g:[{im:[134,145,138,135,137,144],items:[["مياه",,12],["تويست",,45],["بيبسي",,45],["سفن",,45],["شويبس",,45],["ريدبول",,100]]}]},
{id:"dessert",ar:"الحلويات",en:"Dessert",special:1,g:[{im:[107,109,110,108,111,112,115,140,9001,141,116,114,113],items:[["مولتن كيك",,120],["شوكليت فلوتس",,125],["شوكليت فادج",,120],["كيندر كيك",,120],["تراميسيو",,125],["تشيز كيك",,115,["كراميل","وايت","شوكليت"]],["تشيز كيك",,120,["فراولة"]],["تشيز كيك",,120,["نوتيلا"]],["تشيز كيك",,120,["لوتس"]],["تشيز كيك",,120,["وايت شوكليت"]],["تشيز كيك",,130,["كيندر","بيستاشيو"]],["ماويند فراولة",,110],["سينابون كلاسيك",,110]]}]}
];
CATS.forEach(c=>c.g.forEach(g=>g.items.forEach((it,i)=>it[4]=g.im[i])));
CATS.forEach(c=>c.img=c.g[0].im[0]);
const WAFFLE=[["وافل كلاسيك",115,["كراميل","وايت","شوكليت"],117],["وافل",125,["لوتس","نوتيلا"],118],["وافل",135,["كيندر","بستاشيو","كنافة بستاشيو"],119],["وافل مكس",140,0,120]];
const PAN=[["بان كيك كلاسيك",110,180,["شوكليت","وايت","كراميل"],121],["بان كيك",120,195,["نوتيلا","لوتس"],122],["بان كيك",125,200,["كيندر","بيستاشيو"],123],["بان كيك مكس",120,200,0,124]];
const ADDONS=[["شوت اسبريسو",30,125],["حليب",20,126],["بولة ايس كريم",20,127],["صوص",25,128],["فلافر",20,129],["بوبا",30,130],["توبنج",25,131],["ويبد كريم",25,132],["مكسرات",30,133]];

/* ===== TRANSLATION ===== */
const EN={"شاي":"Tea","شاي نكهات":"Flavored Tea","شاي كرك":"Karak Tea","شاي حليب":"Milk Tea","قهوة تركي سنجل":"Turkish Coffee Single","قهوة تركي دبل":"Turkish Coffee Double","قهوة فرنساوي":"French Coffee","قهوة بندق":"Hazelnut Coffee","قهوة نوتيلا":"Nutella Coffee","اسبريسو سنجل":"Espresso Single","اسبريسو دبل":"Espresso Double","اسبريسو ميكاتو":"Espresso Macchiato","اسبريسو افوكادو":"Espresso Affogato","كورتادو":"Cortado","فلات وايت":"Flat White","لاتيه":"Latte","كابتشينو":"Cappuccino","هوت موكا":"Hot Mocha","هوت اسبانيش":"Hot Spanish Latte","ماتشا (هوت)":"Matcha (Hot)","هوت امريكان":"Hot Americano","هوت شوكليت":"Hot Chocolate","هوت شوكليت بندق":"Hot Hazelnut Chocolate","هوت سيدر":"Hot Cider","سحلب مكسرات":"Sahlab with Nuts",
"فرابتشينو كلاسيك":"Classic Frappuccino","فرابتشينو شوكليت":"Chocolate Frappuccino","فرابتشينو كراميل":"Caramel Frappuccino","فرابتشينو سولتد كراميل":"Salted Caramel Frappuccino","فرابيه كراميل":"Caramel Frappe","فرابيه شوكليت":"Chocolate Frappe","فرابيه بيستاشيو":"Pistachio Frappe","فرابيه كوكيز":"Cookies Frappe","فرابيه بلوبري اناناس":"Blueberry Pineapple Frappe","فرابيه سولتد كراميل كريم":"Salted Caramel Cream Frappe","فرابيه كوفي نت بينز":"Coffee Nut Beans Frappe",
"فرابتشينو":"Frappuccino","فرابيه":"Frappe","ماتشا":"Matcha","كلاودي":"Cloudy","ايس تي":"Ice Tea",
"ماتشا كلاسيك":"Classic Matcha","اسبانيش ماتشا":"Spanish Matcha","ماتشا كوكونات":"Coconut Matcha","ماتشا فراولة":"Strawberry Matcha","تارو كلاسيك":"Classic Taro","سبانيش تارو":"Spanish Taro","تارو بوبا":"Taro Boba","كلاودي ماتشا":"Cloudy Matcha","ايس تي خوخ":"Peach Ice Tea","ايس تي باشون":"Passion Fruit Ice Tea","ايس تي مانجا":"Mango Ice Tea","ايس تي بلوبيري":"Blueberry Ice Tea",
"V60":"V60","فرينش بريس":"French Press","ايس أو هوت":"Iced or Hot",
"اسموزي مانجا":"Mango Smoothie","اسموزي فراولة":"Strawberry Smoothie","اسموزي بلوبيري":"Blueberry Smoothie","اسموزي مكس بيري":"Mixed Berry Smoothie","اسموزي اناناس":"Pineapple Smoothie","اسموزي بطيخ":"Watermelon Smoothie","اسموزي ليمون نعناع":"Lemon Mint Smoothie","اسموزي بيناكولادا":"Piña Colada Smoothie","اسموزي كركديه":"Hibiscus Smoothie",
"مانجو":"Mango Juice","فراولة":"Strawberry Juice","جوافة":"Guava Juice","بطيخ":"Watermelon Juice","ليمون نعناع":"Lemon Mint Juice",
"ميلك شيك فانيليا":"Vanilla Milkshake","ميلك شيك مانجا":"Mango Milkshake","ميلك شيك فراولة":"Strawberry Milkshake","ميلك شيك شوكليت":"Chocolate Milkshake","ميلك شيك كراميل":"Caramel Milkshake","ميلك شيك بلوبيري":"Blueberry Milkshake","ميلك شيك نوتيلا":"Nutella Milkshake","ميلك شيك لوتس":"Lotus Milkshake","ميلك شيك اوريو":"Oreo Milkshake","ميلك شيك بستاشيو":"Pistachio Milkshake","ميلك شيك كيندر":"Kinder Milkshake",
"موخيتو كلاسيك":"Classic Mojito","موخيتو بلوبيري":"Blueberry Mojito","موخيتو فراولة":"Strawberry Mojito","موخيتو بينا كولادا فراولة":"Strawberry Piña Colada Mojito","موخيتو باشون":"Passion Fruit Mojito","موخيتو جراندين":"Grenadine Mojito","شيري كولا":"Cherry Cola",
"مياه":"Water","تويست":"Twist","بيبسي":"Pepsi","سفن":"7Up","شويبس":"Schweppes","ريدبول":"Red Bull",
"مولتن كيك":"Molten Cake","شوكليت فلوتس":"Chocolate Floats","شوكليت فادج":"Chocolate Fudge","كيندر كيك":"Kinder Cake","تراميسيو":"Tiramisu","تشيز كيك":"Cheesecake","ماويند فراولة":"Strawberry Mawind","سينابون كلاسيك":"Classic Cinnabon",
"كراميل":"Caramel","وايت":"White","شوكليت":"Chocolate","نوتيلا":"Nutella","لوتس":"Lotus","وايت شوكليت":"White Chocolate","كيندر":"Kinder","بيستاشيو":"Pistachio","بستاشيو":"Pistachio","كنافة بستاشيو":"Pistachio Kunafa",
"وافل كلاسيك":"Classic Waffle","وافل":"Waffle","وافل مكس":"Mix Waffle","بان كيك كلاسيك":"Classic Pancake","بان كيك":"Pancake","بان كيك مكس":"Mix Pancake",
"شوت اسبريسو":"Espresso Shot","حليب":"Milk","بولة ايس كريم":"Ice Cream Scoop","صوص":"Sauce","فلافر":"Flavor","بوبا":"Boba","توبنج":"Topping","ويبد كريم":"Whipped Cream","مكسرات":"Nuts"};
const CD={hot:["Tea, coffee & everything hot","Prepared the proper way"],ice:["Our take on iced coffee","Espresso, milk & crystal ice"],frap:["Creamy blended drinks","With coffee & sauce"],tea:["Matcha, taro & iced tea","Light & refreshing"],filter:["Specialty coffee","Hand-brewed properly"],smoothie:["Fresh blended fruit","Refreshing & thick"],juice:["Fresh fruit juice","Made on the spot"],shake:["Creamy shakes with ice cream","And whipped cream"],soda:["Refreshing mojito","Fizzy & iced"],soft:["Cold drinks","& water"]};
const CAT_AR_D=null;
const S={
 ar:{menu:"المنيو",loc:"الموقع",contact:"تواصل",tabs:"التنقل",cats:"الأقسام",addons:"الإضافات",more:"باقي الحلويات",waffle:"وافل",pan:"بان كيك",best:"الأكثر طلباً",
 note:"المنيو للعرض فقط - اطلب من الكاشير",em:"منيو إلكتروني",tag:"قهوتك.. على مزاجك",subt:"منيو إلكتروني للتصفّح فقط - اطلب من الكاشير أو البار",go:"تصفّح المنيو",
 city:"كفر الشيخ",hero:"كل المشروبات والحلويات في مكان واحد - تصفّح بحرية",ph:"دوّر على مشروبك أو حلاك...",none:"مفيش نتيجة — جرّب كلمة تانية",cur:"ج.م",
 addr:AR_ADDR,gmaps:"افتح في خرائط جوجل",call:"اتصل بنا",wa:"واتساب",ig:"انستجرام",fb:"فيسبوك",back:"رجوع",close:"إغلاق",off:"أنت غير متصل - المنيو يعمل أوفلاين",
 sp:"كيك ساخن بقلب شوكولاتة سايحة",one:"صنف",many:"أصناف",dev:"تطوير",ins:"ثبّت تطبيق لازورد",insd:"أضف المنيو على شاشتك الرئيسية وافتحه بسرعة حتى بدون إنترنت",insb:"تثبيت",later:"لاحقاً",ios:"اضغط زر المشاركة ثم «إضافة إلى الشاشة الرئيسية»",l:"EN",th:"الوضع"},
 en:{menu:"Menu",loc:"Location",contact:"Contact",tabs:"Navigation",cats:"Categories",addons:"Add-ons",more:"More Desserts",waffle:"Waffles",pan:"Pancakes",best:"Most Ordered",
 note:"Menu is for display only - order from the cashier",em:"E-Menu",tag:"Your coffee.. your mood",subt:"Electronic menu for browsing only - order from the cashier or bar",go:"Browse Menu",
 city:"Kafr El Sheikh",hero:"All drinks & desserts in one place - browse freely",ph:"Search your drink or dessert...",none:"No results - try another word",cur:"EGP",
 addr:EN_ADDR,gmaps:"Open in Google Maps",call:"Call us",wa:"WhatsApp",ig:"Instagram",fb:"Facebook",back:"Back",close:"Close",off:"You're offline - the menu works offline",
 sp:"Warm cake with a molten chocolate center",one:"item",many:"items",dev:"Developed",ins:"Install LAZORD app",insd:"Add the menu to your home screen and open it fast, even offline",insb:"Install",later:"Later",ios:"Tap the Share button, then “Add to Home Screen”",l:"ع",th:"Theme"}
};
const ARCATS_ONLY=1;
/* ===== STATE ===== */
let lang=ls('lz_lang')||((navigator.language||'ar').startsWith('ar')?'ar':'en');
let theme=ls('lz_theme')||'dark';
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
const T=k=>S[lang][k];
const tr=s=>lang=='en'?(EN[s]||s):s;
function applyEnv(){
 document.documentElement.lang=lang;document.documentElement.dir=lang=='ar'?'rtl':'ltr';
 document.documentElement.dataset.theme=theme;
 const m=document.querySelector('meta[name=theme-color]');if(m)m.content=theme=='dark'?'#100D0B':'#FBF6EE';
 document.title=lang=='ar'?'منيو لازورد | LAZORD COFFEE':'LAZORD COFFEE | Menu';
}
applyEnv();
/* ===== HELPERS ===== */
const $=s=>document.querySelector(s),app=$('#app');
const PH='<div class="ph"><svg viewBox="0 0 24 24" fill="none" stroke="#C9A25E" stroke-width="1.4" stroke-linecap="round"><path d="M5 10h11v4a5 5 0 01-5 5h-1a5 5 0 01-5-5z"/><path d="M16 11h1.5a2.5 2.5 0 010 5H16M9 3c-1 1 1 2 0 3m4-3c-1 1 1 2 0 3"/></svg></div>';
const src=n=>`${CFG.prod}${String(n).padStart(4,'0')}.jpg`;
const I=(n,eager)=>n?`<img src="${src(n)}" alt="" ${eager?'':'loading="lazy"'} draggable="false">`:PH;
const P=(d,e)=>`<path d="${d}"${e||''}/>`;
const svg=(b,v='0 0 24 24',x='')=>`<svg viewBox="${v}" ${x}>${b}</svg>`;
const st='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const ic={
 chev:`<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>`,
 rchev:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 5l7 7-7 7"/></svg>`,
 pin:`<svg width="16" height="16" viewBox="0 0 24 24" ${st}><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
 info:`<svg viewBox="0 0 24 24" ${st}><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/></svg>`,
 s:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A89683" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>`,
 loc:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
 menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M5 5h10a4 4 0 014 4v10H9a4 4 0 01-4-4z"/><path d="M13 9h6"/></svg>`,
 chat:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M5 5h14v11H10l-5 4z"/></svg>`,
 x:`<svg viewBox="0 0 24 24" ${st}><path d="M6 6l12 12M18 6L6 18"/></svg>`,
 sun:`<svg viewBox="0 0 24 24" ${st}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
 moon:`<svg viewBox="0 0 24 24" ${st}><path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/></svg>`,
 phone:`<svg viewBox="0 0 24 24" ${st}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>`,
 ig:`<svg viewBox="0 0 24 24" ${st}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
 fb:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3.1h-3V8.5c0-.9.3-1.5 1.600-1.500h1.600V4.200c-.3 0-1.200-.1-2.300-.1-2.300 0-3.900 1.400-3.900 4v2.300H7.900v3.100h2.600V21z"/></svg>`,
 wa:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.6-4.900A8.700 8.700 0 1112 20.700a8.700 8.700 0 01-4.200-1.100z"/><path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8a4 4 0 01-2-2l.8-1-1-2z" fill="currentColor" stroke="none"/></svg>`
};
const norm=s=>s.replace(/[\u064B-\u0652\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase();
const cnt=c=>{const n=c.g.reduce((a,g)=>a+g.items.length,0);return lang=='ar'?n+(n>=3&&n<=10?" أصناف":" صنف"):n+" "+(n==1?"item":"items")};
const price=p=>`<span class="pr"><b>${p}</b><small>${T('cur')}</small></span>`;
const dia='<div class="dia"><i></i><b></b><i></i></div>';
/* registry of items for the zoom modal */
let REG=[];
const reg=o=>REG.push(o)-1;
function nameOf(ar,en){return lang=='en'?(en||EN[ar]||ar):ar}
function chipsH(ch){return ch?`<div class="chips">${ch.map(c=>`<i>${tr(c)}</i>`).join('')}</div>`:''}
/* row(it) it=[ar,en,price,chips,img] */
function row(it){
 const [ar,en,p,chips,im]=it;
 const k=reg({ar,en,p:price(p),chips,im});
 return `<div class="row rv" data-k="${k}"><div class="th">${I(im)}</div><div class="n"><b>${nameOf(ar,en)}</b>${lang=='ar'&&en?`<span class="lat">${en}</span>`:''}${chipsH(chips)}</div><span class="ld"></span>${price(p)}</div>`;
}
const addons=()=>`<div class="sub2">${T('addons')}</div><div class="add">${ADDONS.map(a=>{const k=reg({ar:a[0],p:price(a[1]),im:a[2]});return `<div class="row" data-k="${k}"><div class="th" style="width:44px;height:44px;border-radius:12px">${I(a[2])}</div><div class="n"><b>${tr(a[0])}</b></div><span class="ld"></span>${price(a[1])}</div>`}).join('')}</div>`;
const tools=()=>`<div class="tools"><button class="tb" data-act="lang" aria-label="Language">${T('l')}</button><button class="tb" data-act="theme" aria-label="${T('th')}">${theme=='dark'?ic.sun:ic.moon}</button></div>`;
const footer=()=>`<footer class="foot"><div>${T('dev')} BY <b>HAMZA</b></div><div class="soc"><a href="${CFG.devIG}" target="_blank" rel="noopener" aria-label="Instagram q_7vmza">${ic.ig}</a><a href="${CFG.devWA}" target="_blank" rel="noopener" aria-label="WhatsApp 01066350362">${ic.wa}</a></div></footer>`;
const tabbar=a=>`<nav class="tabbar" aria-label="${T('tabs')}">${[['loc','loc','#/loc'],['menu','menu','#/home'],['chat','contact','#/contact']].map(t=>`<button class="${a==t[0]?'on':''}" aria-label="${T(t[1])}" onclick="location.hash='${t[2]}'">${ic[t[0]]}<span>${T(t[1])}</span></button>`).join('')}</nav>`;
function observe(){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');o.unobserve(e.target)}}),{threshold:.05});document.querySelectorAll('.rv').forEach(e=>o.observe(e))}
/* ===== VIEWS ===== */
function splash(){
 const t=[[45,'ماتشا'],[35,'فرابتشينو'],[117,'وافل']];
 app.innerHTML=`<div class="splash page"><div class="frame"><div>
 <div style="align-self:stretch;display:flex;justify-content:space-between;align-items:center"><span class="lat">Electronic Menu</span>${tools()}</div>
 <div class="logo"><img src="${CFG.logo}" alt="LAZORD COFFEE"></div>
 <h1>${T('tag')}</h1>${dia}
 <p class="sub">${T('subt')}</p>
 <div class="tiles">${t.map(x=>`<div class="tile"><div>${I(x[0],1)}</div>${tr(x[1])}</div>`).join('')}</div>
 <div class="loc">${ic.pin}<span>${T('addr')}</span></div>
 <button class="cta press" id="go">${T('go')} ${ic.chev}</button>
 <span class="lat cap">Lazord Coffee</span></div></div></div>`;
 const go=()=>{clearTimeout(window._t);try{sessionStorage.seen=1}catch(e){}location.hash='#/home'};
 $('#go').onclick=go;window._t=setTimeout(go,3500);
}
let homeScroll=0;
function home(){
 REG=[];
 const picks=[[45,'ماتشا','tea'],[35,'فرابتشينو','frap'],[117,'وافل','dessert'],[38,'سموذي','smoothie']];
 const pn={'سموذي':'Smoothie'};
 app.innerHTML=`<div class="page"><div class="top"><div class="lg"><img src="${CFG.logo}" alt="LAZORD"></div><div class="tools"><span class="pill">${ic.pin} ${T('city')}</span>${tools()}</div></div>
 <div class="hero">${I(17,1)}<span class="pill">${T('em')}</span><div><h2>${lang=='ar'?'منيو <em>لازورد</em>':'<em>Lazord</em> Menu'}</h2><p>${T('hero')}</p></div></div>
 <label class="search">${ic.s}<input id="q" type="search" placeholder="${T('ph')}" aria-label="${T('ph')}"></label>
 <div id="res" class="list2" hidden></div>
 <div id="main"><div class="picks">${picks.map(p=>`<button class="tile press" onclick="location.hash='#/cat/${p[2]}'"><div>${I(p[0])}</div>${lang=='en'?(pn[p[1]]||EN[p[1]]||p[1]):p[1]}</button>`).join('')}</div>
 <div class="sh"><h3>${T('cats')}</h3><span class="lat">${lang=='ar'?'Categories':'الأقسام'}</span></div>
 <div id="cats">${CATS.map(c=>`<button class="cat press rv" aria-label="${c.ar}" onclick="location.hash='#/cat/${c.id}'"><div class="im">${I(c.img)}</div><div class="nm"><b>${lang=='ar'?c.ar:c.en}</b><span class="lat">${lang=='ar'?c.en:c.ar}</span></div><span class="cnt">${cnt(c)}</span>${ic.chev}</button>`).join('')}</div></div>${footer()}</div>${tabbar('menu')}`;
 observe();window.scrollTo(0,homeScroll);
 const all=[];CATS.forEach(c=>c.g.forEach(g=>g.items.forEach(i=>all.push([i,i[0]+' '+(i[1]||'')+' '+(EN[i[0]]||'')+' '+(i[3]||[]).join(' ')]))));
 WAFFLE.forEach(w=>all.push([[w[0],,w[1],w[2],w[3]],w[0]+' '+(EN[w[0]]||'')+' waffle '+(w[2]||[]).join(' ')]));
 PAN.forEach(w=>all.push([[w[0],,w[1]+' / '+w[2],w[3],w[4]],w[0]+' بانكيك '+(EN[w[0]]||'')+' '+(w[3]||[]).join(' ')]));
 $('#q').oninput=e=>{const q=norm(e.target.value.trim());$('#main').hidden=!!q;$('#res').hidden=!q;if(!q)return;
  const r=all.filter(a=>norm(a[1]).includes(q));
  $('#res').innerHTML=r.length?r.map(a=>row(a[0])).join(''):`<div class="empty">${T('none')}</div>`;observe()};
}
function hdr(c){return `<header class="hd"><button class="back press" aria-label="${T('back')}" onclick="history.back()">${ic.rchev}</button><div class="t"><h2>${lang=='ar'?c.ar:c.en}</h2><span class="lat">${lang=='ar'?c.en:c.ar}</span></div><span class="cnt">${cnt(c)}</span>${tools()}</header>`}
function cat(id){
 REG=[];
 const c=CATS.find(x=>x.id==id);if(!c)return location.hash='#/home';
 if(c.special)return dessert(c);
 const multi=c.g.length>1,d=lang=='ar'?c.d:(CD[c.id]||c.d);
 app.innerHTML=`${hdr(c)}<div class="page" style="padding-top:6px"><div class="ban"><div class="im">${I(c.img,1)}</div><div><b>${d[0]}</b><span>${d[1]}</span></div></div>
 <div class="note">${ic.info}<span>${T('note')}</span></div>
 ${multi?`<div class="stabs">${c.g.map((g,i)=>`<button data-i="${i}" class="${i?'':'on'}">${tr(g.t)}</button>`).join('')}</div>`:''}
 <div id="list" class="list2"></div>${c.addons?addons():''}${footer()}</div>${tabbar('menu')}`;
 const show=i=>{$('#list').innerHTML=c.g[i].items.map(it=>row(it)).join('');observe()};
 show(0);document.querySelectorAll('.stabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.stabs button').forEach(x=>x.classList.toggle('on',x==b));show(+b.dataset.i)});
 window.scrollTo(0,0);
}
function dessert(c){
 const it=c.g[0].items,rest=it.slice(1);
 const wk=reg({ar:"وافل مكس",p:price(140),im:120}),pk=reg({ar:"بان كيك مكس",p:`<span class="pr"><b>120</b><small>/</small><b>200</b><small>${T('cur')}</small></span>`,im:124}),ft=reg({ar:"مولتن كيك",p:price(120),im:107});
 app.innerHTML=`${hdr(c)}<div class="page" style="padding-top:6px">
 <div class="feat press" data-k="${ft}" style="cursor:pointer">${I(107,1)}<span class="bd">${T('best')}</span><div class="tx"><div><h3>${tr("مولتن كيك")}</h3><p>${T('sp')}</p></div>${price(120)}</div></div>
 <div class="duo"><div class="pc press" data-k="${wk}"><div class="im">${I(120)}</div><div class="b"><b>${tr("وافل مكس")}</b>${price(140)}</div></div>
 <div class="pc press" data-k="${pk}"><div class="im">${I(124)}</div><div class="b"><b>${tr("بان كيك مكس")}</b><span class="pr"><b>120/200</b><small>${T('cur')}</small></span></div></div></div>
 <div class="note" style="margin-top:14px">${ic.info}<span>${T('note')}</span></div>
 <div class="sub2">${T('more')}</div><div class="list2">${rest.map(i=>row(i)).join('')}</div>
 <div class="sub2">${T('waffle')}</div><div class="list2">${WAFFLE.map(w=>row([w[0],,w[1],w[2],w[3]])).join('')}</div>
 <div class="sub2">${T('pan')} <span class="lat">12 / 24 ${lang=='ar'?'ق':'pcs'}</span></div>
 <div class="list2">${PAN.map(w=>{const k=reg({ar:w[0],p:`<div class="two">${price(w[1])}${price(w[2])}</div>`,chips:w[3],im:w[4]});return `<div class="row rv" data-k="${k}"><div class="th">${I(w[4])}</div><div class="n"><b>${tr(w[0])}</b>${chipsH(w[3])}</div><span class="ld"></span><div class="two">${price(w[1])}${price(w[2])}</div></div>`}).join('')}</div>
 ${footer()}</div>${tabbar('menu')}`;
 observe();window.scrollTo(0,0);
}
function loc(){app.innerHTML=`<div class="page"><div class="top" style="margin:0"><div class="sh" style="margin:0"><h3>${T('loc')}</h3></div>${tools()}</div><div class="info"><div style="color:var(--gold);display:flex;justify-content:center"><svg width="44" height="44" viewBox="0 0 24 24" ${st}><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></div><p style="color:var(--tx);font-weight:700;font-size:17px">${T('addr')}</p><a class="cta press" href="${CFG.map}" target="_blank" rel="noopener" style="text-decoration:none">${T('gmaps')}</a></div>${footer()}</div>${tabbar('loc')}`}
function contact(){
 const L=[[`tel:${CFG.phone}`,'phone',T('call'),CFG.phone],[CFG.instagram,'ig',T('ig'),'@laz0rd1'],[CFG.facebook,'fb',T('fb'),'Lazord Café']];
 app.innerHTML=`<div class="page"><div class="top" style="margin:0 0 14px"><div class="sh" style="margin:0"><h3>${T('contact')}</h3></div>${tools()}</div><div class="ct">${L.map(l=>`<a class="ctc press" href="${l[0]}" target="_blank" rel="noopener"><div class="ico">${ic[l[1]]}</div><div class="nm"><b>${l[2]}</b><span class="lat" style="letter-spacing:.05em;text-transform:none" dir="ltr">${l[3]}</span></div>${ic.chev}</a>`).join('')}</div>${footer()}</div>${tabbar('chat')}`}
/* ===== MODAL ===== */
function openItem(k){
 const o=REG[k];if(!o)return;closeItem();
 const m=document.createElement('div');m.className='md';m.id='md';
 m.innerHTML=`<div class="mc" role="dialog" aria-modal="true"><div class="mi">${o.im?`<img src="${src(o.im)}" alt="">`:PH}<button class="mx" aria-label="${T('close')}">${ic.x}</button></div><div class="mb"><h3>${nameOf(o.ar,o.en)}</h3>${lang=='ar'&&(o.en||EN[o.ar])?`<span class="lat">${o.en||EN[o.ar]}</span>`:''}${chipsH(o.chips)}${o.p}</div></div>`;
 m.onclick=e=>{if(!e.target.closest('.mc')||e.target.closest('.mx'))closeItem()};
 document.body.appendChild(m);document.body.style.overflow='hidden';
}
function closeItem(){const m=$('#md');if(m){m.remove();document.body.style.overflow=''}}
addEventListener('keydown',e=>{if(e.key=='Escape')closeItem()});
/* ===== EVENTS: items, language, theme ===== */
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-act]');
 if(t){e.stopPropagation();if(t.dataset.act=='lang'){lang=lang=='ar'?'en':'ar';ls('lz_lang',lang)}else{theme=theme=='dark'?'light':'dark';ls('lz_theme',theme)}
  applyEnv();const y=scrollY;route(true);scrollTo(0,y);return}
 const r=e.target.closest('[data-k]');if(r)openItem(+r.dataset.k);
});
/* ===== NO ZOOM ===== */
['gesturestart','gesturechange','gestureend'].forEach(n=>document.addEventListener(n,e=>e.preventDefault()));
document.addEventListener('touchmove',e=>{if(e.touches.length>1)e.preventDefault()},{passive:false});
let lt=0;document.addEventListener('touchend',e=>{const n=Date.now();if(n-lt<350&&!e.target.closest('input'))e.preventDefault();lt=n},{passive:false});
document.addEventListener('wheel',e=>{if(e.ctrlKey)e.preventDefault()},{passive:false});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['+','-','=','0'].includes(e.key))e.preventDefault()});
/* ===== ROUTER ===== */
function route(keep){
 closeItem();
 if(!keep&&location.hash!='#/home'&&app.querySelector('#q'))homeScroll=scrollY;
 clearTimeout(window._t);
 const h=location.hash||'#/';
 if(h=='#/'||h=='#'){let s;try{s=sessionStorage.seen}catch(e){}return s?(location.hash='#/home'):splash()}
 if(h=='#/home')return home();
 if(h.startsWith('#/cat/'))return cat(h.slice(6));
 if(h=='#/loc')return loc();
 if(h=='#/contact')return contact();
 location.hash='#/home';
}
addEventListener('hashchange',()=>route());
addEventListener('scroll',()=>{if(location.hash=='#/home')homeScroll=scrollY},{passive:true});
route();
/* ===== INSTALL PROMPT (Android / Windows / Mac / Linux / iPad / iPhone) ===== */
let dip=null;
const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const ios=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
function hideInstall(snooze){const b=$('#inst');if(b)b.remove();if(snooze)ls('lz_inst',String(Date.now()))}
function showInstall(isIos){
 if(standalone()||$('#inst'))return;
 const t=+ls('lz_inst');if(t&&Date.now()-t<3*864e5)return;
 const b=document.createElement('div');b.id='inst';b.className='inst';
 b.innerHTML=`<img src="icon-192.png" alt="LAZORD"><div class="it"><b>${T('ins')}</b><span>${isIos?T('ios'):T('insd')}</span></div>${isIos?'':`<button class="ib" id="ibtn">${T('insb')}</button>`}<button class="ix" id="ix" aria-label="${T('later')}">${ic.x}</button>`;
 document.body.appendChild(b);
 $('#ix').onclick=()=>hideInstall(1);
 const ib=$('#ibtn');if(ib)ib.onclick=async()=>{if(!dip)return;dip.prompt();try{await dip.userChoice}catch(e){}dip=null;hideInstall(0)};
}
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dip=e;setTimeout(()=>showInstall(false),2500)});
addEventListener('appinstalled',()=>hideInstall(0));
if(ios()&&!standalone())setTimeout(()=>showInstall(true),4000);
/* ===== OFFLINE / ONLINE ===== */
function net(){const o=$('#off');if(!navigator.onLine){if(!o){const d=document.createElement('div');d.id='off';d.className='offline';d.textContent=T('off');document.body.appendChild(d);setTimeout(()=>d.remove(),3500)}}else if(o)o.remove()}
addEventListener('online',net);addEventListener('offline',net);
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
