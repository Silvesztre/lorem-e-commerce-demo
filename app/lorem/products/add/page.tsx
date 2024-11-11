import Form from "@/app/ui/products/add-form"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"

export default function Page() {
    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    { label: "Products", href: "/lorem/products" },
                    { label: "Add Products", href: "/lorem/products/add", active: true }
                ]}
            />
            <Form />
        </main>
    )
}