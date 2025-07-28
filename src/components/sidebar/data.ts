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
        icon: "",
        path: "/users",
      },
      {
        title: "Guarantors",
        icon: "",
        path: "/guarantors",
      },
      {
        title: "Loans",
        icon: "",
        path: "/loans",
      },
      {
        title: "Decision Models",
        icon: "",
        path: "/decision-models",
      },
      {
        title: "Loan Requests",
        icon: "",
        path: "/loan-requests",
      },
      {
        title: "Whitelist",
        icon: "",
        path: "/whitelist",
      },
      {
        title: "Karma",
        icon: "",
        path: "/karma",
      },
    ],
  },

  {
    title: "Businesses",
    items: [
      {
        title: "Organization",
        icon: "",
        path: "/organization",
      },
      {
        title: "Loan Products",
        icon: "",
        path: "/loan-products",
      },
      {
        title: "Savings Products",
        icon: "",
        path: "/savings-products",
      },
      {
        title: "Fees and Charges",
        icon: "",
        path: "/fee-and-charges",
      },
      {
        title: "Transactions",
        icon: "",
        path: "/transactions",
      },
      {
        title: "Services",
        icon: "",
        path: "/services",
      },
      {
        title: "Service Account",
        icon: "",
        path: "/service-account",
      },
      {
        title: "Settlements",
        icon: "",
        path: "/settlements",
      },
      {
        title: "Reports",
        icon: "",
        path: "/reports",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Preferences",
        icon: "",
        path: "/preferences",
      },
      {
        title: "Fees and Pricing",
        icon: "",
        path: "/fees-and-pricing",
      },
      {
        title: "Audit Logs",
        icon: "",
        path: "/audit-logs",
      },
    ],
  },
]
