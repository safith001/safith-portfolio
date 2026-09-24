import { Locale } from '@/types';

/**
 * Strongly-Typed Translation Schema
 * Ensures all supported languages implement the exact same key structure.
 */
export interface TranslationDictionary {
  nav: {
    about: string;
    projects: string;
    skills: string;
    timeline: string;
    credentials: string;
    contact: string;
    resume: string;
  };
  hero: {
    badge: string;
    statusAvailable: string;
    title: string;
    bioDegree: string;
    bioUniversity: string;
    bioFocus: string;
    bioExperience: string;
    bioClosing: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    statusAvailable: string;
    chatWhatsapp: string;
    copyEmail: string;
    copiedNotice: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formInquiryType: string;
    formInquiryGeneral: string;
    formInquiryRecruiting: string;
    formInquiryFreelance: string;
    formInquiryTransit: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
  };
  footer: {
    tagline: string;
    rights: string;
    blessing: string;
  };
}

/**
 * Multilingual Translations: English (en), Tamil (ta), and Urdu (ur)
 * NOTE: Strictly follows Rule 2.5 with zero em-dashes or en-dashes.
 */
export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      timeline: 'Timeline',
      credentials: 'Credentials',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      badge: 'SAFITH THE VIBE CODER 😂',
      statusAvailable: 'Open to Roles',
      title: 'Mohammed Sarook Mohammed Safith',
      bioDegree: 'B.IT Honours, Second Class Upper, CGPA 3.47',
      bioUniversity: 'City University Malaysia',
      bioFocus: 'Full-Stack Software Engineering and Quality Assurance (QA)',
      bioExperience: 'As a Project Engineer Intern at Guildford Integrated Systems, I executed Factory and Site Acceptance Testing (FAT/SAT) and server verification for public transit infrastructure, including the RTS Link (Johor Bahru - Singapore) and LRT3 Shah Alam Line.',
      bioClosing: 'Whether building web apps or testing transit hardware, my goal is simple: understand how the system works behind the scenes, make sure it does not break, and write code I can truly explain.',
      ctaProjects: 'Explore Projects',
      ctaResume: 'Download Verified CV',
      ctaContact: 'Contact Me',
    },
    contact: {
      badge: 'Get in Touch',
      heading: 'Let us Build Something Defensible',
      subtitle: 'Open for full-time Software Engineering roles, QA automation opportunities, and technical consulting across Sri Lanka, Malaysia, and worldwide remote teams.',
      statusAvailable: 'Sri Lanka GMT+5:30 • Open to Remote & Relocation',
      chatWhatsapp: 'Chat on WhatsApp Business',
      copyEmail: 'Copy Email Address',
      copiedNotice: 'Email Copied!',
      formName: 'Your Full Name',
      formNamePlaceholder: 'e.g. Alex Tan',
      formEmail: 'Your Work Email',
      formEmailPlaceholder: 'e.g. alex@company.com',
      formInquiryType: 'Inquiry Type',
      formInquiryGeneral: 'General Conversation',
      formInquiryRecruiting: 'Full-Time Recruitment',
      formInquiryFreelance: 'Freelance or Contract Project',
      formInquiryTransit: 'Transit & QA Systems Consulting',
      formMessage: 'Your Message',
      formMessagePlaceholder: 'Tell me about your team, tech stack, or the project you are working on...',
      formSubmit: 'Send Inquiry',
      formSuccess: 'Message prepared! Opening your mail client...',
      formError: 'Please check your inputs and try again.',
    },
    footer: {
      tagline: 'Defensible engineering: tested, documented, and built to last.',
      rights: 'All rights reserved.',
      blessing: '🌙 JazakAllahu Khayran',
    },
  },

  ta: {
    nav: {
      about: 'சுயவிவரம்',
      projects: 'திட்டங்கள்',
      skills: 'திறன்கள்',
      timeline: 'பயணம்',
      credentials: 'சான்றிதழ்கள்',
      contact: 'தொடர்பு',
      resume: 'விவரக்குறிப்பு',
    },
    hero: {
      badge: 'ஸாபித் - வைப் கோடர் 😂',
      statusAvailable: 'பணிகளுக்கு தயார்',
      title: 'முகம்மது சாரூக் முகம்மது ஸாபித்',
      bioDegree: 'B.IT ஹானர்ஸ், இரண்டாம் வகுப்பு மேல் பிரிவு, CGPA 3.47',
      bioUniversity: 'சிட்டி பல்கலைக்கழகம் மலேசியா',
      bioFocus: 'முழு-அடுக்கு மென்பொருள் பொறியியல் மற்றும் தர உத்தரவாதம் (QA)',
      bioExperience: 'கில்ட்போர்ட் இன்டெக்ரேட்டட் சிஸ்டம்ஸ் நிறுவனத்தில் திட்டப் பொறியாளர் பயிற்சியாளராக, மலேசியாவின் RTS லிங்க் மற்றும் LRT3 ரயில் போக்குவரத்துத் திட்டங்களுக்கான ஏற்புச் சோதனைகளை (FAT/SAT) மேற்கொண்டேன்.',
      bioClosing: 'இணையதளங்களை உருவாக்குவது முதல் போக்குவரத்து வன்பொருளைச் சோதிப்பது வரை எனது நோக்கம் ஒன்றுதான்: கணினி எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்து கொண்டு, பிழையின்றி இயங்குவதை உறுதி செய்தல்.',
      ctaProjects: 'திட்டங்களைக் காண்க',
      ctaResume: 'விவரக்குறிப்பு பதிவிறக்கு',
      ctaContact: 'என்னைத் தொடர்பு கொள்க',
    },
    contact: {
      badge: 'தொடர்பு கொள்ள',
      heading: 'புதிய திட்டங்களை உருவாக்குவோம்',
      subtitle: 'முழுநேர மென்பொருள் பொறியியல் பணிகள் மற்றும் உலகளாவிய தொலைதூரப் பணிகளுக்கு நான் தயாராக உள்ளேன்.',
      statusAvailable: 'இலங்கை GMT+5:30 • தொலைதூரப் பணிக்கு தயார்',
      chatWhatsapp: 'வாட்ஸ்அப் மூலம் பேசுக',
      copyEmail: 'மின்னஞ்சலை நகலெடு',
      copiedNotice: 'மின்னஞ்சல் நகலெடுக்கப்பட்டது!',
      formName: 'உங்கள் முழுப் பெயர்',
      formNamePlaceholder: 'எ.கா. அலெக்ஸ் டான்',
      formEmail: 'உங்கள் மின்னஞ்சல்',
      formEmailPlaceholder: 'எ.கா. alex@company.com',
      formInquiryType: 'விசாரணை வகை',
      formInquiryGeneral: 'பொதுவான உரையாடல்',
      formInquiryRecruiting: 'வேலை வாய்ப்பு',
      formInquiryFreelance: 'ஒப்பந்தத் திட்டம்',
      formInquiryTransit: 'போக்குவரத்து & QA ஆலோசனை',
      formMessage: 'உங்கள் செய்தி',
      formMessagePlaceholder: 'உங்கள் குழு அல்லது திட்டம் பற்றி எழுதுங்கள்...',
      formSubmit: 'செய்தி அனுப்புக',
      formSuccess: 'செய்தி தயாராகிவிட்டது! மின்னஞ்சல் திறக்கப்படுகிறது...',
      formError: 'தயவுசெய்து விவரங்களைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',
    },
    footer: {
      tagline: 'நம்பகமான பொறியியல்: சோதிக்கப்பட்டது, ஆவணப்படுத்தப்பட்டது.',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      blessing: '🌙 ஜஸாக்கல்லாஹு கைரன்',
    },
  },

  ur: {
    nav: {
      about: 'تعارف',
      projects: 'منصوبے',
      skills: 'مہارتیں',
      timeline: 'سفر',
      credentials: 'اسناد',
      contact: 'رابطہ',
      resume: 'سی وی',
    },
    hero: {
      badge: 'ثافث - وائب کوڈر 😂',
      statusAvailable: 'ملازمت کے لیے دستیاب',
      title: 'محمد ساروک محمد ثافث',
      bioDegree: 'بی آئی ٹی آنرز، سیکنڈ کلاس اپر، CGPA 3.47',
      bioUniversity: 'سٹی یونیورسٹی ملائیشیا',
      bioFocus: 'فل اسٹیک سافٹ ویئر انجینئرنگ اور کوالٹی اشورینس (QA)',
      bioExperience: 'گلڈفورڈ انٹیگریٹڈ سسٹمز میں بطور پروجیکٹ انجینئر انٹرن، میں نے ملائیشیا کے آر ٹی ایس لنک اور ایل آر ٹی 3 پبلک ٹرانزٹ کے لیے سائٹ ایکسیپٹنس ٹیسٹنگ (FAT/SAT) کی خدمات انجام دیں۔',
      bioClosing: 'خواہ ویب ایپس بنانا ہو یا ٹرانزٹ ہارڈویئر کی جانچ، میرا مقصد آسان ہے: سسٹم کے اندرونی طریقہ کار کو سمجھنا اور قابل اعتماد کوڈ لکھنا۔',
      ctaProjects: 'منصوبے دیکھیں',
      ctaResume: 'سی وی ڈاؤن لوڈ کریں',
      ctaContact: 'رابطہ کریں',
    },
    contact: {
      badge: 'رابطہ قائم کریں',
      heading: 'آئیے مل کر کچھ نیا بنائیں',
      subtitle: 'فل ٹائم سافٹ ویئر انجینئرنگ، کوالٹی اشورینس، اور بین الاقوامی ریموٹ ملازمتوں کے لیے دستیاب ہوں۔',
      statusAvailable: 'سری لنکا GMT+5:30 • ریموٹ کام کے لیے دستیاب',
      chatWhatsapp: 'واٹس ایپ پر رابطہ کریں',
      copyEmail: 'ای میل کاپی کریں',
      copiedNotice: 'ای میل کاپی ہو گئی!',
      formName: 'آپ کا پورا نام',
      formNamePlaceholder: 'مثلاً علی خان',
      formEmail: 'آپ کا دفتری ای میل',
      formEmailPlaceholder: 'مثلاً ali@company.com',
      formInquiryType: 'استفسار کی قسم',
      formInquiryGeneral: 'عام گفتگو',
      formInquiryRecruiting: 'ملازمت کی پیشکش',
      formInquiryFreelance: 'فری لانس پروجیکٹ',
      formInquiryTransit: 'ٹرانزٹ اور QA مشاورت',
      formMessage: 'آپ کا پیغام',
      formMessagePlaceholder: 'اپنی ٹیم یا پروجیکٹ کے بارے میں تحریر کریں...',
      formSubmit: 'پیغام بھیجیں',
      formSuccess: 'پیغام تیار ہے! ای میل کلائنٹ کھل رہا ہے...',
      formError: 'برائے مہربانی معلومات درست درج کریں۔',
    },
    footer: {
      tagline: 'پائیدار انجینئرنگ: جانچی گئی اور دستاویز شدہ۔',
      rights: 'جملہ حقوق محفوظ ہیں۔',
      blessing: '🌙 جزاک اللہ خیراً',
    },
  },
};
