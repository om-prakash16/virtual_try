import { LegalLayout } from "@/components/layout/LegalLayout";

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="January 2026">
            <section>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you fill out a contact form, request a design, or subscribe to our newsletter. This includes your name, email address, company details, and any project-specific information.</p>
            </section>

            <section>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices and support messages. We do not sell your personal data to third parties.</p>
            </section>

            <section>
                <h2>3. Data Security</h2>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access. We use industry-standard encryption for data transmission and storage.</p>
            </section>

            <section>
                <h2>4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@annudesign.com.</p>
            </section>
        </LegalLayout>
    );
}
