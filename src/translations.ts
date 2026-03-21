export type Language = 'en' | 'am';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      farms: 'Farms',
      products: 'Products',
      services: 'Services',
      contact: 'Contact',
      partner: 'PARTNER WITH US',
    },
    hero: {
      subtitle: 'Ethiopian Agricultural Excellence',
      title: 'Modern Agriculture Rooted in Excellence',
      italicTitle: 'Excellence',
      description: 'Guten Agricultural Farm and Trading is a modern Ethiopian agricultural enterprise focused on large-scale wheat and corn production through advanced farming systems and productive land management.',
      explore: 'EXPLORE OUR FARMS',
      contact: 'CONTACT US',
    },
    about: {
      subtitle: 'Our Legacy',
      title: 'A Trusted Partner in Ethiopian Agribusiness for Over Two Decades',
      p1: 'With more than 20 years of dedicated experience in the agricultural sector, Guten Agricultural Farm and Trading has established itself as a cornerstone of Ethiopian agribusiness. We are committed to modern farming, quality crop production, and reliable agricultural trading.',
      p2: 'Operating across Ethiopia\'s most productive regions, we combine two decades of practical farming wisdom with modern management, efficient machinery, and sustainable methods that ensure consistent harvest performance and long-term value.',
      p3: 'Our approach bridges deep local heritage with international standards of operational excellence, ensuring that every harvest meets the highest benchmarks of quality for our global and local partners.',
      stats: {
        experience: 'Years of Experience',
        farming: 'Farming Systems',
        standards: 'Quality Standards',
        modern: 'Modern',
        global: 'Global',
      }
    },
    farms: {
      subtitle: 'Strategic Operations',
      title: 'Farm Locations',
      description: 'Operating across Ethiopia\'s most productive regions to ensure diverse and resilient agricultural output.',
      locations: [
        {
          name: "Aleta Chuko, Sidama Region",
          type: "Large Wheat Farm",
          description: "Optimized for high-yield wheat production with fertile soil and favorable climate conditions."
        },
        {
          name: "Wellega, Oromia Region",
          type: "Large Corn Farm",
          description: "Expansive corn plantations utilizing modern mechanized harvesting systems."
        },
        {
          name: "Asossa, Benishangul Gumuz Region",
          type: "Large Corn Farm",
          description: "Strategic agricultural hub focused on sustainable large-scale corn production."
        }
      ]
    },
    products: {
      subtitle: 'Our Harvest',
      title: 'Premium Agricultural Products',
      description: 'High-quality agricultural products available for business purchase. Contact us directly for pricing and supply information.',
      wheat: {
        title: 'Wheat Production',
        description: 'Premium grade wheat cultivated in the Sidama region, processed with modern cleaning and sorting technology for maximum purity.',
      },
      corn: {
        title: 'Corn Production',
        description: 'High-yield corn varieties grown in Oromia and Benishangul Gumuz, ideal for industrial processing and livestock feed.',
      },
      inquire: 'INQUIRE NOW',
    },
    equipment: {
      subtitle: 'Modern Infrastructure',
      title: 'Advanced Agricultural Machinery',
      description: 'We operate with modern agricultural machinery designed to improve efficiency, field performance, and harvest productivity. Our fleet includes state-of-the-art tractors, harvesters, and precision farming tools.',
      precision: {
        title: 'Precision Farming',
        description: 'GPS-guided operations for optimal field coverage.',
      },
      logistics: {
        title: 'Efficient Logistics',
        description: 'Integrated transport systems for rapid harvest delivery.',
      }
    },
    services: {
      subtitle: 'Business Opportunities',
      title: 'Rental Services',
      description: 'Available for agricultural projects and farming operations. We provide the resources you need to succeed.',
      land: {
        title: 'Land for Rent',
        description: 'Prime agricultural land available for long-term lease and farming projects.',
      },
      tractors: {
        title: 'Tractors for Rent',
        description: 'Modern tractor fleet available for seasonal farming operations and land preparation.',
      },
      inquire: 'INQUIRE ABOUT RENTALS',
    },
    why: {
      subtitle: 'Our Advantage',
      title: 'Why Choose Guten',
      items: [
        {
          title: "Modern Farming",
          description: "We apply modern agricultural methods and equipment to improve production quality."
        },
        {
          title: "Large Production Capacity",
          description: "Our farms operate across multiple regions, allowing strong large-scale output."
        },
        {
          title: "Reliable Supply",
          description: "We focus on dependable production and consistent agricultural delivery."
        }
      ]
    },
    vision: {
      subtitle: 'Our Vision',
      text: '"To become a leading agricultural producer in Ethiopia through modern farming, productive land use, and reliable agricultural development."',
      modern: 'modern farming',
    },
    gallery: {
      subtitle: 'Visual Journey',
      title: 'Farm Gallery',
    },
    contact: {
      subtitle: 'Get In Touch',
      title: 'Business Inquiries',
      description: 'Contact us for crop pricing, rental services, and agricultural business opportunities. Our team is ready to discuss how we can support your agricultural needs.',
      email: 'Email Us',
      call: 'Call Us',
      office: 'Office',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        message: 'Message',
        placeholderName: 'John Doe',
        placeholderPhone: '+251 ...',
        placeholderEmail: 'john@example.com',
        placeholderMessage: 'How can we help you?',
        send: 'SEND MESSAGE',
      }
    },
    footer: {
      description: 'A modern Ethiopian agricultural enterprise dedicated to large-scale production and reliable trading across the Sidama, Oromia, and Benishangul Gumuz regions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      close: 'CLOSE',
      privacyContent: {
        title: 'Privacy Policy',
        sections: [
          {
            title: '1. Information Collection',
            content: 'We collect information you provide directly to us, such as when you fill out our contact form. This may include your name, email address, and phone number.'
          },
          {
            title: '2. Use of Information',
            content: 'We use the information we collect to respond to your inquiries, provide you with information about our services, and improve our website\'s functionality.'
          },
          {
            title: '3. Information Sharing',
            content: 'We do not sell or share your personal information with third parties for marketing purposes. We may share information if required by law or to protect our rights.'
          },
          {
            title: '4. Data Security',
            content: 'We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration.'
          },
          {
            title: '5. Your Choices',
            content: 'You can contact us at any time to request access to, update, or delete the personal information we have collected about you.'
          }
        ]
      },
      termsContent: {
        title: 'Terms of Service',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: 'The services that Guten Agricultural Farm and Trading provides to you are subject to the following Terms of Service. We reserve the right to update the terms at any time without notice to you.'
          },
          {
            title: '2. Description of Services',
            content: 'Our website provides information about our agricultural products, farming locations, equipment rentals, and consulting services. This information is for general purposes only.'
          },
          {
            title: '3. Intellectual Property',
            content: 'All content included on this site, such as text, graphics, logos, images, and software, is the property of Guten Agricultural Farm and Trading and is protected by international copyright laws.'
          },
          {
            title: '4. Limitation of Liability',
            content: 'Guten Agricultural Farm and Trading will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.'
          },
          {
            title: '5. Governing Law',
            content: 'These terms and conditions are governed by and construed in accordance with the laws of Ethiopia and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
          }
        ]
      }
    }
  },
  am: {
    nav: {
      home: 'መነሻ',
      about: 'ስለ እኛ',
      farms: 'እርሻዎች',
      products: 'ምርቶች',
      services: 'አገልግሎቶች',
      contact: 'እውቂያ',
      partner: 'ከእኛ ጋር ይስሩ',
    },
    hero: {
      subtitle: 'የኢትዮጵያ ግብርና ጥራት',
      title: 'ዘመናዊ ግብርና በጥራት ላይ የተመሰረተ',
      italicTitle: 'ጥራት',
      description: 'ጉተን የግብርና እርሻ እና ንግድ በዘመናዊ የእርሻ ዘዴዎች እና ውጤታማ የመሬት አጠቃቀም ላይ ያተኮረ ሰፊ የስንዴ እና የበቆሎ ምርት የሚያመርት ዘመናዊ የኢትዮጵያ የግብርና ድርጅት ነው።',
      explore: 'እርሻዎቻችንን ይጎብኙ',
      contact: 'ያግኙን',
    },
    about: {
      subtitle: 'የእኛ ታሪክ',
      title: 'ከሁለት አስርት ዓመታት በላይ በኢትዮጵያ የግብርና ንግድ የታመነ አጋር',
      p1: 'በግብርናው ዘርፍ ከ20 ዓመታት በላይ ልምድ ያለው ጉተን የግብርና እርሻ እና ንግድ ራሱን እንደ ኢትዮጵያ የግብርና ንግድ መሠረት አድርጎ አቁሟል። ለዘመናዊ ግብርና፣ ጥራት ላለው የሰብል ምርት እና አስተማማኝ የግብርና ንግድ ቁርጠኛ ነን።',
      p2: 'በኢትዮጵያ እጅግ ምርታማ በሆኑ አካባቢዎች በመስራት፣ የሁለት አስርት ዓመታት ተግባራዊ የእርሻ ጥበብን ከዘመናዊ አስተዳደር፣ ቀልጣፋ ማሽነሪዎች እና ዘላቂ ዘዴዎች ጋር በማጣመር ወጥ የሆነ የመከር አፈጻጸም እና የረጅም ጊዜ እሴትን እናረጋግጣለን።',
      p3: 'የእኛ አቀራረብ ጥልቅ የአካባቢ ቅርሶችን ከዓለም አቀፍ የሥራ ጥራት ደረጃዎች ጋር በማገናኘት እያንዳንዱ መከር ለዓለም አቀፍ እና ለአገር ውስጥ አጋሮቻችን ከፍተኛ የጥራት ደረጃዎችን ማሟላቱን ያረጋግጣል።',
      stats: {
        experience: 'የዓመታት ልምድ',
        farming: 'የእርሻ ዘዴዎች',
        standards: 'የጥራት ደረጃዎች',
        modern: 'ዘመናዊ',
        global: 'ዓለም አቀፍ',
      }
    },
    farms: {
      subtitle: 'ስትራቴጂካዊ ስራዎች',
      title: 'የእርሻ ቦታዎች',
      description: 'የተለያዩ እና ጠንካራ የግብርና ምርቶችን ለማረጋገጥ በኢትዮጵያ እጅግ ምርታማ በሆኑ አካባቢዎች እንሰራለን።',
      locations: [
        {
          name: "አለታ ጩኮ፣ ሲዳማ ክልል",
          type: "ትልቅ የስንዴ እርሻ",
          description: "ለም አፈር እና ምቹ የአየር ንብረት ሁኔታዎችን በመጠቀም ለከፍተኛ የስንዴ ምርት የተመቻቸ።"
        },
        {
          name: "ወለጋ፣ ኦሮሚያ ክልል",
          type: "ትልቅ የበቆሎ እርሻ",
          description: "ዘመናዊ ሜካናይዝድ የመሰብሰቢያ ዘዴዎችን የሚጠቀሙ ሰፊ የበቆሎ እርሻዎች።"
        },
        {
          name: "አሶሳ፣ ቤኒሻንጉል ጉሙዝ ክልል",
          type: "ትልቅ የበቆሎ እርሻ",
          description: "በዘላቂነት ሰፊ የበቆሎ ምርት ላይ ያተኮረ ስትራቴጂካዊ የግብርና ማዕከል።"
        }
      ]
    },
    products: {
      subtitle: 'የእኛ መከር',
      title: 'ከፍተኛ ጥራት ያላቸው የግብርና ምርቶች',
      description: 'ለንግድ ግዢ የሚገኙ ከፍተኛ ጥራት ያላቸው የግብርና ምርቶች። ለዋጋ እና ለአቅርቦት መረጃ በቀጥታ ያግኙን።',
      wheat: {
        title: 'የስንዴ ምርት',
        description: 'በሲዳማ ክልል የሚመረት ከፍተኛ ጥራት ያለው ስንዴ፣ በዘመናዊ የጽዳት እና የመለየት ቴክኖሎጂ ተዘጋጅቶ ለከፍተኛ ንጽህና የቀረበ።',
      },
      corn: {
        title: 'የበቆሎ ምርት',
        description: 'በኦሮሚያ እና ቤኒሻንጉል ጉሙዝ የሚመረቱ ከፍተኛ ምርት የሚሰጡ የበቆሎ ዝርያዎች፣ ለኢንዱስትሪ ማቀነባበሪያ እና ለእንስሳት መኖ ተስማሚ።',
      },
      inquire: 'አሁን ይጠይቁ',
    },
    equipment: {
      subtitle: 'ዘመናዊ መሠረተ ልማት',
      title: 'የላቁ የግብርና ማሽነሪዎች',
      description: 'ቅልጥፍናን፣ የመስክ አፈጻጸምን እና የመከር ምርታማነትን ለማሻሻል በተዘጋጁ ዘመናዊ የግብርና ማሽነሪዎች እንሰራለን። የእኛ መርከቦች ዘመናዊ ትራክተሮችን፣ መከር ሰብሳቢዎችን እና ትክክለኛ የእርሻ መሣሪያዎችን ያካትታሉ።',
      precision: {
        title: 'ትክክለኛ ግብርና',
        description: 'ለተሻለ የመስክ ሽፋን በጂፒኤስ (GPS) የታገዙ ስራዎች።',
      },
      logistics: {
        title: 'ቀልጣፋ ሎጂስቲክስ',
        description: 'ለፈጣን የመከር አቅርቦት የተቀናጁ የመጓጓዣ ዘዴዎች።',
      }
    },
    services: {
      subtitle: 'የንግድ ዕድሎች',
      title: 'የኪራይ አገልግሎቶች',
      description: 'ለግብርና ፕሮጀክቶች እና ለእርሻ ስራዎች ይገኛል። ለስኬትዎ የሚያስፈልጉዎትን ሀብቶች እናቀርባለን።',
      land: {
        title: 'መሬት ለኪራይ',
        description: 'ለረጅም ጊዜ ውል እና ለእርሻ ፕሮጀክቶች የሚሆን ምርጥ የግብርና መሬት።',
      },
      tractors: {
        title: 'ትራክተሮች ለኪራይ',
        description: 'ለወቅታዊ የእርሻ ስራዎች እና ለመሬት ዝግጅት የሚገኙ ዘመናዊ የትራክተር መርከቦች።',
      },
      inquire: 'ስለ ኪራይ ይጠይቁ',
    },
    why: {
      subtitle: 'የእኛ ብልጫ',
      title: 'ለምን ጉተንን ይመርጣሉ',
      items: [
        {
          title: "ዘመናዊ ግብርና",
          description: "የምርት ጥራትን ለማሻሻል ዘመናዊ የግብርና ዘዴዎችን እና መሣሪያዎችን እንጠቀማለን።"
        },
        {
          title: "ከፍተኛ የማምረት አቅም",
          description: "እርሻዎቻችን በበርካታ ክልሎች ውስጥ ይሰራሉ፣ ይህም ጠንካራ እና ሰፊ ምርት እንዲኖር ያስችላል።"
        },
        {
          title: "አስተማማኝ አቅርቦት",
          description: "በአስተማማኝ ምርት እና ወጥ በሆነ የግብርና አቅርቦት ላይ እናተኩራለን።"
        }
      ]
    },
    vision: {
      subtitle: 'የእኛ ራዕይ',
      text: '"በዘመናዊ ግብርና፣ ውጤታማ የመሬት አጠቃቀም እና አስተማማኝ የግብርና ልማት በኢትዮጵያ ግንባር ቀደም የግብርና አምራች መሆን።"',
      modern: 'በዘመናዊ ግብርና',
    },
    gallery: {
      subtitle: 'የምስል ጉዞ',
      title: 'የእርሻ ጋለሪ',
    },
    contact: {
      subtitle: 'ያግኙን',
      title: 'የንግድ ጥያቄዎች',
      description: 'ለሰብል ዋጋ፣ ለኪራይ አገልግሎቶች እና ለግብርና ንግድ ዕድሎች ያግኙን። ቡድናችን የእርስዎን የግብርና ፍላጎቶች እንዴት መደገፍ እንደምንችል ለመወያየት ዝግጁ ነው።',
      email: 'ኢሜይል ይላኩልን',
      call: 'ይደውሉልን',
      office: 'ቢሮ',
      form: {
        name: 'ሙሉ ስም',
        phone: 'ስልክ ቁጥር',
        email: 'ኢሜይል አድራሻ',
        message: 'መልዕክት',
        placeholderName: 'ዮሐንስ ደበበ',
        placeholderPhone: '+251 ...',
        placeholderEmail: 'john@example.com',
        placeholderMessage: 'እንዴት ልንረዳዎ እንችላለን?',
        send: 'መልዕክት ላክ',
      }
    },
    footer: {
      description: 'በሲዳማ፣ ኦሮሚያ እና ቤኒሻንጉል ጉሙዝ ክልሎች ሰፊ ምርት እና አስተማማኝ ንግድ ላይ የተሰማራ ዘመናዊ የኢትዮጵያ የግብርና ድርጅት።',
      quickLinks: 'ፈጣን አገናኞች',
      contact: 'እውቂያ',
      rights: 'መብቱ በህግ የተጠበቀ ነው።',
      privacy: 'የግላዊነት ፖሊሲ',
      terms: 'የአጠቃቀም ደንቦች',
      close: 'ዝጋ',
      privacyContent: {
        title: 'የግላዊነት ፖሊሲ',
        sections: [
          {
            title: '1. መረጃ መሰብሰብ',
            content: 'የእኛን የግንኙነት ቅጽ ሲሞሉ በቀጥታ የሚሰጡንን መረጃ እንሰበስባለን። ይህ የእርስዎን ስም፣ የኢሜይል አድራሻ እና ስልክ ቁጥር ሊያካትት ይችላል።'
          },
          {
            title: '2. መረጃን መጠቀም',
            content: 'የምንሰበስበውን መረጃ ለጥያቄዎችዎ ምላሽ ለመስጠት፣ ስለ አገልግሎቶቻችን መረጃ ለመስጠት እና የድረ-ገጻችንን ተግባር ለማሻሻል እንጠቀምበታለን።'
          },
          {
            title: '3. መረጃን ማጋራት',
            content: 'የእርስዎን የግል መረጃ ለገበያ ዓላማ ለሶስተኛ ወገኖች አንሸጥም ወይም አናጋራም። በህግ ከተጠየቀ ወይም መብቶቻችንን ለማስጠበቅ መረጃን ልናጋራ እንችላለን።'
          },
          {
            title: '4. የመረጃ ደህንነት',
            content: 'የእርስዎን የግል መረጃ ካልተፈቀደ መዳረሻ፣ ይፋ ከመሆን ወይም ከመለወጥ ለመጠበቅ ምክንያታዊ የሆኑ የደህንነት እርምጃዎችን እንወስዳለን።'
          },
          {
            title: '5. የእርስዎ ምርጫዎች',
            content: 'ስለ እርስዎ የሰበሰብነውን የግል መረጃ ለማግኘት፣ ለማዘመን ወይም ለመሰረዝ በማንኛውም ጊዜ ሊያገኙን ይችላሉ።'
          }
        ]
      },
      termsContent: {
        title: 'የአጠቃቀም ደንቦች',
        sections: [
          {
            title: '1. ደንቦችን መቀበል',
            content: 'ጉተን የግብርና እርሻ እና ንግድ የሚሰጥዎ አገልግሎቶች በሚከተሉት የአጠቃቀም ደንቦች ስር ናቸው። ያለቅድመ ማስታወቂያ ደንቦቹን በማንኛውም ጊዜ የማሻሻል መብታችን የተጠበቀ ነው።'
          },
          {
            title: '2. የአገልግሎቶች መግለጫ',
            content: 'ድረ-ገጻችን ስለ ግብርና ምርቶቻችን፣ የእርሻ ቦታዎች፣ የማሽነሪ ኪራይ እና የምክር አገልግሎቶች መረጃ ይሰጣል። ይህ መረጃ ለአጠቃላይ ዓላማዎች ብቻ ነው።'
          },
          {
            title: '3. የአዕምሮ ንብረት',
            content: 'በዚህ ድረ-ገጽ ላይ የተካተቱት እንደ ጽሑፍ፣ ግራፊክስ፣ አርማዎች፣ ምስሎች እና ሶፍትዌሮች ያሉ ሁሉም ይዘቶች የጉተን የግብርና እርሻ እና ንግድ ንብረት ናቸው እና በአለም አቀፍ የቅጂ መብት ህጎች የተጠበቁ ናቸው።'
          },
          {
            title: '4. የተጠያቂነት ገደብ',
            content: 'ጉተን የግብርና እርሻ እና ንግድ ይህንን ድረ-ገጽ በመጠቀም ለሚመጣ ለማንኛውም አይነት ጉዳት ተጠያቂ አይሆንም።'
          },
          {
            title: '5. የሚገዛው ህግ',
            content: 'እነዚህ ደንቦች እና ሁኔታዎች በኢትዮጵያ ህጎች የሚመሩ እና የሚተረጎሙ ናቸው።'
          }
        ]
      }
    }
  }
};
