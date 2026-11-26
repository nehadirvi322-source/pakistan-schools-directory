'use strict';

const $ = (id) => document.getElementById(id);
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const dictionary = {
 en: {
  directory:'Find Schools',admin:'Super Admin',freeTag:'FREE PRIVATE SCHOOL DIRECTORY',heroTitle:'Find the right school in Pakistan.',heroText:'Explore private schools by province, district and tehsil. Compare campuses, then choose with confidence.',wholePakistan:'All Pakistan',freeForever:'Free to search',bilingual:'English & Urdu',schoolName:'School name',searchSchool:'Search schools…',province:'Province / territory',district:'District',tehsil:'Tehsil',country:'Country',maps:'Google Maps location',allProvinces:'All provinces',allDistricts:'All districts',allTehsils:'All tehsils',clearFilters:'Clear filters',explore:'Explore private schools',verifiedOnly:'Only published campuses appear',adminArea:'SCHOOL MANAGEMENT',adminDashboard:'Super Admin dashboard',adminIntro:'Manage private schools and campuses with your authorized account.',signOut:'Sign out',connectTitle:'Connect to your Supabase project',connectExpl:'Enter your project URL and its public publishable key. Never enter secret or service-role keys here.',connect:'Connect',adminSignIn:'Administrator sign in',signInDesc:'Use the Supabase Authentication account you created for SchoolsBridge.ai.',connection:'Connection settings',email:'Email',password:'Password',signIn:'Sign in',schools:'Schools',campuses:'Campuses',published:'Published campuses',manageSchools:'Manage schools',manageCampuses:'Manage campuses',addSchool:'+ Add school',addCampus:'+ Add campus',accessCheck:'Administrator access check',retry:'Try again',footerText:'A free directory of private schools in Pakistan',noResults:'No matching published campuses found.',noPublished:'No published campuses yet. Your private test campus will not appear here.',connectPreview:'Preview mode: connect your public Supabase key to load live listings.',demo:'SAMPLE LISTING — not public data',recordLabel:'Private school',locationUnknown:'Location not available',count:'published campus(es)',save:'Save',cancel:'Cancel',nameEn:'School name (English)',nameUr:'School name (Urdu)',website:'Website (optional)',campusName:'Campus name',chooseSchool:'Choose a school',chooseArea:'Choose an area',createSchool:'Create school',editSchool:'Edit school',createCampus:'Create campus',publish:'Publish',unpublish:'Unpublish',edit:'Edit',passwordError:'Please enter an email and password.',loginSuccess:'Signed in. Checking administrator permission…',schoolSaved:'School saved.',campusSaved:'Campus saved.',campusUpdated:'Campus status updated.',publishConfirm:'Publish this campus to the public directory?',unpublishConfirm:'Hide this campus from the public directory?',setupSaved:'Connection saved in this browser. Please sign in as administrator.',unauthorized:'This account is not permitted to manage the directory.',permissionError:'Cannot verify administrator access. In Supabase Data API settings, expose the is_super_admin function, then retry. Do not disable RLS.',loaded:'Showing live published campuses from Supabase.',manageHint:'Use Save to create records; publish a campus only when its details have been checked.'
 },
 ur: {
  directory:'اسکول تلاش کریں',admin:'سپر ایڈمن',freeTag:'مفت نجی اسکول ڈائریکٹری',heroTitle:'پاکستان میں اپنے بچوں کے لیے مناسب اسکول تلاش کریں۔',heroText:'صوبے، ضلع اور تحصیل کے مطابق نجی اسکول تلاش کریں اور اسکول کیمپس کا موازنہ کریں۔',wholePakistan:'پورا پاکستان',freeForever:'تلاش بالکل مفت',bilingual:'اردو اور انگریزی',schoolName:'اسکول کا نام',searchSchool:'اسکول تلاش کریں…',province:'صوبہ / علاقہ',district:'ضلع',tehsil:'تحصیل',country:'ملک',maps:'گوگل میپس کا مقام',allProvinces:'تمام صوبے',allDistricts:'تمام اضلاع',allTehsils:'تمام تحصیلیں',clearFilters:'فلٹر صاف کریں',explore:'نجی اسکول دریافت کریں',verifiedOnly:'صرف شائع شدہ کیمپس دکھائے جاتے ہیں',adminArea:'اسکول مینجمنٹ',adminDashboard:'سپر ایڈمن ڈیش بورڈ',adminIntro:'اپنے مجاز اکاؤنٹ سے اسکولوں اور کیمپس کا انتظام کریں۔',signOut:'لاگ آؤٹ',connectTitle:'Supabase پراجیکٹ سے منسلک کریں',connectExpl:'اپنا پراجیکٹ URL اور پبلش ایبل کی درج کریں۔ خفیہ کی ہرگز درج نہ کریں۔',connect:'منسلک کریں',adminSignIn:'ایڈمن سائن اِن',signInDesc:'اپنا SchoolsBridge.ai Supabase اکاؤنٹ استعمال کریں۔',connection:'کنکشن سیٹنگز',email:'ای میل',password:'پاس ورڈ',signIn:'سائن اِن',schools:'اسکول',campuses:'کیمپس',published:'شائع شدہ کیمپس',manageSchools:'اسکول مینجمنٹ',manageCampuses:'کیمپس مینجمنٹ',addSchool:'+ اسکول شامل کریں',addCampus:'+ کیمپس شامل کریں',accessCheck:'ایڈمن رسائی کی جانچ',retry:'دوبارہ کوشش کریں',footerText:'پاکستان میں نجی اسکولوں کی مفت ڈائریکٹری',noResults:'کوئی شائع شدہ کیمپس نہیں ملا۔',noPublished:'ابھی کوئی شائع شدہ کیمپس موجود نہیں۔ آپ کا ٹیسٹ کیمپس عوام کو نظر نہیں آئے گا۔',connectPreview:'پیش نظارہ: اصل ریکارڈ دکھانے کے لیے Supabase سے منسلک کریں۔',demo:'صرف نمونہ — اصل پبلک ریکارڈ نہیں',recordLabel:'نجی اسکول',locationUnknown:'مقام دستیاب نہیں',count:'شائع شدہ کیمپس',save:'محفوظ کریں',cancel:'منسوخ کریں',nameEn:'اسکول کا نام (انگریزی)',nameUr:'اسکول کا نام (اردو)',website:'ویب سائٹ (اختیاری)',campusName:'کیمپس کا نام',chooseSchool:'اسکول منتخب کریں',chooseArea:'علاقہ منتخب کریں',createSchool:'اسکول بنائیں',editSchool:'اسکول تبدیل کریں',createCampus:'کیمپس بنائیں',publish:'شائع کریں',unpublish:'چھپائیں',edit:'تبدیل کریں',passwordError:'ای میل اور پاس ورڈ درج کریں۔',loginSuccess:'سائن اِن ہو گیا۔ ایڈمن اجازت چیک ہو رہی ہے…',schoolSaved:'اسکول محفوظ ہو گیا۔',campusSaved:'کیمپس محفوظ ہو گیا۔',campusUpdated:'کیمپس کی حیثیت اپ ڈیٹ ہو گئی۔',publishConfirm:'کیا آپ یہ کیمپس عوامی ڈائریکٹری پر شائع کرنا چاہتے ہیں؟',unpublishConfirm:'کیا آپ یہ کیمپس عوام سے چھپانا چاہتے ہیں؟',setupSaved:'کنکشن اس براؤزر میں محفوظ ہو گیا۔ اب ایڈمن کے طور پر سائن اِن کریں۔',unauthorized:'اس اکاؤنٹ کو ڈائریکٹری میں تبدیلی کی اجازت نہیں ہے۔',permissionError:'ایڈمن اجازت کی تصدیق نہیں ہو سکی۔ Supabase Data API میں is_super_admin فنکشن کو ایکسپوز کریں، RLS بند نہ کریں۔',loaded:'Supabase سے شائع شدہ کیمپس دکھائے جا رہے ہیں۔',manageHint:'کیمپس شائع کرنے سے پہلے اس کی تمام معلومات چیک کریں۔'
 }
};
// Campus-specific classification. Independent from schools.school_type, which stores 'private'.
Object.assign(dictionary.en, {
 schoolType:'School Type', allSchoolTypes:'All school types', selectSchoolType:'Select school type',
 coEducation:'Co-education', boysOnly:'Boys Only', girlsOnly:'Girls Only',
 unverifiedType:'Not yet verified', chatWhatsapp:'WhatsApp us'
});
Object.assign(dictionary.ur, {
 schoolType:'اسکول کی نوعیت', allSchoolTypes:'تمام اقسام کے اسکول', selectSchoolType:'اسکول کی نوعیت منتخب کریں',
 coEducation:'مخلوط تعلیم', boysOnly:'صرف لڑکوں کے لیے', girlsOnly:'صرف لڑکیوں کے لیے',
 unverifiedType:'ابھی تصدیق نہیں ہوئی', chatWhatsapp:'واٹس ایپ پر رابطہ کریں'
});
const SCHOOL_TYPES = ['co_education','boys','girls'];
function schoolTypeLabel(value){
 return value==='co_education'?t('coEducation'):value==='boys'?t('boysOnly'):value==='girls'?t('girlsOnly'):t('unverifiedType');
}
function schoolTypeOptions(selected='',required=false){
 return '<option value=""'+(required?' disabled':'')+(selected?'':' selected')+'>'+escapeHTML(t('selectSchoolType'))+'</option>'+SCHOOL_TYPES.map(value=>'<option value="'+value+'"'+(selected===value?' selected':'')+'>'+escapeHTML(schoolTypeLabel(value))+'</option>').join('');
}
function populateSchoolTypeFilter(){
 const select=$('schoolTypeFilter');if(!select)return;
 const old=select.value;
 select.innerHTML='<option value="">'+escapeHTML(t('allSchoolTypes'))+'</option>'+SCHOOL_TYPES.map(value=>'<option value="'+value+'">'+escapeHTML(schoolTypeLabel(value))+'</option>').join('');
 if(SCHOOL_TYPES.includes(old))select.value=old;
}
function initializeEnhancements(){
 // Create the public School Type filter without altering the existing index.html structure.
 const tehsilLabel=$('tehsilFilter')?.closest('label');
 if(tehsilLabel&&!$('schoolTypeFilter')){
  const label=document.createElement('label');
  label.id='schoolTypeFilterField';
  label.innerHTML='<span data-i18n="schoolType">School Type</span><select id="schoolTypeFilter" aria-label="School Type"></select>';
  tehsilLabel.insertAdjacentElement('afterend',label);
 }
 // The WhatsApp contact goes to SchoolsBridge.ai, never to a campus's private phone.
 if(!$('schoolsbridgeWhatsapp')){
  const chat=document.createElement('a');
  chat.id='schoolsbridgeWhatsapp';
  chat.className='sb-whatsapp-float';
  chat.href='https://wa.me/923450977866?text='+encodeURIComponent('Hello SchoolsBridge.ai, I am looking for a school for my child. Could you please help me?');
  chat.target='_blank';chat.rel='noopener noreferrer';
  chat.setAttribute('aria-label','Contact SchoolsBridge.ai on WhatsApp');
  chat.innerHTML='<span aria-hidden="true" class="sb-whatsapp-symbol">☎</span><span data-i18n="chatWhatsapp">WhatsApp us</span>';
  document.body.appendChild(chat);
  const style=document.createElement('style');
  style.textContent='.sb-whatsapp-float{position:fixed;right:18px;bottom:20px;z-index:900;display:inline-flex;align-items:center;gap:9px;background:#188b4a;color:#fff!important;border-radius:999px;padding:12px 17px;text-decoration:none!important;font-size:14px;font-weight:700;box-shadow:0 5px 18px #0003;max-width:calc(100vw - 36px)}.sb-whatsapp-float:hover,.sb-whatsapp-float:focus-visible{background:#126d3a;color:#fff!important}.sb-whatsapp-float[hidden]{display:none!important}.sb-whatsapp-symbol{border:2px solid currentColor;border-radius:50%;width:25px;height:25px;display:inline-flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}body.rtl .sb-whatsapp-float{right:auto;left:18px}@media(max-width:500px){.sb-whatsapp-float{padding:10px 13px;font-size:13px}}';
  document.head.appendChild(style);
 }
}
const IS_ADMIN_PAGE = /(?:^|\/)admin\.html$/i.test(window.location.pathname);
const state = { lang: 'en', view:'directory', config: {}, userToken: null, publicCampuses:[], publicCatalog:{provinces:[],districts:[],tehsils:[]}, schools:[], campuses:[], areas:[], provinces:[], districts:[], cities:[], tehsils:[], locales:[], connected:false, isAdmin:false };
const t = (key) => dictionary[state.lang][key] || dictionary.en[key] || key;
const asString = (x) => String(x ?? '');
function setStatus(id,text,kind='') { const el=$(id); el.textContent=text;el.className='status'+(kind?' '+kind:''); }
function localRead(){try {return JSON.parse(localStorage.getItem('schoolshub_connection')||'{}')} catch {return {}}}
function localWrite(obj){try {localStorage.setItem('schoolshub_connection',JSON.stringify(obj));return true} catch{return false}}
function currentConfig(){const bundled=window.SCHOOLSHUB_CONFIG||{};const saved=localRead();return {supabaseUrl:saved.supabaseUrl||bundled.supabaseUrl||'',publishableKey:saved.publishableKey||bundled.publishableKey||''}}
function validSetup(){return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(state.config.supabaseUrl||'') && /^sb_publishable_[a-zA-Z0-9_-]+$/.test(state.config.publishableKey||'')}
function updateLabels(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='ur'?'rtl':'ltr';document.body.classList.toggle('rtl',state.lang==='ur');document.querySelectorAll('[data-i18n]').forEach(el=>{const value=el.getAttribute('data-i18n');if(dictionary[state.lang][value])el.textContent=t(value)});document.querySelectorAll('[data-ph]').forEach(el=>el.placeholder=t(el.dataset.ph));populateSchoolTypeFilter();$('languageButton').textContent=state.lang==='en'?'اردو':'English';renderPublic();if(state.isAdmin)renderAdmin();}
function switchView(view){if(view==='admin'&&!IS_ADMIN_PAGE){window.location.assign('admin.html');return;}if(view==='directory'&&IS_ADMIN_PAGE){window.location.assign('./');return;}state.view=view;$('directoryView').hidden=view!=='directory';$('adminView').hidden=view!=='admin';$('navDirectory').classList.toggle('active',view==='directory');$('navAdmin').classList.toggle('active',view==='admin');if($('schoolsbridgeWhatsapp'))$('schoolsbridgeWhatsapp').hidden=view!=='directory';window.scrollTo(0,0);if(view==='admin')showAdminState();}
async function request(path,{method='GET',body,authenticated=false,prefer}={}){
 if(!validSetup())throw Error('Project URL or publishable key missing.');
 const headers={apikey:state.config.publishableKey};
 if(authenticated){if(!state.userToken)throw Error('Not signed in.');headers.Authorization='Bearer '+state.userToken;}
 if(body!==undefined)headers['Content-Type']='application/json';
 if(prefer)headers.Prefer=prefer;
 const result=await fetch(state.config.supabaseUrl.replace(/\/$/,'')+path,{method,headers,body:body!==undefined?JSON.stringify(body):undefined});
 let responseText=await result.text(),value;
 try{value=responseText?JSON.parse(responseText):null}catch{value=responseText}
 if(!result.ok){const message=value && typeof value==='object'?(value.message||value.msg||value.error_description||value.error||JSON.stringify(value)):String(value);const error=Error(message||'HTTP '+result.status);error.status=result.status;throw error;}
 return value;
}
function friendlyError(error){return (error?.message||String(error||'Unknown error')).slice(0,350)}
function localizedName(item,nameKey='name',urKey='name_ur'){return state.lang==='ur'&&item?.[urKey]?item[urKey]:item?.[nameKey]||''}
function validatedMapsUrl(raw){
 try {
  const url=new URL(String(raw||''));
  const host=url.hostname.toLowerCase();
  if(url.protocol!=='https:')return '';
  if(host==='maps.app.goo.gl'||host==='goo.gl'||host==='maps.google.com')return url.href;
  if((host==='google.com'||host==='www.google.com')&&url.pathname.startsWith('/maps'))return url.href;
  if(/^((www|maps)\.)?google\.[a-z.]+$/.test(host)&&url.pathname.startsWith('/maps'))return url.href;
  return '';
 }catch {return ''}
}
function normalizeCampus(row){
 const legacyArea=row.areas||{},legacyCity=legacyArea.cities||{},legacyDistrict=legacyCity.districts||{},legacyProvince=legacyDistrict.provinces||{};
 const tehsil=row.tehsils||{},district=tehsil.districts||{},province=district.provinces||{};
 // district_id is used for territory-level campuses where a tehsil is not required.
 // Older campus records still fall back to their tehsil or legacy area location.
 const directDistrict=row.districts||{},directProvince=directDistrict.provinces||{};
 const school=row.schools||{};
 return {id:row.id,schoolId:row.school_id,school:localizedName(school),englishName:school.name||'',urduName:school.name_ur||'',campus:row.campus_name||'',province:province.name||directProvince.name||legacyProvince.name||'',district:district.name||directDistrict.name||legacyDistrict.name||'',tehsil:tehsil.name||'',legacyArea:legacyArea.name||'',legacyCity:legacyCity.name||'',google_maps_url:validatedMapsUrl(row.google_maps_url),website:school.website||'',school_type:SCHOOL_TYPES.includes(row.school_type)?row.school_type:'',is_published:row.is_published===true};
}
// Public location filters use the reference tables, not the published campus list.
// This makes provinces/districts/tehsils available even when no campuses are published.
async function loadPublicCatalogTable(table,columns){
 const pageSize=500, all=[];
 for(let offset=0;offset<20000;offset+=pageSize){
  const page=await request('/rest/v1/'+table+'?select='+columns+'&order=name.asc&limit='+pageSize+'&offset='+offset);
  if(!Array.isArray(page))throw Error('Unexpected response when reading '+table+'.');
  all.push(...page);
  if(page.length<pageSize)return all;
 }
 throw Error('Location list is unexpectedly large.');
}
async function loadPublic(){
 if(!validSetup()){
  state.connected=false;state.publicCampuses=[];
  state.publicCatalog={provinces:[],districts:[],tehsils:[]};
  setStatus('publicNotice',t('connectPreview'));populateFilters();renderPublic();return;
 }
 setStatus('publicNotice',state.lang==='en'?'Loading school locations and published campuses…':'مقامات اور شائع شدہ کیمپس لوڈ ہو رہے ہیں…');
 // Load published campuses and geographic reference data separately so one issue
 // doesn't silently erase the other type of result.
 const results=await Promise.allSettled([
  request('/rest/v1/campuses?select=id,campus_name,school_id,is_published,school_type,google_maps_url,schools(name,name_ur,website),districts(name,provinces(name)),tehsils(name,districts(name,provinces(name))),areas(name,cities(name,districts(name,provinces(name))))&is_published=eq.true&limit=1000'),
  loadPublicCatalogTable('provinces','id,name'),
  loadPublicCatalogTable('districts','id,name,province_id'),
  loadPublicCatalogTable('tehsils','id,name,district_id')
 ]);
 const messages=[];
 if(results[0].status==='fulfilled'){
  state.publicCampuses=(results[0].value||[]).map(normalizeCampus);
 }else{
  state.publicCampuses=[];
  messages.push('Could not load published schools: '+friendlyError(results[0].reason));
 }
 const [provinces,districts,tehsils]=results.slice(1).map((result,i)=>{
  if(result.status==='fulfilled')return result.value||[];
  messages.push('Could not load '+['provinces','districts','tehsils'][i]+': '+friendlyError(result.reason));
  return [];
 });
 state.publicCatalog={provinces,districts,tehsils};
 if(!provinces.length){
  messages.push('No public province records returned. Check the SELECT policy for provinces in Supabase; do not disable RLS.');
 }
 state.connected=results[0].status==='fulfilled';
 populateFilters();
 setStatus('publicNotice',messages.length?messages.join(' | '):t('loaded'),messages.length?'error':'ok');
 renderPublic();
}
function unique(list){return [...new Set(list.filter(Boolean))].sort((a,b)=>a.localeCompare(b));}
function populateSelect(el,items,label){const old=el.value;el.innerHTML='<option value="">'+escapeHTML(label)+'</option>'+items.map(value=>'<option value="'+escapeHTML(value)+'">'+escapeHTML(value)+'</option>').join('');if(items.includes(old))el.value=old;}
function populateFilters(){
 // Cascade strictly from province -> district -> tehsil.
 // No district options until a province is selected, and no tehsil options
 // until a district within that province is selected.
 const catalog=state.publicCatalog;
 const provinceSelect=$('provinceFilter'),districtSelect=$('districtFilter'),tehsilSelect=$('tehsilFilter');
 populateSelect(provinceSelect,unique(catalog.provinces.map(p=>p.name)),t('allProvinces'));
 const selectedProvince=provinceSelect.value;
 const provinceIds=new Set(catalog.provinces.filter(p=>p.name===selectedProvince).map(p=>p.id));
 const matchingDistricts=selectedProvince?catalog.districts.filter(d=>provinceIds.has(d.province_id)):[];
 populateSelect(districtSelect,unique(matchingDistricts.map(d=>d.name)),
  selectedProvince?t('allDistricts'):(state.lang==='ur'?'پہلے صوبہ منتخب کریں':'Select a province first'));
 districtSelect.disabled=!selectedProvince||matchingDistricts.length===0;
 if(districtSelect.disabled)districtSelect.value='';

 const selectedDistrict=districtSelect.disabled?'':districtSelect.value;
 const districtIds=new Set(matchingDistricts.filter(d=>d.name===selectedDistrict).map(d=>d.id));
 const matchingTehsils=selectedDistrict?catalog.tehsils.filter(th=>districtIds.has(th.district_id)):[];
 populateSelect(tehsilSelect,unique(matchingTehsils.map(th=>th.name)),
  selectedDistrict?t('allTehsils'):(state.lang==='ur'?'پہلے ضلع منتخب کریں':'Select a district first'));
 // Islamabad Capital Territory is selected at district level in this directory.
 const territoryOnly=selectedProvince==='Islamabad Capital Territory';
 const tehsilLabel=tehsilSelect.closest('label');
 if(tehsilLabel)tehsilLabel.hidden=territoryOnly;
 tehsilSelect.disabled=territoryOnly||!selectedDistrict||matchingTehsils.length===0;
 if(tehsilSelect.disabled)tehsilSelect.value='';
}

