import { FaUserCheck, FaShieldAlt, FaChartLine, FaFileContract } from 'react-icons/fa';

export const boardMembers = [
  {
    id: 1,
    name: 'Dr. Hassan Hussen',
    position: 'Chair Person',
    qualifications: 'EdD MBA GENERAL MANAGEMENT',
    experience: '33 years of work experience',
    committee: 'Credit Committee Member',
    photo: 'hassan-hussen.jpg',
    linkedin: '#',
    email: 'chairman@gadaabank.com'
  },
  {
    id: 2,
    name: 'Mr. Hailu Ifa Gonda',
    position: 'V/Chair Person',
    qualifications: 'BA DEGREE ACCOUNTING MA IN ORGANIZATIONAL LEADERSHIP',
    experience: '37 years of work experience',
    committee: 'Nomination and Remuneration Committee Member',
    photo: 'hailu-ifa-gonda.jpg',
    linkedin: '#',
    email: 'vchairman@gadaabank.com'
  },
  {
    id: 3,
    name: 'Ambassador Mulu Solomon Bezuneh',
    position: 'Member',
    qualifications: 'M.A in Development Studies',
    experience: 'More than 25 years of experience',
    committee: 'Nomination and Remuneration Committee Chairperson',
    photo: 'mulu-solomon-bezuneh.jpg',
    linkedin: '#',
    email: 'm.bezuneh@gadaabank.com'
  },
  {
    id: 4,
    name: 'Dr. Degefe Duressa',
    position: 'Member',
    qualifications: 'PhD IN DEVELOPMENT FINANCE, MA ACCOUNTING INFORMATION',
    experience: '41 years of work experience',
    committee: 'Audit Committee Chairperson',
    photo: 'degefe-duressa.jpg',
    linkedin: '#',
    email: 'd.duressa@gadaabank.com'
  },
  {
    id: 5,
    name: 'Mr. Wasihun Amenu',
    position: 'Member',
    qualifications: 'MA IN COOPERATIVE MANAGEMENT',
    experience: '23 years of work experience',
    committee: 'Nomination and Remuneration Committee Member, Credit Committee Member',
    photo: 'wasihun-amenhu.jpg',
    linkedin: '#',
    email: 'w.amenhu@gadaabank.com'
  },
  {
    id: 6,
    name: 'Mr. Hamdeno Mideso',
    position: 'Member',
    qualifications: 'MBA SPECIALIZED IN PROJECT MANAGEMENT',
    experience: '12 years of work experience',
    committee: 'Nomination and Remuneration Committee Member, Risk Management and Compliance Committee Member',
    photo: 'hamdeno-mideso.jpg',
    linkedin: '#',
    email: 'h.mideso@gadaabank.com'
  },
  {
    id: 7,
    name: 'Dr. Kassim Kuffa Jarra',
    position: 'Member',
    qualifications: 'PhD in Law',
    experience: 'More than 15 years of experience',
    committee: 'Risk Management and Compliance Committee Member, Audit Committee Member',
    photo: 'kassim-kuffa-jarra.jpg',
    linkedin: '#',
    email: 'k.jarra@gadaabank.com'
  },
  {
    id: 8,
    name: 'Mrs. Semira Abdela',
    position: 'Member',
    qualifications: 'BA IN MARKETING MANAGEMENT',
    experience: '13 years of work experience',
    committee: 'Audit Committee Member',
    photo: 'semira-abdela.jpg',
    linkedin: '#',
    email: 's.abdela@gadaabank.com'
  },
  {
    id: 9,
    name: 'Obbo Tilahun Tadesse Tuji',
    position: 'Member',
    qualifications: 'M.A in Business Leadership (MBL)',
    experience: 'More than 30 years of experience',
    committee: 'Credit Committee Chairperson',
    photo: 'tilahun-tadesse-tuji.jpg',
    linkedin: '#',
    email: 't.tuji@gadaabank.com'
  },
  {
    id: 10,
    name: 'Eng. Ashenafi Daba Abdi',
    position: 'Member',
    qualifications: 'MSc in Civil Engineering',
    experience: 'More than 14 years of experience',
    committee: 'Credit Committee Member',
    photo: 'ashenafi-daba-abdi.jpg',
    linkedin: '#',
    email: 'a.abdi@gadaabank.com'
  },
  {
    id: 11,
    name: 'Dr. Gutu Tesso',
    position: 'Member',
    qualifications: 'PhD in Economics',
    experience: '25 years of work experience',
    committee: 'Risk Management and Compliance Committee Chairperson',
    photo: 'gutu-tesso.jpg',
    linkedin: '#',
    email: 'g.tesso@gadaabank.com'
  }
];

export const committees = [
  {
    id: 1,
    name: 'Nomination and Remuneration Committee',
    chairperson: 'Ambassador Mulu Solomon Buzuneh',
    members: [
      'Obbo Hailu Ifa Gonda',
      'Obbo Hamdino Midesso Woya',
      'Obbo Wasihun Amenu Tiyiti'
    ],
    icon: FaUserCheck,
    description: 'Oversees board nominations and compensation policies'
  },
  {
    id: 2,
    name: 'Risk Management and Compliance Committee',
    chairperson: 'Dr. Gutu Tesso Boka',
    members: [
      'Dr. Kassim Kuffa Jarra',
      'Obbo Hamdino Midesso Woya'
    ],
    icon: FaShieldAlt,
    description: 'Monitors risk management and regulatory compliance'
  },
  {
    id: 3,
    name: 'Audit Committee',
    chairperson: 'Dr. Degefe Duressa Obo',
    members: [
      'Adde Semira Abdella Mohammed',
      'Dr. Kasim Kufa Jarra'
    ],
    icon: FaChartLine,
    description: 'Supervises internal and external audit processes'
  },
  {
    id: 4,   // <-- this was missing
    name: 'Credit Committee',
    chairperson: 'Obbo Tilahun Tadesse Tuji',
    members: [
      'Dr. Hassan Hussein Kedir',
      'Obbo Wasihun Amenu Tiyiti',
      'Eng. Ashenafi Daba Abdi'
    ],
    icon: FaFileContract,
    description: 'Reviews and approves major credit facilities'
  }
];