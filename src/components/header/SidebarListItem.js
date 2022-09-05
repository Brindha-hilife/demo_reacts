import FenceSharpIcon from '@mui/icons-material/FenceSharp';
import GroupSharp from '@mui/icons-material/GroupSharp';
import ContactsSharp from '@mui/icons-material/ContactsSharp';
import CategorySharp from '@mui/icons-material/CategorySharp';
import CloudUploadSharp from '@mui/icons-material/CloudUploadSharp';
import CloudDownloadSharp from '@mui/icons-material/CloudDownloadSharp';
import LocalShippingSharp from '@mui/icons-material/LocalShippingSharp';
import AssessmentSharp from '@mui/icons-material/AssessmentSharp';
import SettingsSharp from '@mui/icons-material/SettingsSharp';
import DoDisturbOnSharp from '@mui/icons-material/DoDisturbOnSharp';
import HorizontalSplitSharp from '@mui/icons-material/HorizontalSplitSharp'; 
import SubdirectoryArrowRight from '@mui/icons-material/SubdirectoryArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

export const SidebarItems = [
    {
        id: 1,
        icon: <FenceSharpIcon />,
        label: 'Home',
        route: 'dashboard',
    },
    {
        id: 2,
        icon: <GroupSharp />,
        label: 'User Management',
        arrow: <ArrowDropDown />,
        name : 'user',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'User',
                route: 'user/user/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Role',
                route: 'user/role/list',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Sales Commission Agents',
                route: 'user/sales/list',
            }
        ]
    },
    {
        id: 3,
        icon: <ContactsSharp />,
        label: 'Contacts',
        arrow: <ArrowDropDown />,
        name: 'contact',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'Suppliers',
                route: 'contact/supplier/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Customers',
                route: 'contact/customer/list',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Customer Groups',
                route: 'contact/customergroup/list',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Import Contact',
                route: 'contact/customer/import',
            }
        ]
    },
    {
        id:4,
        icon: <CategorySharp/>,
        label: 'Products',
        arrow: <ArrowDropDown />,
        name: 'product',
        children:[
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'List Produts',
                route: 'product/product/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Products',
                route: 'prodduct/product/create',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Print Labels',
                route: 'product/printlabel',
            },
            {
                id: 4,
                icon: <SubdirectoryArrowRight />,
                label: 'Variation',
                route: 'product/variations/list',
            },
            {
                id: 5,
                icon: <SubdirectoryArrowRight />,
                label: 'Import Products',
                route: 'product/importproducts',
            },
            {
                id: 6,
                icon: <SubdirectoryArrowRight />,
                label: 'Import Opening Stock',
                route: 'product/importopeningstock',
            },
            {
                id: 7,
                icon: <SubdirectoryArrowRight />,
                label: 'Selling Price Group',
                route: 'product/sellinggroup/list',
            },
            {
                id: 8,
                icon: <SubdirectoryArrowRight />,
                label: 'Units',
                route: 'product/units/list',
            },
            {
                id: 9,
                icon: <SubdirectoryArrowRight />,
                label: 'categories',
                route: 'product/category/list',
            },
            {
                id: 10,
                icon: <SubdirectoryArrowRight />,
                label: 'Brand',
                route: 'product/brand/list',
            },
            {
                id: 11,
                icon: <SubdirectoryArrowRight />,
                label: 'Warrenties',
                route: 'product/warrenties/list',
            }
        ]
    },
    {
        id: 5,
        icon: <CloudUploadSharp />,
        label: 'Purchases',
        arrow: <ArrowDropDown />,
        name: 'purchase',
        children:[
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'List Purchase',
                route: 'purchase/purchase/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Purchase',
                route: 'purchase/purchase/create',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'List Purchase Return',
                route: 'purchase/purchasereturn/list',
            }
        ]
    },
    {
        id: 6,
        icon: <CloudDownloadSharp/>,
        label: 'Sell',
        arrow: <ArrowDropDown />,
        name: 'sell',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'All Sales',
                route: 'sell/sales/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Sales',
                route: 'sell/sales/create',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'List POS',
                route: 'sell/pos/list',
            },
            {
                id: 4,
                icon: <SubdirectoryArrowRight />,
                label: 'POS',
                route: 'sell/pos/create',
            },
            {
                id: 5,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Draft',
                route: 'sell/draft/create',
            },
            {
                id: 6,
                icon: <SubdirectoryArrowRight />,
                label: 'List Drafts',
                route: 'sell/draft/list',
            },
            {
                id: 7,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Quatation',
                route: 'sell/quotation/create',
            },
            {
                id: 8,
                icon: <SubdirectoryArrowRight />,
                label: 'List Quatations',
                route: 'sell/quotation/list',
            },
            {
                id: 9,
                icon: <SubdirectoryArrowRight />,
                label: 'List Sell Returns',
                route: 'sell/sellreturn/list',
            },
            {
                id: 10,
                icon: <SubdirectoryArrowRight />,
                label: 'Shipments',
                route: 'sell/shipments/list',
            },
            {
                id: 11,
                icon: <SubdirectoryArrowRight />,
                label: 'Discounts',
                route: 'sell/discount/list',
            },
            {
                id: 12,
                icon: <SubdirectoryArrowRight />,
                label: 'Subscriptions',
                route: 'sell/subscription/list',
            },
            {
                id: 13,
                icon: <SubdirectoryArrowRight />,
                label: 'Import Sales',
                route: 'sell/impotsell',
            }
        ]
    },
    {
        id: 7,
        icon: <LocalShippingSharp />,
        label: 'Stock Transfer',
        arrow: <ArrowDropDown />,
        name: 'stockTransfer',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'List Stock Transfer',
                route: 'stock/transfer/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Stock Transfer',
                route: 'stock/transfer/create',
            }
        ]
    },
    {
        id: 8,
        icon: <HorizontalSplitSharp/>,
        label: 'Stock Adjustment',
        arrow: <ArrowDropDown />,
        name: 'stockAdjustment',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'List Stock Adjustment',
                route: 'stock/adjust/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Stock Adjustment',
                route: 'stock/adjust/create',
            }
        ]
    },
    {
        id: 9,
        icon: <DoDisturbOnSharp/>,
        label: 'Expenses',
        arrow: <ArrowDropDown />,
        name: 'expenses',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'List Expenses',
                route: 'expense/expense/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Add Expenses',
                route: 'expense/expense/create',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Expenses Categories',
                route: 'expense/expensecategory/list',
            }
        ]
    },
    {
        id: 10,
        icon: <AssessmentSharp />,
        label: 'Reports',
        arrow: <ArrowDropDown />,
        name: 'report',
        children:[
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'Profit/Loss report',
                route: 'report/profitlose/list',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Product Sell Report',
                route: 'report/productsell/list',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'Service Staff Report',
                route: 'report/servicestaff/list',
            },
            {
                id: 4,
                icon: <SubdirectoryArrowRight />,
                label: 'Sales Representative Report',
                route: 'report/salesRepresentative/list',
            },
            {
                id: 5,
                icon: <SubdirectoryArrowRight />,
                label: 'Expenses Report',
                route: 'route',
            },
            {
                id: 6,
                icon: <SubdirectoryArrowRight />,
                label: 'sell Payment Report',
                route: 'route',
            },
            {
                id: 7,
                icon: <SubdirectoryArrowRight />,
                label: 'purchases Payment Report',
                route: 'route',
            },
            {
                id: 8,
                icon: <SubdirectoryArrowRight />,
                label: 'product Purchase Report',
                route: 'route',
            },
            {
                id: 9,
                icon: <SubdirectoryArrowRight />,
                label: 'item report',
                route: 'route',
            },
            {
                id: 10,
                icon: <SubdirectoryArrowRight />,
                label: 'Trending Products',
                route: 'route',
            },
            {
                id: 11,
                icon: <SubdirectoryArrowRight />,
                label: 'Stock Adjustment Report',
                route: 'route',
            },
            {
                id: 12,
                icon: <SubdirectoryArrowRight />,
                label: 'Stock Report',
                route: 'route',
            },
            {
                id: 13,
                icon: <SubdirectoryArrowRight />,
                label: 'Customer Group Report',
                route: 'route',
            },
            {
                id: 14,
                icon: <SubdirectoryArrowRight />,
                label: 'Supplier and Customer Report',
                route: 'route',
            },
            {
                id: 15,
                icon: <SubdirectoryArrowRight />,
                label: 'Tax Report',
                route: 'route',
            }
        ]
    },
    {
        id: 11,
        icon: <SettingsSharp />,
        label: 'Settings',
        arrow: <ArrowDropDown />,
        name: 'setting',
        children: [
            {
                id: 1,
                icon: <SubdirectoryArrowRight />,
                label: 'Business Settings',
                route: 'route',
            },
            {
                id: 2,
                icon: <SubdirectoryArrowRight />,
                label: 'Business Location',
                route: 'route',
            },
            {
                id: 3,
                icon: <SubdirectoryArrowRight />,
                label: 'invoice Setting',
                route: 'route',
            },
            {
                id: 4,
                icon: <SubdirectoryArrowRight />,
                label: 'Barcode Setting',
                route: 'route',
            },
            {
                id: 5,
                icon: <SubdirectoryArrowRight />,
                label: 'Tax Rates',
                route: 'route',
            },
            {
                id: 6,
                icon: <SubdirectoryArrowRight />,
                label: 'Payment Integration',
                route: 'route',
            }
        ]
    },
]

