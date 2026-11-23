'use strict';

const $ = (id) => document.getElementById(id);
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const dictionary = {
 en: {
  directory:'Find Schools',admin:'Super Admin',freeTag:'FREE PRIVATE SCHOOL DIRECTORY',heroTitle:'Find the right school in Pakistan.',heroText:'Explore private schools by province, district, city and area. Compare campuses, then choose with confidence.',wholePakistan:'All Pakistan',freeForever:'Free to search',bilingual:'English & Urdu',schoolName:'School name',searchSchool:'Search schools…',province:'Province / territory',district:'District',city:'City',area:'Area',allProvinces:'All provinces',allDistricts:'All districts',allCities:'All cities',allAreas:'All areas',clearFilters:'Clear filters',explore:'Explore private schools',verifiedOnly:'Only published campuses appear',adminArea:'SCHOOL MANAGEMENT',adminDashboard:'Super Admin dashboard',adminIntro:'Manage private schools and campuses with your authorized account.',signOut:'Sign out',connectTitle:'Connect to your Supabase project',connectExpl:'Enter your project URL and its public publishable key. Never enter secret or service-role keys here.',connect:'Connect',adminSignIn:'Administrator sign in',signInDesc:'Use the Supabase Authentication account you created for SchoolsHub.ai.',connection:'Connection settings',email:'Email',password:'Password',signIn:'Sign in',schools:'Schools',campuses:'Campuses',published:'Published campuses',manageSchools:'Manage schools',manageCampuses:'Manage campuses',addSchool:'+ Add school',addCampus:'+ Add campus',accessCheck:'Administrator access check',retry:'Try again',footerText:'A free directory of private schools in Pakistan',noResults:'No matching published campuses found.',noPublished:'No published campuses yet. Your private test campus will not appear here.',connectPreview:'Preview mode: connect your public Supabase key to load live listings.',demo:'SAMPLE LISTING — not public data',recordLabel:'Private school',locationUnknown:'Location not available',count:'published campus(es)',save:'Save',cancel:'Cancel',nameEn:'School name (English)',nameUr:'School name (Urdu)',website:'Website (optional)',campusName:'Campus name',chooseSchool:'Choose a school',chooseArea:'Choose an area',createSchool:'Create school',editSchool:'Edit school',createCampus:'Create campus',publish:'Publish',unpublish:'Unpublish',edit:'Edit',passwordError:'Please enter an email and password.',loginSuccess:'Signed in. Checking administrator permission…',schoolSaved:'School saved.',campusSaved:'Campus saved.',campusUpdated:'Campus status updated.',publishConfirm:'Publish this campus to the public directory?',unpublishConfirm:'Hide this campus from the public directory?',setupSaved:'Connection saved in this browser. Please sign in as administrator.',unauthorized:'This account is not permitted to manage the directory.',permissionError:'Cannot verify administrator access. In Supabase Data API settings, expose the is_super_admin function, then retry. Do not disable RLS.',loaded:'Showing live published campuses from Supabase.',manageHint:'Use Save to create records; publish a campus only when its details have been checked.'
 },
 ur: {
  directory:'اسکول تلاش کریں',admin:'سپر ایڈمن',freeTag:'مفت نجی اسکول ڈائریکٹری',heroTitle:'پاکستان میں اپنے بچوں کے لیے مناسب اسکول تلاش کریں۔',heroText:'صوبے، ضلع، شہر اور علاقے کے مطابق نجی اسکول تلاش کریں اور اسکول کیمپس کا موازنہ کریں۔',wholePakistan:'پورا پاکستان',freeForever:'تلاش بالکل مفت',bilingual:'اردو اور انگریزی',schoolName:'اسکول کا نام',searchSchool:'اسکول تلاش کریں…',province:'صوبہ / علاقہ',district:'ضلع',city:'شہر',area:'علاقہ',allProvinces:'تمام صوبے',allDistricts:'تمام اضلاع',allCities:'تمام شہر',allAreas:'تمام علاقے',clearFilters:'فلٹر صاف کریں',explore:'نجی اسکول دریافت کریں',verifiedOnly:'صرف شائع شدہ کیمپس دکھائے جاتے ہیں',adminArea:'اسکول مینجمنٹ',adminDashboard:'سپر ایڈمن ڈیش بورڈ',adminIntro:'اپنے مجاز اکاؤنٹ سے اسکولوں اور کیمپس کا انتظام کریں۔',signOut:'لاگ آؤٹ',connectTitle:'Supabase پراجیکٹ سے منسلک کریں',connectExpl:'اپنا پراجیکٹ URL اور پبلش ایبل کی درج کریں۔ خفیہ کی ہرگز درج نہ کریں۔',connect:'منسلک کریں',adminSignIn:'ایڈمن سائن اِن',signInDesc:'اپنا SchoolsHub.ai Supabase اکاؤنٹ استعمال کریں۔',connection:'کنکشن سیٹنگز',email:'ای میل',password:'پاس ورڈ',signIn:'سائن اِن',schools:'اسکول',campuses:'کیمپس',published:'شائع شدہ کیمپس',manageSchools:'اسکول مینجمنٹ',manageCampuses:'کیمپس مینجمنٹ',addSchool:'+ اسکول شامل کریں',addCampus:'+ کیمپس شامل کریں',accessCheck:'ایڈمن رسائی کی جانچ',retry:'دوبارہ کوشش کریں',footerText:'پاکستان میں نجی اسکولوں کی مفت ڈائریکٹری',noResults:'کوئی شائع شدہ کیمپس نہیں ملا۔',noPublished:'ابھی کوئی شائع شدہ کیمپس موجود نہیں۔ آپ کا ٹیسٹ کیمپس عوام کو نظر نہیں آئے گا۔',connectPreview:'پیش نظارہ: اصل ریکارڈ دکھانے کے لیے Supabase سے منسلک کریں۔',demo:'صرف نمونہ — اصل پبلک ریکارڈ نہیں',recordLabel:'نجی اسکول',locationUnknown:'مقام دستیاب نہیں',count:'شائع شدہ کیمپس',save:'محفوظ کریں',cancel:'منسوخ کریں',nameEn:'اسکول کا نام (انگریزی)',nameUr:'اسکول کا نام (اردو)',website:'ویب سائٹ (اختیاری)',campusName:'کیمپس کا نام',chooseSchool:'اسکول منتخب کریں',chooseArea:'علاقہ منتخب کریں',createSchool:'اسکول بنائیں',editSchool:'اسکول تبدیل کریں',createCampus:'کیمپس بنائیں',publish:'شائع کریں',unpublish:'چھپائیں',edit:'تبدیل کریں',passwordError:'ای میل اور پاس ورڈ درج کریں۔',loginSuccess:'سائن اِن ہو گیا۔ ایڈمن اجازت چیک ہو رہی ہے…',schoolSaved:'اسکول محفوظ ہو گیا۔',campusSaved:'کیمپس محفوظ ہو گیا۔',campusUpdated:'کیمپس کی حیثیت اپ ڈیٹ ہو گئی۔',publishConfirm:'کیا آپ یہ کیمپس عوامی ڈائریکٹری پر شائع کرنا چاہتے ہیں؟',unpublishConfirm:'کیا آپ یہ کیمپس عوام سے چھپانا چاہتے ہیں؟',setupSaved:'کنکشن اس براؤزر میں محفوظ ہو گیا۔ اب ایڈمن کے طور پر سائن اِن کریں۔',unauthorized:'اس اکاؤنٹ کو ڈائریکٹری میں تبدیلی کی اجازت نہیں ہے۔',permissionError:'ایڈمن اجازت کی تصدیق نہیں ہو سکی۔ Supabase Data API میں is_super_admin فنکشن کو ایکسپوز کریں، RLS بند نہ کریں۔',loaded:'Supabase سے شائع شدہ کیمپس دکھائے جا رہے ہیں۔',manageHint:'کیمپس شائع کرنے سے پہلے اس کی تمام معلومات چیک کریں۔'
 }
};
const state = { lang: 'en', view:'directory', config: {}, userToken: null, publicCampuses:[], schools:[], campuses:[], areas:[], provinces:[], districts:[], cities:[], locales:[], connected:false, isAdmin:false };
const t = (key) => dictionary[state.lang][key] || dictionary.en[key] || key;
const asString = (x) => String(x ?? '');
function setStatus(id,text,kind='') { const el=$(id); el.textContent=text;el.className='status'+(kind?' '+kind:''); }
function localRead(){try {return JSON.parse(localStorage.getItem('schoolshub_connection')||'{}')} catch {return {}}}
function localWrite(obj){try {localStorage.setItem('schoolshub_connection',JSON.stringify(obj));return true} catch{return false}}
function currentConfig(){const bundled=window.SCHOOLSHUB_CONFIG||{};const saved=localRead();return {supabaseUrl:saved.supabaseUrl||bundled.supabaseUrl||'',publishableKey:saved.publishableKey||bundled.publishableKey||''}}
function validSetup(){return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(state.config.supabaseUrl||'') && /^sb_publishable_[a-zA-Z0-9_-]+$/.test(state.config.publishableKey||'')}
function updateLabels(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='ur'?'rtl':'ltr';document.body.classList.toggle('rtl',state.lang==='ur');document.querySelectorAll('[data-i18n]').forEach(el=>{const value=el.getAttribute('data-i18n');if(dictionary[state.lang][value])el.textContent=t(value)});document.querySelectorAll('[data-ph]').forEach(el=>el.placeholder=t(el.dataset.ph));$('languageButton').textContent=state.lang==='en'?'اردو':'English';renderPublic();if(state.isAdmin)renderAdmin();}
function switchView(view){state.view=view;$('directoryView').hidden=view!=='directory';$('adminView').hidden=view!=='admin';$('navDirectory').classList.toggle('active',view==='directory');$('navAdmin').classList.toggle('active',view==='admin');window.scrollTo(0,0);if(view==='admin')showAdminState();}
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
function normalizeCampus(row){const area=row.areas||{},city=area.cities||{},district=city.districts||{},province=district.provinces||{};const school=row.schools||{};return {id:row.id,schoolId:row.school_id,school:localizedName(school),englishName:school.name||'',urduName:school.name_ur||'',campus:row.campus_name||'',province:province.name||'',district:district.name||'',city:city.name||'',area:area.name||'',website:school.website||'',is_published:row.is_published===true};}
async function loadPublic(){
 if(!validSetup()){state.connected=false;state.publicCampuses=[];state.locales=[];setStatus('publicNotice',t('connectPreview'));renderPublic();return;}
 setStatus('publicNotice',state.lang==='en'?'Loading published campuses…':'کیمپس لوڈ ہو رہے ہیں…');
 try{
  const records=await request('/rest/v1/campuses?select=id,campus_name,school_id,is_published,schools(name,name_ur,website),areas(name,cities(name,districts(name,provinces(name))))&is_published=eq.true&limit=1000');
  state.publicCampuses=(records||[]).map(normalizeCampus);
  state.connected=true;populateFilters();setStatus('publicNotice',t('loaded'),'ok');renderPublic();
 }catch(error){state.connected=false;state.publicCampuses=[];setStatus('publicNotice','Unable to load published schools: '+friendlyError(error),'error');renderPublic()}
}
function unique(list){return [...new Set(list.filter(Boolean))].sort((a,b)=>a.localeCompare(b));}
function populateSelect(el,items,label){const old=el.value;el.innerHTML='<option value="">'+escapeHTML(label)+'</option>'+items.map(value=>'<option value="'+escapeHTML(value)+'">'+escapeHTML(value)+'</option>').join('');if(items.includes(old))el.value=old;}
function populateFilters(){const list=state.publicCampuses;const province=$('provinceFilter').value;populateSelect($('provinceFilter'),unique(list.map(x=>x.province)),t('allProvinces'));const p=$('provinceFilter').value;populateSelect($('districtFilter'),unique(list.filter(x=>!p||x.province===p).map(x=>x.district)),t('allDistricts'));const d=$('districtFilter').value;populateSelect($('cityFilter'),unique(list.filter(x=>(!p||x.province===p)&&(!d||x.district===d)).map(x=>x.city)),t('allCities'));const c=$('cityFilter').value;populateSelect($('areaFilter'),unique(list.filter(x=>(!p||x.province===p)&&(!d||x.district===d)&&(!c||x.city===c)).map(x=>x.area)),t('allAreas'));}
function renderPublic(){
 const cards=$('schoolCards');if(!cards)return;
 if(!validSetup()){
  $('searchCount').textContent='';
  cards.innerHTML='<article class="schoolcard"><span class="tag">'+escapeHTML(t('demo'))+'</span><h3>Pakistan Model School</h3><p>Hayatabad · Peshawar</p><p class="small">'+(state.lang==='en'?'Preview only; your database test campus is unpublished.':'صرف نمونہ؛ آپ کا ٹیسٹ کیمپس ابھی شائع نہیں ہوا۔')+'</p></article>';return;
 }
 const q=$('nameFilter').value.trim().toLocaleLowerCase(),p=$('provinceFilter').value,d=$('districtFilter').value,c=$('cityFilter').value,a=$('areaFilter').value;
 const matched=state.publicCampuses.filter(x=>(!q||[x.school,x.englishName,x.urduName,x.campus].some(val=>asString(val).toLocaleLowerCase().includes(q)))&&(!p||x.province===p)&&(!d||x.district===d)&&(!c||x.city===c)&&(!a||x.area===a));
 $('searchCount').textContent=matched.length+' '+t('count');
 cards.innerHTML=matched.length?matched.map(x=>'<article class="schoolcard"><span class="tag">'+escapeHTML(t('recordLabel'))+'</span><h3>'+escapeHTML(x.school||x.englishName)+'</h3><p><strong>'+escapeHTML(x.campus||'Main campus')+'</strong></p><p>📍 '+escapeHTML([x.area,x.city,x.district,x.province].filter(Boolean).join(' · ')||t('locationUnknown'))+'</p>'+(x.website&&/^https?:\/\//i.test(x.website)?'<p class="small"><a rel="noopener noreferrer" target="_blank" href="'+escapeHTML(x.website)+'">'+escapeHTML(new URL(x.website).hostname)+'</a></p>':'')+'</article>').join(''):'<div class="empty">'+escapeHTML(state.publicCampuses.length?t('noResults'):t('noPublished'))+'</div>';
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
 // Load district and city catalogs independently from areas.
 // Districts are valid even when no city or neighborhood has been registered yet.
 const [schools,campuses,areas,provinces,districts,cities]=await Promise.all([
  request('/rest/v1/schools?select=id,name,name_ur,website,school_type&order=name.asc&limit=500',{authenticated:true}),
  request('/rest/v1/campuses?select=id,school_id,area_id,campus_name,is_published&order=created_at.desc&limit=500',{authenticated:true}),
  request('/rest/v1/areas?select=id,name,cities(id,name,districts(id,name,provinces(id,name)))&limit=1000',{authenticated:true}),
  request('/rest/v1/provinces?select=id,name&order=name.asc&limit=1000',{authenticated:true}),
  request('/rest/v1/districts?select=id,name,province_id&order=name.asc&limit=1000',{authenticated:true}),
  request('/rest/v1/cities?select=id,name,district_id&order=name.asc&limit=1000',{authenticated:true})
 ]);
 state.schools=schools||[];
 state.campuses=campuses||[];
 state.provinces=provinces||[];
 state.districts=districts||[];
 state.cities=cities||[];
 state.areas=(areas||[]).map(x=>({
  id:x.id,
  name:x.name,
  cityId:x.cities?.id||'',
  cityName:x.cities?.name||'',
  districtId:x.cities?.districts?.id||'',
  districtName:x.cities?.districts?.name||'',
  provinceId:x.cities?.districts?.provinces?.id||'',
  provinceName:x.cities?.districts?.provinces?.name||'',
  location:[x.cities?.name,x.cities?.districts?.name,x.cities?.districts?.provinces?.name].filter(Boolean).join(' · ')
 }));
 renderAdmin();
}
function renderAdmin(){
 if(!state.isAdmin)return;
 $('schoolMetric').textContent=state.schools.length;$('campusMetric').textContent=state.campuses.length;$('publishedMetric').textContent=state.campuses.filter(x=>x.is_published===true).length;
 $('schoolManagement').innerHTML=state.schools.length?state.schools.map(s=>'<div class="dataitem"><strong>'+escapeHTML(localizedName(s))+'</strong><p>'+escapeHTML(s.website||'')+'</p><div class="actions"><button class="actionbtn" type="button" data-action="edit-school" data-id="'+escapeHTML(s.id)+'">'+escapeHTML(t('edit'))+'</button></div></div>').join(''):'<div class="secondary">No schools yet.</div>';
 $('campusManagement').innerHTML=state.campuses.length?state.campuses.map(c=>{const school=state.schools.find(s=>s.id===c.school_id),area=state.areas.find(a=>a.id===c.area_id);return '<div class="dataitem"><strong>'+escapeHTML(c.campus_name||'Main campus')+'</strong><p>'+escapeHTML(school?.name||'School')+' · '+escapeHTML(area ? [area.name,area.location].filter(Boolean).join(' · ') : 'Unknown area')+'</p><span class="tag">'+(c.is_published?'Published':'Unpublished')+'</span><div class="actions"><button class="actionbtn '+(c.is_published?'warning':'')+'" type="button" data-action="toggle-campus" data-id="'+escapeHTML(c.id)+'">'+escapeHTML(c.is_published?t('unpublish'):t('publish'))+'</button></div></div>'}).join(''):'<div class="secondary">No campuses yet.</div>';
}
function showModal(title,body){$('modalTitle').textContent=title;$('modalBody').innerHTML=body;$('modalOverlay').hidden=false;}
function closeModal(){$('modalOverlay').hidden=true;$('modalBody').innerHTML='';}
function schoolForm(school){const edit=!!school;showModal(edit?t('editSchool'):t('createSchool'),'<form id="schoolEditForm" class="formgrid"><label><span>'+t('nameEn')+'</span><input name="name" maxlength="250" required value="'+escapeHTML(school?.name||'')+'" /></label><label><span>'+t('nameUr')+'</span><input name="name_ur" maxlength="250" value="'+escapeHTML(school?.name_ur||'')+'" /></label><label class="full"><span>'+t('website')+'</span><input name="website" type="url" placeholder="https://example.com" value="'+escapeHTML(school?.website||'')+'" /></label><div class="full formrow"><button class="primary" type="submit">'+t('save')+'</button><button class="outlined" id="cancelSchool" type="button">'+t('cancel')+'</button></div><div class="full status" id="schoolFormStatus"></div></form>');$('cancelSchool').onclick=closeModal;$('schoolEditForm').onsubmit=async (event)=>{event.preventDefault();const data=new FormData(event.currentTarget);const payload={name:String(data.get('name')||'').trim(),name_ur:String(data.get('name_ur')||'').trim()||null,website:String(data.get('website')||'').trim()||null};try {if(!payload.name)throw Error('School name is required.');await request('/rest/v1/schools'+(edit?'?id=eq.'+encodeURIComponent(school.id):''),{method:edit?'PATCH':'POST',body:edit?payload:{...payload,school_type:'private'},authenticated:true,prefer:'return=minimal'});closeModal();await loadAdmin();setStatus('adminMessage',t('schoolSaved'),'ok');}catch(error){setStatus('schoolFormStatus',friendlyError(error),'error')}};}
function campusForm(){
 if(!state.schools.length){
  setStatus('adminMessage','Add a school before creating a campus.','error');
  return;
 }

 // A school is the institution; the four location selectors describe a campus.
 // Provinces and districts come from their own tables, not from area records.
 // Cities are also independent; areas remain required to save a campus.
 const labels=state.lang==='ur' ? {
  province:'صوبہ منتخب کریں',district:'ضلع منتخب کریں',city:'شہر منتخب کریں',area:'علاقہ منتخب کریں'
 } : {
  province:'Choose a province',district:'Choose a district',city:'Choose a city',area:'Choose an area'
 };
 const schoolOptions='<option value="">'+escapeHTML(t('chooseSchool'))+'</option>'+state.schools.map(s=>
  '<option value="'+escapeHTML(s.id)+'">'+escapeHTML(localizedName(s))+'</option>'
 ).join('');

 showModal(t('createCampus'),
  '<form id="campusEditForm" class="formgrid" style="max-height:67vh;overflow-y:auto;padding-right:4px">'+
  '<label class="full"><span>'+escapeHTML(t('chooseSchool'))+'</span><select id="campusSchool" name="school_id" required>'+schoolOptions+'</select></label>'+
  '<label><span>'+escapeHTML(t('province'))+'</span><select id="campusProvince" required></select></label>'+
  '<label><span>'+escapeHTML(t('district'))+'</span><select id="campusDistrict" required disabled></select></label>'+
  '<label><span>'+escapeHTML(t('city'))+'</span><select id="campusCity" required disabled></select></label>'+
  '<label><span>'+escapeHTML(t('area'))+'</span><select id="campusArea" name="area_id" required disabled></select></label>'+
  '<label class="full"><span>'+escapeHTML(t('campusName'))+'</span><input name="campus_name" maxlength="250" placeholder="Hayatabad Campus" required /></label>'+
  '<div class="full"><small class="secondary" id="campusLocationHint">'+escapeHTML(state.lang==='ur' ? 'ہر ضلع دکھایا جاتا ہے، چاہے اس کے شہر اور علاقے ابھی شامل نہ ہوں۔ کیمپس محفوظ کرنے کے لیے شہر اور علاقہ ضروری ہیں۔' : 'All registered districts appear, even if their cities or areas have not been added yet. A city and area are required to save a campus.')+'</small></div>'+
  '<div class="full formrow"><button class="primary" type="submit">'+escapeHTML(t('save'))+'</button><button class="outlined" id="cancelCampus" type="button">'+escapeHTML(t('cancel'))+'</button></div>'+
  '<div class="full status" id="campusFormStatus"></div></form>'
 );
 $('cancelCampus').onclick=closeModal;
 const provinces=$('campusProvince'),districts=$('campusDistrict'),cities=$('campusCity'),areas=$('campusArea');
 const sortEntries=entries=>entries.sort((a,b)=>a.name.localeCompare(b.name));
 const uniqueEntries=(items,idField,nameField)=>{
  const map=new Map();
  for(const item of items){
   const id=item[idField],name=item[nameField];
   if(id&&name&&!map.has(id))map.set(id,{id,name});
  }
  return sortEntries([...map.values()]);
 };
 const showChoices=(select,items,placeholder,enabled=true)=>{
  select.innerHTML='<option value="">'+escapeHTML(placeholder)+'</option>'+items.map(item=>
   '<option value="'+escapeHTML(item.id)+'">'+escapeHTML(item.name)+'</option>'
  ).join('');
  select.disabled=!enabled||items.length===0;
 };
 const availableAreas=state.areas.filter(a=>a.provinceId&&a.districtId&&a.cityId);
 const locationHint=$('campusLocationHint');
 const updateHint=(message)=>{locationHint.textContent=message;};
 showChoices(provinces,sortEntries(state.provinces.map(p=>({id:p.id,name:p.name}))),labels.province);
 showChoices(districts,[],labels.district,false);
 showChoices(cities,[],labels.city,false);
 showChoices(areas,[],labels.area,false);

 provinces.onchange=()=>{
  const matchingDistricts=state.districts.filter(d=>d.province_id===provinces.value);
  showChoices(districts,sortEntries(matchingDistricts.map(d=>({id:d.id,name:d.name}))),labels.district,!!provinces.value);
  showChoices(cities,[],labels.city,false);
  showChoices(areas,[],labels.area,false);
  if(provinces.value)updateHint(state.lang==='ur'
   ? `${matchingDistricts.length} اضلاع دستیاب ہیں۔ کیمپس محفوظ کرنے کے لیے شہر اور علاقہ بھی منتخب کریں۔`
   : `${matchingDistricts.length} districts available. Select a city and area to save a campus.`);
 };
 districts.onchange=()=>{
  const matchingCities=state.cities.filter(c=>c.district_id===districts.value);
  showChoices(cities,sortEntries(matchingCities.map(c=>({id:c.id,name:c.name}))),labels.city,!!districts.value);
  showChoices(areas,[],labels.area,false);
  if(districts.value&&!matchingCities.length)updateHint(state.lang==='ur'
   ? 'اس ضلع کا شہر ابھی ڈیٹابیس میں موجود نہیں۔ کیمپس بنانے سے پہلے شہر اور علاقہ شامل کریں۔'
   : 'This district has no cities in the database yet. Add its city and area before creating a campus.');
 };
 cities.onchange=()=>{
  const matches=availableAreas.filter(a=>a.cityId===cities.value);
  showChoices(areas,sortEntries(matches.map(a=>({id:a.id,name:a.name}))),labels.area,!!cities.value);
  if(cities.value&&!matches.length)updateHint(state.lang==='ur'
   ? 'اس شہر کا علاقہ ابھی موجود نہیں۔ کیمپس بنانے سے پہلے علاقہ شامل کریں۔'
   : 'This city has no areas in the database yet. Add an area before creating a campus.');
 };

 $('campusEditForm').onsubmit=async(event)=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const payload={
   school_id:String(data.get('school_id')||''),
   area_id:String(data.get('area_id')||''),
   campus_name:String(data.get('campus_name')||'').trim(),
   is_published:false
  };
  try{
   if(!state.schools.some(s=>s.id===payload.school_id))throw Error('Please choose a school.');
   const selectedArea=availableAreas.find(a=>a.id===payload.area_id);
   if(!selectedArea||selectedArea.provinceId!==provinces.value||selectedArea.districtId!==districts.value||selectedArea.cityId!==cities.value){
    throw Error('Please select a province, district, city and area in order.');
   }
   if(!payload.campus_name)throw Error('Please enter the campus name.');
   await request('/rest/v1/campuses',{method:'POST',body:payload,authenticated:true,prefer:'return=minimal'});
   closeModal();
   await loadAdmin();
   setStatus('adminMessage',t('campusSaved'),'ok');
  }catch(error){setStatus('campusFormStatus',friendlyError(error),'error');}
 };
}
async function toggleCampus(id){const campus=state.campuses.find(c=>c.id===id);if(!campus)return;const next=!campus.is_published;if(!window.confirm(t(next?'publishConfirm':'unpublishConfirm')))return;try{await request('/rest/v1/campuses?id=eq.'+encodeURIComponent(id),{method:'PATCH',body:{is_published:next},authenticated:true,prefer:'return=minimal'});await loadAdmin();await loadPublic();setStatus('adminMessage',t('campusUpdated'),'ok')}catch(error){setStatus('adminMessage',friendlyError(error),'error')}}
async function signOut(){const token=state.userToken;state.userToken=null;state.isAdmin=false;state.schools=[];state.campuses=[];state.areas=[];state.provinces=[];state.districts=[];state.cities=[];try{if(token)await fetch(state.config.supabaseUrl.replace(/\/$/,'')+'/auth/v1/logout',{method:'POST',headers:{apikey:state.config.publishableKey,Authorization:'Bearer '+token}})}catch{}showAdminState();}

// UI events
$('homeLink').onclick=()=>switchView('directory');$('navDirectory').onclick=()=>switchView('directory');$('navAdmin').onclick=()=>switchView('admin');$('languageButton').onclick=()=>{state.lang=state.lang==='en'?'ur':'en';updateLabels();populateFilters()};
$('nameFilter').oninput=renderPublic;
['provinceFilter','districtFilter','cityFilter'].forEach((id)=>$(id).onchange=()=>{populateFilters();renderPublic()});
$('areaFilter').onchange=renderPublic;
$('clearFilters').onclick=()=>{$('nameFilter').value='';$('provinceFilter').value='';$('districtFilter').value='';$('cityFilter').value='';$('areaFilter').value='';populateFilters();renderPublic()};
$('configForm').onsubmit=async (event)=>{event.preventDefault();state.config={supabaseUrl:$('setupUrl').value.trim().replace(/\/$/,''),publishableKey:$('setupKey').value.trim()};if(!validSetup()){setStatus('configMessage','Enter a valid https://project.supabase.co URL and an sb_publishable_ key.','error');return;}localWrite(state.config);setStatus('configMessage',t('setupSaved'),'ok');await loadPublic();$('setupPanel').hidden=true;$('loginPanel').hidden=false;};
$('changeConnection').onclick=()=>{$('setupPanel').hidden=false;$('loginPanel').hidden=true;$('setupUrl').value=state.config.supabaseUrl;$('setupKey').value=state.config.publishableKey};
$('loginForm').onsubmit=async(event)=>{event.preventDefault();const email=$('loginEmail').value.trim(),password=$('loginPassword').value;if(!email||!password){setStatus('loginMessage',t('passwordError'),'error');return;}const button=$('loginButton');button.disabled=true;try{await signIn(email,password);$('loginPassword').value='';}catch(error){setStatus('loginMessage','Sign-in failed: '+friendlyError(error),'error');state.userToken=null;state.isAdmin=false;$('loginPanel').hidden=false;}finally{button.disabled=false}};
$('adminSignOut').onclick=signOut;$('blockedSignout').onclick=signOut;$('retryAdmin').onclick=checkAdminAccess;
$('addSchoolButton').onclick=()=>schoolForm(null);$('addCampusButton').onclick=campusForm;
$('schoolManagement').onclick=event=>{const button=event.target.closest('button[data-action]');if(button?.dataset.action==='edit-school'){const school=state.schools.find(s=>s.id===button.dataset.id);if(school)schoolForm(school)}};
$('campusManagement').onclick=event=>{const button=event.target.closest('button[data-action]');if(button?.dataset.action==='toggle-campus')toggleCampus(button.dataset.id)};
$('closeModal').onclick=closeModal;$('modalOverlay').onclick=event=>{if(event.target===$('modalOverlay'))closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('modalOverlay').hidden)closeModal()});

state.config=currentConfig();updateLabels();$('setupUrl').value=state.config.supabaseUrl||'https://xmzrevedabfoehqrfi.supabase.co';$('setupKey').value=state.config.publishableKey||'';loadPublic();
