export interface SiteAddPayload {
  companyId: string;
  createdAt: null | string;
  createdBy: null | string;
  location: string;
  readAdmins: { id: null }[];
  simulations: { id: string }[];
  siteName: string;
  tutorials: { id: null }[];
  updatedAt: null | string;
  updatedBy: null | string;
  writeAdmins: { id: any }[];
  _id: null | string;
}

export interface SimulationItem {
  _id: string;
  simulationName: string;
}

export interface AdminItem {
  id: any;
  middlename: null | string;
  _id: string;
  firstname: string;
  lastname: string;
}

export interface TutorialItem {
  id: null | string;
}

export interface Site {
  siteName: string;
  Location: string;
  simulations: {
    name: string;
    id: string;
  }[];
  siteAdmins: AdminItem[];
}

export interface FormErrors {
  siteName: string;
  Location: string;
  simulations: string;
  siteAdmins: string;
}
