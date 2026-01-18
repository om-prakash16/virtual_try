import { LegalLayout } from "@/components/layout/LegalLayout";

export default function RefundsPage() {
    return (
        <LegalLayout title="Refund Policy" lastUpdated="January 2026">
            <section>
                <h2>1. Design Projects</h2>
                <p>Due to the custom nature of our design work, we generally do not offer refunds once the design process has begun. However, if you are unsatisfied with the initial concept, you may request a partial refund appearing to the terms in your contract.</p>
            </section>

            <section>
                <h2>2. Cancellations</h2>
                <p>You may cancel a project at any time. You will be responsible for payment for all work completed up to the date of cancellation. Deposits are non-refundable unless verified otherwise.</p>
            </section>

            <section>
                <h2>3. AI Lab Subscriptions</h2>
                <p>For any AI tools or subscription services, you may cancel at any time, but we do not offer refunds for partial months or unused credits.</p>
            </section>

            <section>
                <h2>4. Contacting Us</h2>
                <p>If you have specific concerns about billing, please contact our support team immediately.</p>
            </section>
        </LegalLayout>
    );
}
