export interface FaqItem {
    question: {
      en: string;
      ar: string;
    };
    answer: {
      en: string;
      ar: string;
    };
  }
 export const faqData: FaqItem[] = [
    {
      question: {
        en: "Do I need to register for corporate tax in UAE?",
        ar: "هل أحتاج إلى التسجيل لضريبة الشركات في الإمارات؟",
      },
      answer: {
        en: "Yes. Since the introduction of UAE Corporate Tax in June 2023, all businesses must register with the FTA and file a corporation tax return. Countify handles the full registration and filing process.",
        ar: "نعم. منذ تطبيق ضريبة الشركات في الإمارات في يونيو 2023، يجب على معظم الشركات التي يتجاوز دخلها الخاضع للضريبة 375,000 درهم التسجيل لدى الهيئة الاتحادية للضرائب وتقديم إقرار ضريبي. تتولى Countify عملية التسجيل والتقديم بالكامل.",
      },
    },
    {
      question: {
        en: "What is the UAE corporate tax rate?",
        ar: "ما هو معدل ضريبة الشركات في الإمارات؟",
      },
      answer: {
        en: "The standard rate is 9% on taxable income above AED 375,000. Income below this threshold is taxed at 0%. Small Business Relief may apply for businesses with revenue under AED 3 million. Free Zone entities may qualify for 0% on qualifying income.",
        ar: "المعدل القياسي هو 9% على الدخل الخاضع للضريبة الذي يتجاوز 375,000 درهم. الدخل الأقل من هذا الحد يخضع لنسبة 0%. قد ينطبق إعفاء الأعمال الصغيرة على الشركات ذات الإيرادات الأقل من 3 ملايين درهم. قد تتأهل كيانات المناطق الحرة لنسبة 0% على الدخل المؤهل.",
      },
    },
    {
      question: {
        en: "Do UAE businesses qualify for R&D tax incentives?",
        ar: "هل تتأهل الشركات الإماراتية لحوافز ضريبية للبحث والتطوير؟",
      },
      answer: {
        en: "The UAE has introduced R&D incentives as part of its Corporate Tax framework, offering qualifying businesses enhanced tax deductions of 30% to 50% above qualifying R&D expenditure. Countify is one of the very few UAE accountancy firms offering compliant end-to-end R&D advisory, led by an experienced R&D team with over 7 years of specialist R&D experience.",
        ar: "نعم. قدمت الإمارات حوافز البحث والتطوير كجزء من إطار ضريبة الشركات. قد يحصل الإنفاق المؤهل على البحث والتطوير على خصم بنسبة 30-50% فوق التكلفة. تقدم Countify استشارات شاملة للبحث والتطوير لمساعدتك في المطالبة بأقصى فائدة.",
      },
    },
    {
      question: {
        en: "How long does it take to set up a company in UAE?",
        ar: "كم من الوقت يستغرق تأسيس شركة في الإمارات؟",
      },
      answer: {
        en: "A freezone company can typically be set up within 3 to 7 working days with the right documents in place. Mainland setup takes slightly longer. Countify manages the full process.",
        ar: "يمكن عادةً تأسيس شركة في المنطقة الحرة خلال 3 إلى 7 أيام عمل مع توفر المستندات المطلوبة. يستغرق التأسيس في البر الرئيسي وقتًا أطول قليلاً. تدير Countify العملية بالكامل.",
      },
    },
    {
      question: {
        en: "Do I need to register for VAT in UAE?",
        ar: "هل أحتاج إلى التسجيل لضريبة القيمة المضافة في الإمارات؟",
      },
      answer: {
        en: "Businesses with taxable turnover exceeding AED 375,000 must register for VAT. Voluntary registration is available from AED 187,500. Countify handles registration and ongoing quarterly filing.",
        ar: "يجب على الشركات التي يتجاوز حجم مبيعاتها الخاضعة للضريبة 375,000 درهم التسجيل لضريبة القيمة المضافة. التسجيل الطوعي متاح ابتداءً من 187,500 درهم. تتولى Countify التسجيل والتقديم الربعي المستمر.",
      },
    },
    {
      question: {
        en: "Can Countify help a UK business set up in UAE?",
        ar: "هل يمكن لـ Countify مساعدة شركة بريطانية في التأسيس في الإمارات؟",
      },
      answer: {
        en: "Absolutely. Countify operates in both the UK and UAE. We help UK businesses navigate the full UAE setup process — company formation, banking, VAT, corporate tax and ongoing accounting — with the benefit of understanding both jurisdictions.",
        ar: "بالتأكيد. تعمل Countify في كل من المملكة المتحدة والإمارات. نساعد الشركات البريطانية في التعامل مع عملية التأسيس الكاملة في الإمارات — تأسيس الشركات، الخدمات المصرفية، ضريبة القيمة المضافة، ضريبة الشركات والمحاسبة المستمرة — مع ميزة فهم كلا النظامين القانونيين.",
      },
    },
  ];