function renderPublic(){
 const cards=$('schoolCards');if(!cards)return;
 if(!validSetup()){
  $('searchCount').textContent='';
  cards.innerHTML='<article class="schoolcard"><span class="tag">'+escapeHTML(t('demo'))+'</span><h3>Pakistan Model School</h3><p>Pakistan · Khyber Pakhtunkhwa · Peshawar</p><p class="small">Preview only — not published data.</p></article>';
  return;
 }
 const q=$('nameFilter').value.trim().toLocaleLowerCase(),p=$('provinceFilter').value,d=$('districtFilter').value,th=$('tehsilFilter').value,st=$('schoolTypeFilter')?.value||'';
 const matched=state.publicCampuses.filter(x=>(!q||[x.school,x.englishName,x.urduName,x.campus].some(v=>asString(v).toLocaleLowerCase().includes(q)))&&(!p||x.province===p)&&(!d||x.district===d)&&(!th||x.tehsil===th)&&(!st||x.school_type===st));
 $('searchCount').textContent=matched.length+' '+t('count');
 cards.innerHTML=matched.length?matched.map(x=>{
  const place=[x.tehsil||x.legacyArea||x.legacyCity,x.district,x.province,'Pakistan'].filter(Boolean).join(' · ');
  const siteLink=x.website&&/^https?:\/\//i.test(x.website)?'<p class="small"><a rel="noopener noreferrer" target="_blank" href="'+escapeHTML(x.website)+'">School website</a></p>':'';
  const mapLink=x.google_maps_url?'<p><a class="maplink" rel="noopener noreferrer" target="_blank" href="'+escapeHTML(x.google_maps_url)+'">📍 View on Google Maps</a></p>':'';
  const detailLink='<p><a class="actionbtn" href="profile.html?campus='+encodeURIComponent(x.id)+'&lang='+encodeURIComponent(state.lang)+'">'+escapeHTML(state.lang==='ur'?'مکمل اسکول پروفائل دیکھیں':'View full school profile')+'</a></p>';
  const typeLine=x.school_type?'<p class="small">'+escapeHTML(t('schoolType'))+': '+escapeHTML(schoolTypeLabel(x.school_type))+'</p>':'';
  return '<article class="schoolcard"><span class="tag">'+escapeHTML(t('recordLabel'))+'</span><h3>'+escapeHTML(x.school||x.englishName)+'</h3><p><strong>'+escapeHTML(x.campus||'Main campus')+'</strong></p><p>📍 '+escapeHTML(place)+'</p>'+typeLine+detailLink+mapLink+siteLink+'</article>';
 }).join(''):'<div class="empty">'+escapeHTML(state.publicCampuses.length?t('noResults'):t('noPublished'))+'</div>';
}
function showAdminState(){const configured=validSetup();$('setupPanel').hidden=configured;$('loginPanel').hidden=!configured||!!state.userToken;$('adminData').hidden=!state.isAdmin;$('blockedPanel').hidden=true;$('adminSignOut').hidden=!state.userToken;if(!configured){$('setupUrl').value=state.config.supabaseUrl||'https://xmzrevedabfoehqrfi.supabase.co';$('setupKey').value=state.config.publishableKey||'';}else if(state.userToken&&!state.isAdmin){$('loginPanel').hidden=true;checkAdminAccess();}}
async function signIn(email,password){
 setStatus('loginMessage',t('loginSuccess'));
 const result=await request('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password}});
 if(!result.access_token)throw Error('No session token received.');
 state.userToken=result.access_token;state.isAdmin=false;
 await checkAdminAccess();
}
async function checkAdminAccess(){
 $('loginPanel').hidden=true;$('blockedPanel').hidden=true;$('adminData').hidden=true;$('adminSignOut').hidden=false;
 try {
  const permitted=await request('/rest/v1/rpc/is_super_admin',{method:'POST',body:{},authenticated:true});
  if(permitted!==true){$('blockedPanel').hidden=false;$('blockedText').textContent=t('unauthorized');return;}
  state.isAdmin=true;await loadAdmin();$('adminData').hidden=false;
 }catch(error){state.isAdmin=false;$('blockedPanel').hidden=false;$('blockedText').textContent=t('permissionError')+' Details: '+friendlyError(error);}
}
async function loadAdmin(){
 const [schools,campuses,areas,provinces,districts,tehsils]=await Promise.all([
  request('/rest/v1/schools?select=id,name,name_ur,website,school_type&order=name.asc&limit=500',{authenticated:true}),
  request('/rest/v1/campuses?select=id,school_id,area_id,tehsil_id,district_id,google_maps_url,campus_name,is_published,school_type&order=created_at.desc&limit=500',{authenticated:true}),
  request('/rest/v1/areas?select=id,name,cities(id,name,districts(id,name,provinces(id,name)))&limit=1000',{authenticated:true}),
  request('/rest/v1/provinces?select=id,name&order=name.asc&limit=1000',{authenticated:true}),
  request('/rest/v1/districts?select=id,name,province_id&order=name.asc&limit=1000',{authenticated:true}),
  request('/rest/v1/tehsils?select=id,name,district_id&order=name.asc&limit=2000',{authenticated:true})
 ]);
 state.schools=schools||[];state.campuses=campuses||[];
 state.provinces=provinces||[];state.districts=districts||[];state.tehsils=tehsils||[];
 state.areas=(areas||[]).map(x=>({
  id:x.id,name:x.name,cityName:x.cities?.name||'',
  location:[x.cities?.name,x.cities?.districts?.name,x.cities?.districts?.provinces?.name].filter(Boolean).join(' · ')
 }));
 renderAdmin();
}
function renderAdmin(){
 if(!state.isAdmin)return;
 $('schoolMetric').textContent=state.schools.length;
 $('campusMetric').textContent=state.campuses.length;
 $('publishedMetric').textContent=state.campuses.filter(x=>x.is_published===true).length;
 $('schoolManagement').innerHTML=state.schools.length?state.schools.map(s=>'<div class="dataitem"><strong>'+escapeHTML(localizedName(s))+'</strong><p>'+escapeHTML(s.website||'')+'</p><div class="actions"><button class="actionbtn" type="button" data-action="edit-school" data-id="'+escapeHTML(s.id)+'">'+escapeHTML(t('edit'))+'</button></div></div>').join(''):'<div class="secondary">No schools yet.</div>';
 $('campusManagement').innerHTML=state.campuses.length?state.campuses.map(c=>{
  const school=state.schools.find(s=>s.id===c.school_id),th=state.tehsils.find(t=>t.id===c.tehsil_id),legacy=state.areas.find(a=>a.id===c.area_id);
  const district=state.districts.find(d=>d.id===(th?.district_id||c.district_id)),province=state.provinces.find(p=>p.id===district?.province_id);
  const place=th?[th.name,district?.name,province?.name].filter(Boolean).join(' · '):district?[district.name,province?.name].filter(Boolean).join(' · '):legacy?[legacy.name,legacy.location].filter(Boolean).join(' · '):'Location not set';
  return '<div class="dataitem"><strong>'+escapeHTML(c.campus_name||'Main campus')+'</strong><p>'+escapeHTML(school?.name||'School')+' · '+escapeHTML(place)+'</p><p class="small">'+escapeHTML(t('schoolType'))+': '+escapeHTML(schoolTypeLabel(c.school_type))+'</p><span class="tag">'+(c.is_published?'Published':'Unpublished')+'</span><div class="actions"><button class="actionbtn '+(c.is_published?'warning':'')+'" type="button" data-action="toggle-campus" data-id="'+escapeHTML(c.id)+'">'+escapeHTML(c.is_published?t('unpublish'):t('publish'))+'</button> <button class="actionbtn" type="button" data-action="edit-campus-profile" data-id="'+escapeHTML(c.id)+'">'+escapeHTML(state.lang==='ur'?'تفصیلی پروفائل':'Edit profile')+'</button></div></div>';
 }).join(''):'<div class="secondary">No campuses yet.</div>';
}
function showModal(title,body){$('modalTitle').textContent=title;$('modalBody').innerHTML=body;$('modalOverlay').hidden=false;}
function closeModal(){$('modalOverlay').hidden=true;$('modalBody').innerHTML='';}
function schoolForm(school){const edit=!!school;showModal(edit?t('editSchool'):t('createSchool'),'<form id="schoolEditForm" class="formgrid"><label><span>'+t('nameEn')+'</span><input name="name" maxlength="250" required value="'+escapeHTML(school?.name||'')+'" /></label><label><span>'+t('nameUr')+'</span><input name="name_ur" maxlength="250" value="'+escapeHTML(school?.name_ur||'')+'" /></label><label class="full"><span>'+t('website')+'</span><input name="website" type="url" placeholder="https://example.com" value="'+escapeHTML(school?.website||'')+'" /></label><div class="full formrow"><button class="primary" type="submit">'+t('save')+'</button><button class="outlined" id="cancelSchool" type="button">'+t('cancel')+'</button></div><div class="full status" id="schoolFormStatus"></div></form>');$('cancelSchool').onclick=closeModal;$('schoolEditForm').onsubmit=async (event)=>{event.preventDefault();const data=new FormData(event.currentTarget);const payload={name:String(data.get('name')||'').trim(),name_ur:String(data.get('name_ur')||'').trim()||null,website:String(data.get('website')||'').trim()||null};try {if(!payload.name)throw Error('School name is required.');await request('/rest/v1/schools'+(edit?'?id=eq.'+encodeURIComponent(school.id):''),{method:edit?'PATCH':'POST',body:edit?payload:{...payload,school_type:'private'},authenticated:true,prefer:'return=minimal'});closeModal();await loadAdmin();setStatus('adminMessage',t('schoolSaved'),'ok');}catch(error){setStatus('schoolFormStatus',friendlyError(error),'error')}};}
async function campusProfileForm(campus){
 if(!campus||!state.isAdmin)return;
 const fields=[
  ['introduction','Introduction',4],['vision','Vision',3],['mission','Mission',3],['goals','Goals',3],
  ['curriculum','Curriculum / education system',2],['grades_offered','Grade levels',2],
  ['instruction_languages','Languages of instruction',2],['accreditation','Accreditations (verified only)',2],
  ['admissions_process','Admissions process',3],['tuition_fee','Tuition information (verified only)',2],
  ['registration_fee','Registration fee (verified only)',2],['school_hours','School hours',2],
  ['facilities','Facilities (one per line)',3],['transport_info','Transport',2],
  ['extracurricular','Extracurricular activities',2],['street_address','Street address',2],
  ['gallery_urls','Campus photo URLs (one HTTPS URL per line, with permission)',4],
  ['events_text','Events',3],['faq_text','Frequently asked questions',4]
 ];
 let existing={};
 try{
  const rows=await request('/rest/v1/campus_profiles?select=*&campus_id=eq.'+encodeURIComponent(campus.id)+'&limit=1',{authenticated:true});
  existing=Array.isArray(rows)?(rows[0]||{}):{};
 }catch(error){setStatus('adminMessage','Profile details are not ready yet. First run the supplied Supabase migration. '+friendlyError(error),'error');return;}
 const inputs=fields.map(([key,label,rows])=>'<label class="full"><span>'+escapeHTML(label)+'</span><textarea name="'+key+'" rows="'+rows+'" maxlength="10000" style="width:100%;resize:vertical;border:1px solid #cddde9;border-radius:10px;padding:12px;font:inherit;color:#163447">'+escapeHTML(existing[key]||'')+'</textarea></label>').join('');
 showModal('Edit campus profile — '+campus.campus_name,
 '<form class="formgrid" id="campusProfileEditForm"><p class="full secondary">Only verified information should be published. School phone numbers are never displayed on the public profile. Parent reviews will require separate moderation.</p><label class="full"><span>'+escapeHTML(t('schoolType'))+'</span><select name="school_type">'+schoolTypeOptions(campus.school_type||'')+'</select></label>'+inputs+
 '<div class="full formrow"><button class="primary" type="submit">Save profile details</button><button id="cancelCampusProfile" type="button">Cancel</button></div><div class="full status" id="campusProfileStatus"></div></form>');
 $('cancelCampusProfile').onclick=closeModal;
 $('campusProfileEditForm').onsubmit=async e=>{
  e.preventDefault();
  const form=e.currentTarget;const data=new FormData(form);
  const chosenType=String(data.get('school_type')||'');
  if(chosenType&&!SCHOOL_TYPES.includes(chosenType)){setStatus('campusProfileStatus','Please choose a valid school type.','error');return;}
  const payload={campus_id:campus.id,updated_at:new Date().toISOString()};
  fields.forEach(([key])=>{payload[key]=String(data.get(key)||'').trim()||null});
  const urls=(payload.gallery_urls||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  if(urls.some(x=>!/^https:\/\//i.test(x))){setStatus('campusProfileStatus','Use HTTPS links for campus photos.','error');return;}
  try{
   await request('/rest/v1/campus_profiles?on_conflict=campus_id',{method:'POST',body:payload,authenticated:true,prefer:'resolution=merge-duplicates,return=minimal'});
   if(chosenType!==(campus.school_type||'')){
    await request('/rest/v1/campuses?id=eq.'+encodeURIComponent(campus.id),{method:'PATCH',body:{school_type:chosenType||null},authenticated:true,prefer:'return=minimal'});
   }
   closeModal();await loadAdmin();await loadPublic();setStatus('adminMessage','Campus profile saved. School Type updated if changed.','ok');
  }catch(error){setStatus('campusProfileStatus','Could not save: '+friendlyError(error),'error');}
 };
}

function campusForm(){
 if(!state.schools.length){setStatus('adminMessage','Add a school before creating a campus.','error');return;}
 const labels=state.lang==='ur'?{province:'صوبہ منتخب کریں',district:'ضلع منتخب کریں',tehsil:'تحصیل منتخب کریں'}:{province:'Choose a province',district:'Choose a district',tehsil:'Choose a tehsil'};
 const schoolOptions='<option value="">'+escapeHTML(t('chooseSchool'))+'</option>'+state.schools.map(s=>'<option value="'+escapeHTML(s.id)+'">'+escapeHTML(localizedName(s))+'</option>').join('');
 showModal(t('createCampus'),
  '<form id="campusEditForm" class="formgrid">'+
  '<label class="full"><span>'+escapeHTML(t('chooseSchool'))+'</span><select id="campusSchool" name="school_id" required>'+schoolOptions+'</select></label>'+
  '<label><span>'+escapeHTML(t('country'))+'</span><input value="Pakistan" readonly /></label>'+
  '<label><span>'+escapeHTML(t('province'))+'</span><select id="campusProvince" required></select></label>'+
  '<label><span>'+escapeHTML(t('district'))+'</span><select id="campusDistrict" required disabled></select></label>'+
  '<label id="campusTehsilField"><span>'+escapeHTML(t('tehsil'))+'</span><select id="campusTehsil" required disabled></select></label>'+
  '<label class="full"><span>'+escapeHTML(t('maps'))+'</span><input name="google_maps_url" type="url" required placeholder="https://maps.app.goo.gl/..." /></label>'+
  '<label class="full"><span>'+escapeHTML(t('campusName'))+'</span><input name="campus_name" maxlength="250" placeholder="Main Campus" required /></label>'+
  '<label class="full"><span>'+escapeHTML(t('schoolType'))+'</span><select name="school_type" required>'+schoolTypeOptions('',true)+'</select></label>'+
  '<div class="full"><small id="campusLocationHint" class="secondary">'+escapeHTML(state.lang==='ur'?'ضلع منتخب کرنے کے بعد تحصیل منتخب کریں۔':'Select a district to see its tehsils. New campuses are unpublished until approved.')+'</small></div>'+
  '<div class="full formrow"><button class="primary" type="submit">'+escapeHTML(t('save'))+'</button><button class="outlined" id="cancelCampus" type="button">'+escapeHTML(t('cancel'))+'</button></div>'+
  '<div class="full status" id="campusFormStatus"></div></form>');
 $('cancelCampus').onclick=closeModal;
 const provinces=$('campusProvince'),districts=$('campusDistrict'),tehsils=$('campusTehsil');
 const districtOnly=()=>state.provinces.some(p=>p.id===provinces.value&&p.name==='Islamabad Capital Territory');
 const syncTehsilField=()=>{
  const hide=districtOnly();
  $('campusTehsilField').hidden=hide;
  tehsils.required=!hide;
  if(hide){tehsils.value='';tehsils.disabled=true;}
 };
 const showChoices=(select,items,placeholder,enabled=true)=>{
  items=[...items].sort((a,b)=>a.name.localeCompare(b.name));
  select.innerHTML='<option value="">'+escapeHTML(placeholder)+'</option>'+items.map(item=>'<option value="'+escapeHTML(item.id)+'">'+escapeHTML(item.name)+'</option>').join('');
  select.disabled=!enabled||items.length===0;
 };
 showChoices(provinces,state.provinces,labels.province);
 showChoices(districts,[],labels.district,false);
 showChoices(tehsils,[],labels.tehsil,false);
 provinces.onchange=()=>{
  showChoices(districts,state.districts.filter(d=>d.province_id===provinces.value),labels.district,!!provinces.value);
  showChoices(tehsils,[],labels.tehsil,false);
  syncTehsilField();
  $('campusLocationHint').textContent=districtOnly()
   ?(state.lang==='ur'?'اسلام آباد کے لیے صرف ضلع منتخب کریں؛ تحصیل کی ضرورت نہیں۔':'For Islamabad, select the district; no tehsil is required.')
   :(state.lang==='ur'?'ضلع منتخب کرنے کے بعد تحصیل منتخب کریں۔':'Select a district to see its tehsils.');
 };
 districts.onchange=()=>{
  const available=districtOnly()?[]:state.tehsils.filter(th=>th.district_id===districts.value);
  showChoices(tehsils,available,labels.tehsil,!!districts.value);
  syncTehsilField();
  $('campusLocationHint').textContent=districtOnly()
   ?(state.lang==='ur'?'اسلام آباد: صرف ضلع منتخب کریں اور گوگل میپس کا مقام درج کریں۔':'Islamabad: district only. Add the Google Maps location below.')
   :available.length?available.length+' tehsil(s) available.':'No tehsils registered for this district yet. Add them in Supabase first.';
 };
 $('campusEditForm').onsubmit=async(event)=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget),mapUrl=validatedMapsUrl(data.get('google_maps_url'));
  const territoryOnly=districtOnly();
  const payload={school_id:String(data.get('school_id')||''),district_id:districts.value,tehsil_id:territoryOnly?null:(tehsils.value||null),google_maps_url:mapUrl,campus_name:String(data.get('campus_name')||'').trim(),school_type:String(data.get('school_type')||''),is_published:false};
  try {
   if(!state.schools.some(s=>s.id===payload.school_id))throw Error('Choose a school.');
   if(!state.districts.some(d=>d.id===payload.district_id&&d.province_id===provinces.value))throw Error('Select a province and district.');
   if(!territoryOnly){
    const th=state.tehsils.find(t=>t.id===payload.tehsil_id);
    if(!th||th.district_id!==districts.value)throw Error('Select a tehsil for this district.');
   }
   if(!mapUrl)throw Error('Please paste a valid HTTPS Google Maps share link.');
   if(!payload.campus_name)throw Error('Enter a campus name.');
   if(!SCHOOL_TYPES.includes(payload.school_type))throw Error('Choose a school type.');
   await request('/rest/v1/campuses',{method:'POST',body:payload,authenticated:true,prefer:'return=minimal'});
   closeModal();await loadAdmin();setStatus('adminMessage',t('campusSaved'),'ok');
  }catch(error){setStatus('campusFormStatus',friendlyError(error),'error');}
 };
}
async function toggleCampus(id){const campus=state.campuses.find(c=>c.id===id);if(!campus)return;const next=!campus.is_published;if(!window.confirm(t(next?'publishConfirm':'unpublishConfirm')))return;try{await request('/rest/v1/campuses?id=eq.'+encodeURIComponent(id),{method:'PATCH',body:{is_published:next},authenticated:true,prefer:'return=minimal'});await loadAdmin();await loadPublic();setStatus('adminMessage',t('campusUpdated'),'ok')}catch(error){setStatus('adminMessage',friendlyError(error),'error')}}
async function signOut(){const token=state.userToken;state.userToken=null;state.isAdmin=false;state.schools=[];state.campuses=[];state.areas=[];state.provinces=[];state.districts=[];state.cities=[];state.tehsils=[];try{if(token)await fetch(state.config.supabaseUrl.replace(/\/$/,'')+'/auth/v1/logout',{method:'POST',headers:{apikey:state.config.publishableKey,Authorization:'Bearer '+token}})}catch{}showAdminState();}

// UI events
$('homeLink').onclick=()=>switchView('directory');$('navDirectory').onclick=()=>switchView('directory');$('navAdmin').onclick=()=>switchView('admin');$('languageButton').onclick=()=>{state.lang=state.lang==='en'?'ur':'en';updateLabels();populateFilters()};
$('nameFilter').oninput=renderPublic;
$('provinceFilter').onchange=()=>{$('districtFilter').value='';$('tehsilFilter').value='';populateFilters();renderPublic()};
$('districtFilter').onchange=()=>{$('tehsilFilter').value='';populateFilters();renderPublic()};
$('tehsilFilter').onchange=renderPublic;
if($('schoolTypeFilter'))$('schoolTypeFilter').onchange=renderPublic;
$('clearFilters').onclick=()=>{$('nameFilter').value='';$('provinceFilter').value='';$('districtFilter').value='';$('tehsilFilter').value='';if($('schoolTypeFilter'))$('schoolTypeFilter').value='';populateFilters();renderPublic()};
$('configForm').onsubmit=async (event)=>{event.preventDefault();state.config={supabaseUrl:$('setupUrl').value.trim().replace(/\/$/,''),publishableKey:$('setupKey').value.trim()};if(!validSetup()){setStatus('configMessage','Enter a valid https://project.supabase.co URL and an sb_publishable_ key.','error');return;}localWrite(state.config);setStatus('configMessage',t('setupSaved'),'ok');await loadPublic();$('setupPanel').hidden=true;$('loginPanel').hidden=false;};
$('changeConnection').onclick=()=>{$('setupPanel').hidden=false;$('loginPanel').hidden=true;$('setupUrl').value=state.config.supabaseUrl;$('setupKey').value=state.config.publishableKey};
$('loginForm').onsubmit=async(event)=>{event.preventDefault();const email=$('loginEmail').value.trim(),password=$('loginPassword').value;if(!email||!password){setStatus('loginMessage',t('passwordError'),'error');return;}const button=$('loginButton');button.disabled=true;try{await signIn(email,password);$('loginPassword').value='';}catch(error){setStatus('loginMessage','Sign-in failed: '+friendlyError(error),'error');state.userToken=null;state.isAdmin=false;$('loginPanel').hidden=false;}finally{button.disabled=false}};
$('adminSignOut').onclick=signOut;$('blockedSignout').onclick=signOut;$('retryAdmin').onclick=checkAdminAccess;
$('addSchoolButton').onclick=()=>schoolForm(null);$('addCampusButton').onclick=campusForm;
$('schoolManagement').onclick=event=>{const button=event.target.closest('button[data-action]');if(button?.dataset.action==='edit-school'){const school=state.schools.find(s=>s.id===button.dataset.id);if(school)schoolForm(school)}};
$('campusManagement').onclick=event=>{const button=event.target.closest('button[data-action]');if(!button)return;if(button.dataset.action==='toggle-campus')toggleCampus(button.dataset.id);else if(button.dataset.action==='edit-campus-profile'){const campus=state.campuses.find(c=>c.id===button.dataset.id);if(campus)campusProfileForm(campus);}};
$('closeModal').onclick=closeModal;$('modalOverlay').onclick=event=>{if(event.target===$('modalOverlay'))closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('modalOverlay').hidden)closeModal()});

initializeEnhancements();state.config=currentConfig();updateLabels();$('setupUrl').value=state.config.supabaseUrl||'https://xmzrevedabfoehqrfi.supabase.co';$('setupKey').value=state.config.publishableKey||'';if(IS_ADMIN_PAGE){switchView('admin');}else{loadPublic();}
