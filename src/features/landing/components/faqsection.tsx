import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

export default function HRConsultantFAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      question:
        "Why should we choose your HR consulting services over in-house solutions?",
      answer:
        "Our specialized HR consultants bring deep expertise across multiple industries and stay current with employment law changes, compliance requirements, and best practices. We offer cost-effective solutions without the overhead of full-time HR staff, providing scalable support that grows with your business needs.",
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-blue-600" />,
      question: "What makes your HR consultants different from other firms?",
      answer:
        "We combine strategic thinking with hands-on implementation. Our consultants have proven track records in Fortune 500 companies and startups alike. We don't just advise – we partner with you to execute solutions, measure results, and continuously optimize your HR processes for maximum impact.",
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      question: "How quickly can you implement HR solutions for our company?",
      answer:
        "Our rapid deployment methodology allows us to assess your current state and begin implementation within 48 hours. For urgent compliance issues, we provide same-day consultation. Most comprehensive HR system overhauls are completed within 30-60 days, depending on company size and complexity.",
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      question: "How do you ensure compliance and minimize our legal risks?",
      answer:
        "We maintain active certifications in employment law and stay ahead of regulatory changes across all jurisdictions where you operate. Our compliance framework includes regular audits, policy updates, and proactive risk assessments. We also provide ongoing training to your management team on legal requirements.",
    },
    {
      id: 5,
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      question: "What ROI can we expect from your HR consulting services?",
      answer:
        "Our clients typically see 25-40% reduction in HR administrative costs, 60% faster hiring processes, and significantly improved employee retention rates. We provide detailed analytics and ROI tracking from day one, ensuring you can measure the tangible impact of our partnership on your business outcomes.",
    },
  ];

  const toggleQuestion = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-700 mb-4">
          Why Choose Our HR Consulting Services?
        </h2>
        <p className="text-lg text-brand-300 max-w-2xl mx-auto">
          Get answers to the most common questions about partnering with our
          expert HR consultants.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-sm border border-brand-100 overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(faq.id)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{faq.icon}</div>
                <h3 className="text-lg font-medium text-brand-700 pr-4">
                  {faq.question}
                </h3>
              </div>
              <div className="flex-shrink-0">
                {openQuestion === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-brand-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-300" />
                )}
              </div>
            </button>

            {openQuestion === faq.id && (
              <div className="px-6 pb-6">
                <div className="ml-10 pt-2">
                  <p className="text-brand-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
