// src/data/investorData.js

export const prospectusList = [
  {
    id: 1,
    title: "Prospectus 2024",
    year: "2024",
    fileId: "17cSvLCghseCYBK9mbVUGPFrpHvmgESKH",
    pdfLink: "https://drive.google.com/file/d/17cSvLCghseCYBK9mbVUGPFrpHvmgESKH/view",
    embedLink: "https://drive.google.com/file/d/17cSvLCghseCYBK9mbVUGPFrpHvmgESKH/preview",
    fileSize: "2.3 MB"
  }
];

export const moaList = [
  {
    id: 1,
    title: "Memorandum of Association",
    fileId: "1RG9drnjl5dQeWg_TVuurXOAixeuaPLHf",
    pdfLink: "https://drive.google.com/file/d/1RG9drnjl5dQeWg_TVuurXOAixeuaPLHf/view",
    embedLink: "https://drive.google.com/file/d/1RG9drnjl5dQeWg_TVuurXOAixeuaPLHf/preview",
    image: "/images/moafile1.jpg",
    fileSize: "1.2 MB",
    lastUpdated: "2023"
  }
];

export const financialReportsList = [
  {
    id: 1,
    title: "Audited Financial Statement for the year ended 30 June 2025",
    year: "2025",
    fileId: "1YSxGlv-9OtXvnbo_NTHrumk66mgvW93Z",
    pdfLink: "https://drive.google.com/file/d/1YSxGlv-9OtXvnbo_NTHrumk66mgvW93Z/view",
    embedLink: "https://drive.google.com/file/d/1YSxGlv-9OtXvnbo_NTHrumk66mgvW93Z/preview",
    image: "/images/report1.jpg",
    fileSize: "3.4 MB"
  },
  {
    id: 2,
    title: "Auditor's Report on Interim Financial Statements for the period ended 31 December 2025",
    year: "2025",
    fileId: "", // placeholder – will be filled later
    pdfLink: "#",
    embedLink: "#",
    image: "/images/report1.jpg",
    fileSize: "",
    isAvailable: false
  }
];

export const shareholderEvents = [
  {
    id: 1,
    date: "2025-04-15",
    title: "4th Regular General Assembly",
    description: "Annual meeting of shareholders to approve financial statements and elect board members.",
    location: "Addis Ababa, Ethiopia",
    status: "upcoming",
    // videoLink will be used for the detail
    videoLink: "https://www.youtube.com/watch?v=PLACEHOLDER", // replace with actual later
    link: "/investors/shareholder-events/1" // optional detail page – but we'll use videoLink for now
  },
  {
    id: 2,
    date: "2024-12-10",
    title: "Extraordinary General Assembly",
    description: "Special meeting to approve capital increase and dividend distribution.",
    location: "Addis Ababa, Ethiopia",
    status: "past",
    videoLink: "https://www.youtube.com/watch?v=PLACEHOLDER",
    link: "/investors/shareholder-events/2"
  }
];

export const investorPressReleases = [
  {
    id: 1,
    date: "2024-10-01",
    title: "Gadaa Bank Listed on Ethiopian Securities Exchange",
    summary: "Historic listing marks a new era of transparency and growth.",
    fullContent: "Gadaa Bank S.C. has been officially listed on the Ethiopian Securities Exchange, becoming the first private bank to do so...",
    pdfLink: "https://drive.google.com/file/d/example2/view",
    image: null
  },
  // New press release from example
  {
    id: 2,
    date: "2026-03-31",
    title: "Resignation of Board Director Mr. Wasihun Amenu Tiyiti",
    summary: "The Board of Directors has accepted the resignation of Mr. Wasihun Amenu Tiyiti, effective immediately.",
    fullContent: "Gadaa Bank S.C. hereby announces that the Board of Directors, during its meeting on 28th of March 2026, has unanimously accepted the resignation of Mr. Wasihun Amenu Tiyiti, who has served as a Director of the Bank since the subscribers’ meeting and was serving in his second term. Mr. Wasihun Amenu Tiyiti has resigned for personal reasons, namely growing commitments in his private professional work, effective immediately, in line with the applicable provisions of the Commercial Code of Ethiopia, the NBE’s Corporate Governance Directive No. SBB/91/2024, and the disclosure requirements under the Ethiopian Capital Market Authority (ECMA) framework.",
    image: "/images/reports/wasihun-amenu.jpg",
    pdfLink: "#", // optional, not used now
    link: "#"
  }
];

export const investorContact = {
  email: "investor@gadaabank.com.et",
  phone: "+251-11-639-2500",
  address: "Kirkos Subcity, Woreda 03, H.No 745, Addis Ababa, Ethiopia",
  contactPerson: "Investor Relations Team"
};