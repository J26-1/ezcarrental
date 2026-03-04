import { Translation, Language } from './types';

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      cars: 'Car Rental',
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms & Conditions',
      reviews: 'Reviews',
      location: 'Location',
    },
    hero: {
      title: 'Easy Car Rental in Malaysia',
      subtitle: 'Experience the easiest car rental journey.\nEasy Booking, Easy Driving.\nSimply EZ.',
      cta: 'WhatsApp Us',
    },
    search: {
      pickup: 'Pickup Location',
      dropoff: 'Dropoff Location',
      date: 'Select Dates',
      search: 'Search Cars',
    },
    cars: {
      title: 'Car Rental',
      perDay: '/ day',
      bookNow: 'Book Now',
    },
    terms: {
      title: 'Terms & Conditions',
      content: [
        'DRIVER ELIGIBILITY: Min age 21 (25 for premium). Valid Malaysian License (CDL/PDL not accepted). Foreigners need IDP + Passport.',
        'BOOKING & PAYMENT: Confirmed upon receipt of payment. Full payment before release. MYR only.',
        'SECURITY DEPOSIT: Refundable deposit required. Processed in 1–3 working days. Deductions for damage, summons, tolls, fuel, late return.',
        'RENTAL PERIOD: 24-hour basis. Late return >1h incurs charges. >3h charged as full day.',
        'PERMITTED USE: No unauthorized drivers, illegal use, DUI, racing, or commercial use without approval.',
        'INSURANCE & LIABILITY: Basic motor insurance included. Renter liable up to excess amount. No coverage for negligence or DUI.',
        'ACCIDENT PROCEDURE: Notify EZ Car Rental immediately. Lodge police report within 24 hours.',
        'TRAFFIC OFFENCES: Renter responsible for summons, fines, and tolls.',
        'FUEL POLICY: Return with same fuel level. Refueling charge applies if lower.',
        'VEHICLE CONDITION: Return in original condition. Charges for odor, stains, tire damage.',
        'CANCELLATION: 48h before: Full refund. <24h: Deposit forfeited. No-show: Full charge.',
        'PDPA: Data processed according to Personal Data Protection Act 2010.',
        'COMPANY RIGHTS: Right to refuse rental or terminate upon breach.',
      ],
    },
    reviews: {
      title: 'What Our Customers Say',
    },
    footer: {
      rights: '© 2024 EZ Car Rental. All rights reserved.',
      privacy: 'Privacy Policy',
      service: 'Terms of Service',
    },
    privacy: {
      title: 'Privacy Policy',
      content: [
        'At EZ Car Rental, we value your privacy. We collect personal information such as your name, contact details, and driving license information solely for the purpose of processing your rental bookings.',
        'Your data is stored securely and is never shared with third parties for marketing purposes. We comply with the Personal Data Protection Act (PDPA) 2010 of Malaysia.',
        'We may use your contact information to send you updates regarding your booking or important service announcements.',
        'You have the right to access, correct, or request the deletion of your personal data at any time by contacting our support team.',
      ],
    },
    service: {
      title: 'Terms of Service',
      content: [
        'By using EZ Car Rental services, you agree to comply with all our rental policies and local traffic laws in Malaysia.',
        'The vehicle must be returned in the same condition as received. Any damages or missing items will be charged to the renter.',
        'EZ Car Rental reserves the right to refuse service to anyone who does not meet our driver eligibility criteria or violates our safety protocols.',
        'All bookings are subject to availability and confirmation by our team.',
      ],
    },
  },
  ms: {
    nav: {
      home: 'Laman Utama',
      cars: 'Sewa Kereta',
      about: 'Tentang Kami',
      contact: 'Hubungi',
      terms: 'Terma & Syarat',
      reviews: 'Ulasan',
      location: 'Lokasi',
    },
    hero: {
      title: 'Sewa Kereta Mudah di Malaysia',
      subtitle: 'Alami perjalanan sewa kereta yang paling mudah. Tempahan Mudah, Pemanduan Mudah. Hanya EZ.',
      cta: 'WhatsApp Kami',
    },
    search: {
      pickup: 'Lokasi Pengambilan',
      dropoff: 'Lokasi Penghantaran',
      date: 'Pilih Tarikh',
      search: 'Cari Kereta',
    },
    cars: {
      title: 'Sewa Kereta',
      perDay: '/ hari',
      bookNow: 'Tempah Sekarang',
    },
    terms: {
      title: 'Terma & Syarat',
      content: [
        'KELAYAKAN PEMANDU: Umur min 21 (25 untuk premium). Lesen Malaysia sah (CDL/PDL tidak diterima). Warga asing perlukan IDP + Pasport.',
        'TEMPAHAN & PEMBAYARAN: Disahkan selepas bayaran diterima. Bayaran penuh sebelum pelepasan. MYR sahaja.',
        'DEPOSIT KESELAMATAN: Deposit boleh dipulangkan diperlukan. Diproses dalam 1–3 hari bekerja. Potongan untuk kerosakan, saman, tol, minyak, lewat pulang.',
        'TEMPOH SEWAAN: Asas 24 jam. Lewat >1 jam dikenakan caj. >3 jam dikira sehari penuh.',
        'PENGGUNAAN DIBENARKAN: Tiada pemandu tidak sah, kegunaan haram, DUI, lumba, atau kegunaan komersial tanpa kelulusan.',
        'INSURANS & LIABILITI: Insurans motor asas disertakan. Penyewa bertanggungjawab sehingga jumlah ekses. Tiada perlindungan untuk kecuaian atau DUI.',
        'PROSEDUR KEMALANGAN: Maklumkan EZ Car Rental segera. Laporan polis dalam masa 24 jam.',
        'KESALAHAN TRAFIK: Penyewa bertanggungjawab atas saman, denda, dan tol.',
        'POLISI MINYAK: Pulangkan dengan tahap minyak yang sama. Caj pengisian dikenakan jika kurang.',
        'KEADAAN KENDERAAN: Pulangkan dalam keadaan asal. Caj untuk bau, kotoran, kerosakan tayar.',
        'PEMBATALAN: 48j sebelum: Bayaran balik penuh. <24j: Deposit hangus. No-show: Caj penuh.',
        'PDPA: Data diproses mengikut Akta Perlindungan Data Peribadi 2010.',
        'HAK SYARIKAT: Hak untuk menolak sewaan atau menamatkan jika berlaku perlanggaran syarat.',
      ],
    },
    reviews: {
      title: 'Apa Kata Pelanggan Kami',
    },
    footer: {
      rights: '© 2024 EZ Car Rental. Hak cipta terpelihara.',
      privacy: 'Dasar Privasi',
      service: 'Syarat Perkhidmatan',
    },
    privacy: {
      title: 'Dasar Privasi',
      content: [
        'Di EZ Car Rental, kami menghargai privasi anda. Kami mengumpul maklumat peribadi seperti nama, butiran hubungan, dan maklumat lesen memandu semata-mata untuk tujuan memproses tempahan sewaan anda.',
        'Data anda disimpan dengan selamat dan tidak pernah dikongsi dengan pihak ketiga untuk tujuan pemasaran. Kami mematuhi Akta Perlindungan Data Peribadi (PDPA) 2010 Malaysia.',
        'Kami mungkin menggunakan maklumat hubungan anda untuk menghantar kemas kini mengenai tempahan anda atau pengumuman perkhidmatan penting.',
        'Anda mempunyai hak untuk mengakses, membetulkan, atau meminta pemadaman data peribadi anda pada bila-bila masa dengan menghubungi pasukan sokongan kami.',
      ],
    },
    service: {
      title: 'Syarat Perkhidmatan',
      content: [
        'Dengan menggunakan perkhidmatan EZ Car Rental, anda bersetuju untuk mematuhi semua polisi sewaan kami dan undang-undang trafik tempatan di Malaysia.',
        'Kenderaan mesti dipulangkan dalam keadaan yang sama seperti yang diterima. Sebarang kerosakan atau barangan yang hilang akan dikenakan bayaran kepada penyewa.',
        'EZ Car Rental berhak untuk menolak perkhidmatan kepada sesiapa yang tidak memenuhi kriteria kelayakan pemandu kami atau melanggar protokol keselamatan kami.',
        'Semua tempahan adalah tertakluk kepada ketersediaan dan pengesahan oleh pasukan kami.',
      ],
    },
  },
  zh: {
    nav: {
      home: '首页',
      cars: '租车服务',
      about: '关于我们',
      contact: '联系我们',
      terms: '条款与条件',
      reviews: '客户评价',
      location: '位置',
    },
    hero: {
      title: '马来西亚最简便的租车服务',
      subtitle: '体验最简便的租车旅程。简便预订，简便驾驶。尽在 EZ。',
      cta: '联系 WhatsApp',
    },
    search: {
      pickup: '取车地点',
      dropoff: '还车地点',
      date: '选择日期',
      search: '搜索车辆',
    },
    cars: {
      title: '租车服务',
      perDay: '/ 天',
      bookNow: '立即预订',
    },
    terms: {
      title: '条款与条件',
      content: [
        '驾驶员资格：最小年龄21岁（高级车型25岁）。持有有效马来西亚驾照（不接受CDL/PDL）。外国人需国际驾照+护照。',
        '预订与付款：收到付款后确认。取车前需付全款。仅限马币。',
        '安全押金：需支付可退还押金。1-3个工作日内处理退款。扣除项包括：损坏、罚单、过路费、油量不足、延迟还车。',
        '租赁期限：以24小时为基准。延迟超过1小时将产生费用。超过3小时按全天计费。',
        '允许用途：严禁未经授权驾驶、非法用途、酒驾、赛车或未经批准的商业用途。',
        '保险与责任：包含基本汽车保险。承租人承担最高免赔额。疏忽驾驶或酒驾不予理赔。',
        '事故处理：立即通知 EZ Car Rental。24小时内报案。',
        '交通违章：承租人全权负责罚单、罚金和过路费。',
        '燃油政策：还车时油量需与取车时一致。不足需支付加油费+服务费。',
        '车辆状况：按原状归还。异味、污渍、轮胎损坏需支付费用。',
        '取消政策：取车前48小时：全额退款。少于24小时：押金没收。未到场：全额收费。',
        'PDPA：根据2010年个人资料保护法令处理数据。',
        '公司权利：有权拒绝租赁或在违约时终止租赁。',
      ],
    },
    reviews: {
      title: '客户怎么说',
    },
    footer: {
      rights: '© 2024 EZ Car Rental. 保留所有权利。',
      privacy: '隐私政策',
      service: '服务条款',
    },
    privacy: {
      title: '隐私政策',
      content: [
        '在 EZ Car Rental，我们非常重视您的隐私。我们收集您的姓名、联系方式和驾驶执照信息等个人信息，仅用于处理您的租赁预订。',
        '您的数据被安全存储，绝不会为了营销目的而与第三方共享。我们遵守马来西亚 2010 年个人资料保护法令 (PDPA)。',
        '我们可能会使用您的联系信息向您发送有关您的预订的更新或重要的服务公告。',
        '您有权随时通过联系我们的支持团队来访问、更正或要求删除您的个人数据。',
      ],
    },
    service: {
      title: '服务条款',
      content: [
        '通过使用 EZ Car Rental 服务，您同意遵守我们所有的租赁政策和马来西亚当地的交通法规。',
        '车辆必须以与收到时相同的状态归还。任何损坏或丢失的物品将由承租人承担费用。',
        'EZ Car Rental 保留拒绝向任何不符合我们驾驶员资格标准或违反我们安全协议的人提供服务的权利。',
        '所有预订均视供应情况而定，并需经我们团队确认。',
      ],
    },
  },
};
