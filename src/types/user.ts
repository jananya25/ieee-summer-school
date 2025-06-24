export interface User {
  id: string;
  fullName: string;
  phone: string;
  gender: string;
  email: string;
  password: string;
  role: string;
  designation: string;
  ieeeMemberId?: string;
  isPaymentLinkSent: boolean;
  isVerified: boolean;
  institutionCompany: string;
  ieeeIdCardUrl?: string;
  isPaid: boolean;
  isPaymentVerified: boolean;
  paymentScreenshotUrl?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
} 