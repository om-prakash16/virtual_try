import { LegalLayout } from "@/components/layout/LegalLayout";

export default function TermsPage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="January 2026">
            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using our design services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
            </section>

            <section>
                <h2>2. Design Services</h2>
                <p>We provide professional design services as described on our website. All deliverables will be provided according to the project agreement. We reserve the right to refuse service to anyone for any reason at any time.</p>
            </section>

            <section>
                <h2>3. Intellectual Property</h2>
                <p>Upon full payment, you will own the rights to the final design deliverables. We retain the right to showcase the work in our portfolio and marketing materials unless a non-disclosure agreement (NDA) is signed.</p>
            </section>

            <section>
                <h2>4. Revisions</h2>
                <p>Standard packages include a specific number of revisions. Additional revisions may incur extra fees calculated at our standard hourly rate.</p>
            </section>
        </LegalLayout>
    );
}
