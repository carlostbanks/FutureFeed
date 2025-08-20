export const PlanType = {
  BASIC: 'basic',
  PRO: 'pro',
  ENTERPRISE: 'enterprise'
} as const;

export type PlanType = typeof PlanType[keyof typeof PlanType];

export const BillingPeriod = {
  MONTHLY: 'month',
  YEARLY: 'year'
} as const;

export type BillingPeriod = typeof BillingPeriod[keyof typeof BillingPeriod];

export interface Price {
  amount: number;
  currency: string;
  period: BillingPeriod;
}

export interface BillingCardProps {
  planName: PlanType;
  price: Price;
  features: string[];
  onSelectPlan: (planName: PlanType) => void;
  isPopular?: boolean;
  disabled?: boolean;
  selected?: boolean;
}