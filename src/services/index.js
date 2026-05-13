// Re-export all services for convenient single-import usage
// e.g.: import { newsService, vacancyService } from '@/services'

export { api, setToken, clearToken, isAuthenticated } from './api';
export { newsService } from './newsService';
export { vacancyService } from './vacancyService';
export { exchangeRateService } from './exchangeRateService';
export { branchService } from './branchService';
export { complaintService } from './complaintService';
export { reportService } from './reportService';
export { authService } from './authService';
export { managementService } from './managementService';
export { boardService } from './boardService';
export { shariaCommitteeService } from './shariaCommitteeService';
export { partnerService } from './partnerService';
export { statService } from './statService';
export { contactService } from './contactService';
export { siteContentService } from './siteContentService';
export { chatService } from './chatService';
export { findPages } from './linkResolver';
export { default as uploadService } from './uploadService';
