import UserIcon from "@/assets/svgs/user-friends 1.svg"
import GuarantorIcon from "@/assets/svgs/guarantors.svg"
import LoanIcon from "@/assets/svgs/loan.svg"
import DecisionIcon from "@/assets/svgs/decision-models.svg"
import LoanRequestIcon from "@/assets/svgs/loan-request.svg"
import WhitelistIcon from "@/assets/svgs/whitelist.svg"
import KarmaIcon from "@/assets/svgs/karma.svg"
import OrganizationIcon from "@/assets/svgs/organization.svg"
import LoanProductIcon from "@/assets/svgs/loan-products.svg"
import SavingsProductIcon from "@/assets/svgs/savings-products.svg"
import FeesIcon from "@/assets/svgs/fees-and-charges.svg"
import TransactionsIcon from "@/assets/svgs/transactions.svg"
import ServicesIcon from "@/assets/svgs/services.svg"
import ServiceAccountIcon from "@/assets/svgs/service-account.svg"
import SettlementsIcon from "@/assets/svgs/settlements.svg"
import ReportsIcon from "@/assets/svgs/reports.svg"
import PreferencesIcon from "@/assets/svgs/preferences.svg"
import FeesAndPricingIcon from "@/assets/svgs/fees-and-pricing.svg"
import AuditLogsIcon from "@/assets/svgs/docs-temp-icon.svg"

interface SidebarItemProps {
  title: string
  icon?: string
  path?: string
}

interface SidebarMenuDataProps {
  title: string
  items: SidebarItemProps[]
}

export const sidebarMenuData: SidebarMenuDataProps[] = [
  {
    title: "Customers",
    items: [
      {
        title: "Users",
        icon: UserIcon,
        path: "/users",
      },
      {
        title: "Guarantors",
        icon: GuarantorIcon,
        path: "/guarantors",
      },
      {
        title: "Loans",
        icon: LoanIcon,
        path: "/loans",
      },
      {
        title: "Decision Models",
        icon: DecisionIcon,
        path: "/decision-models",
      },
      {
        title: "Loan Requests",
        icon: LoanRequestIcon,
        path: "/loan-requests",
      },
      {
        title: "Whitelist",
        icon: WhitelistIcon,
        path: "/whitelist",
      },
      {
        title: "Karma",
        icon: KarmaIcon,
        path: "/karma",
      },
    ],
  },

  {
    title: "Businesses",
    items: [
      {
        title: "Organization",
        icon: OrganizationIcon,
        path: "/organization",
      },
      {
        title: "Loan Products",
        icon: LoanProductIcon,
        path: "/loan-products",
      },
      {
        title: "Savings Products",
        icon: SavingsProductIcon,
        path: "/savings-products",
      },
      {
        title: "Fees and Charges",
        icon: FeesIcon,
        path: "/fee-and-charges",
      },
      {
        title: "Transactions",
        icon: TransactionsIcon,
        path: "/transactions",
      },
      {
        title: "Services",
        icon: ServicesIcon,
        path: "/services",
      },
      {
        title: "Service Account",
        icon: ServiceAccountIcon,
        path: "/service-account",
      },
      {
        title: "Settlements",
        icon: SettlementsIcon,
        path: "/settlements",
      },
      {
        title: "Reports",
        icon: ReportsIcon,
        path: "/reports",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Preferences",
        icon: PreferencesIcon,
        path: "/preferences",
      },
      {
        title: "Fees and Pricing",
        icon: FeesAndPricingIcon,
        path: "/fees-and-pricing",
      },
      {
        title: "Audit Logs",
        icon: AuditLogsIcon,
        path: "/audit-logs",
      },
    ],
  },
]
