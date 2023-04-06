import { MODULE_PATH } from "modules/paths";
import { ADMIN_PATH } from "modules/admin/paths";
import { GRIEVANCE_PATH } from "modules/grievance/paths";
import { TRAINING_PATH } from "modules/tcm/paths";
import { REPORT_PATH } from "modules/reports/paths";
import { GRAND_PATH } from "modules/grantManagement/paths";

const menuItems = [
    {
        title: "Admin",
        path: MODULE_PATH.ADMIN,
        children: [
            {
                title: "Organization Setup",
                children: [
                    {
                        title: "Districts",
                        path: ADMIN_PATH.DISTRICT_LIST
                    },
                    {
                        title: "Ward",
                        path: ADMIN_PATH.WARD.LIST
                    },
                    {
                        title: "ULB",
                        path: ADMIN_PATH.LSGI.LIST
                    },
                    {
                        title: "Legislative Assembly",
                        path: ADMIN_PATH.LEGISLATIVE.LIST
                    },
                    {
                        title: "Loksabha Constituency",
                        path: ADMIN_PATH.LOKSABHA.LIST
                    }

                ]
            },
            {
                title: "General Setup",
                children: [
                    {
                        title: "Lookup Configuration",
                        children: [
                            {
                                title: "Lookup Category",
                                path: ADMIN_PATH.LOOK_UP_CATEGORY_TYPE.LIST

                            },
                            {
                                title: "Look Up",
                                path: ADMIN_PATH.LOOK_UP_FORM.LIST
                            }
                        ]
                    }
                ]
            },
            {
                title: "Role Management",
                children: [
                    {
                        title: "roles",
                        path: ADMIN_PATH.ROLE.LIST
                    },
                    {
                        title: "Menu Management",
                        path: ADMIN_PATH.RESOURCE_MANAGEMENT.LIST
                    }
                ]
            },
            {
                title: "User Management",
                path: ADMIN_PATH.USER.LIST
            },
            {
                title: "External Organization",
                children: [
                    {
                        title: "Other Departments",
                        path: ADMIN_PATH.OTHER_DEPARTMENT.LIST
                    },
                    {
                        title: "IEA",
                        path: ADMIN_PATH.IEA.LIST
                    },
                    {
                        title: "Training Organization",
                        path: ADMIN_PATH.TRAINING_ORGANIZATION.DETAILS
                    },
                    {
                        title: "Vendors",
                        path: ADMIN_PATH.VENDOR_CONTACT.LIST
                    },
                    {
                        title: "Sho Ngo",
                        path: ADMIN_PATH.SHO_NGO.DETAILS
                    }
                ]
            },
            {
                title: "Miscellaneous",
                children: [
                    {
                        title: "Vendor Category",
                        path: ADMIN_PATH.VENDOR_CATEGORY.LIST
                    },
                    {
                        title: "Designations",
                        path: ADMIN_PATH.DESIGNATION_ENTRY.LIST
                    },
                    {
                        title: "Complaint Status",
                        path: ADMIN_PATH.COMPLAINT.STATUS
                    },
                    {
                        title: "Complaint Type",
                        path: ADMIN_PATH.COMPLAINT.TYPE
                    },
                    {
                        title: "complaint Category",
                        path: ADMIN_PATH.COMPLAINT.CATEGORY
                    }
                ]
            }
        ]
    },
    {
        title: "Grievance",
        path: MODULE_PATH.GRIEVANCE,
        children: [
            {
                title: "Complaints",
                path: GRIEVANCE_PATH.COMPLAINT.LIST
            }
        ]
    },
    {
        title: "SubProjects",
        path: MODULE_PATH.SUB_PROJECTS
        // children: [
        //     {
        //         title: "Complaints",
        //         path: GRIEVANCE_PATH.COMPLAINT.LIST
        //     }
        // ]
    },
    {
        title: "Grand Management",
        path: MODULE_PATH.GRAND_MANAGEMENT,
        children: [
            {
                title: "ULB Population",
                path: GRAND_PATH.ULB_POPULATION.LIST
            }
        ]
    },
    {
        title: "Training",
        path: MODULE_PATH.TRAINING,
        children: [
            {
                title: "Training Plan",
                path: TRAINING_PATH.PLAN.LIST
            },
            {
                title: "Training Need",
                path: TRAINING_PATH.NEED.LIST
            },
            {
                title: "Training Venue",
                path: TRAINING_PATH.VENUE.LIST
            },
            {
                title: "Training Course",
                path: TRAINING_PATH.COURSE.LIST
            },
            {
                title: "Training Batch",
                path: TRAINING_PATH.BATCH.LIST
            },
            {
                title: "Training Schedule",
                path: TRAINING_PATH.SCHEDULE.LIST
            },
            {
                title: "Training Certificate",
                path: TRAINING_PATH.CERTIFICATE.LIST
            }


        ]
    },
    {
        title: "Reports",
        path: MODULE_PATH.REPORTS,
        children: [
            {
                title: "Complaints Report",
                path: REPORT_PATH.COMPLAINT_REPORT.LIST
            }
        ]
    },
    {
        title: "Operational Monitoring",
        path: MODULE_PATH.OPERATIONAL_MODULE
        // children: [
        //     {
        //         title: "Complaints",
        //         path: GRIEVANCE_PATH.COMPLAINT.LIST
        //     }
        // ]
    }

];

export { menuItems };
