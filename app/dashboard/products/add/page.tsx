import Form from "@/app/ui/products/add-form"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"

export default function Page() {
    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    { label: "Products", href: "/dashboard/products" },
                    { label: "Add Products", href: "/dashboard/products/add", active: true }
                ]}
            />
            <Form />
        </main>
    )
}