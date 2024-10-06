import AboutSection from "@/components/AboutSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import SecuritySection from "@/components/SecuritySection";
import ServicesSection from "@/components/ServicesSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
    return (
        <section className="">
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <ServicesSection />
            <SecuritySection />
            <AboutUsSection />
            <ContactUs />
        </section>
    );
}
