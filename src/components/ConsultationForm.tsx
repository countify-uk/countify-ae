'use client';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
  website?: string;
};

const ConsultationForm = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: t("form.error.name", "Name must be at least 2 characters") }),
        email: z.string().email({ message: t("form.error.email", "Invalid email address") }),
        phone: z.string().optional(),
        service: z.string().min(1, { message: t("form.error.service", "Please select a service") }),
        message: z.string().optional(),
        website: z.string().max(0).optional(),
      }),
    [t]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // GA4 conversion event — fire before redirect.
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
        currency: "AED",
        value: 1,
        service: data.service,
        form_type: "consultation",
      });
    }

    const params = new URLSearchParams({
      name: data.name,
      email: data.email,
      service: data.service,
    });

    if (data.phone) params.set("phone", data.phone);
    if (data.message) params.set("message", data.message);

    router.push(`/contact?${params.toString()}`);
    setIsSubmitting(false);
  };

  const services = [
    { value: "bookkeeping", label: "Bookkeeping" },
    { value: "company-formation", label: "Company Formation" },
    { value: "payroll-services", label: "Payroll Services" },
    { value: "vat-return", label: "VAT Return" },
    { value: "year-end-accounts", label: "Year-end Accounts" },
    { value: "rd-advisory", label: "R&D Advisory" },
    { value: "audit-preparation", label: "Audit Preparation" },
  ];

  return (
    <div className="glass-card p-6 w-full max-w-md mx-auto md:mx-0">
      <h3 className="text-2xl font-bold mb-2 text-center">
        {t('form.title', 'Request a Consultation')}
      </h3>
      <p className="text-muted-foreground mb-6 text-center">
        {t('form.subtitle', 'Learn how our sustainable solutions can help your business')}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...form.register("website")}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('form.name', 'Your Name')}
                    className="bg-background/50 text-gray-800"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('form.email', 'Email Address')}
                    className="bg-background/50 text-gray-800"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('form.phone', 'Phone Number (UAE)')}
                    className="bg-background/50 text-gray-800"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white text-gray-600">
                      <SelectValue
                        placeholder={t('form.service', 'I\'m interested in...')}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='bg-white text-gray-600'>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {t(`form.services.${service.value}`, service.label)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={t('form.message', 'Message')}
                    className="bg-background/50 text-gray-800 resize-none"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('form.submitting', 'Continuing...') : t('form.submit', 'Get Started')}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-1" />}
            </Button>
          </div>

          <div className="text-xs text-center text-muted-foreground mt-2">
            {t('form.disclaimer', 'By continuing, you agree to our')}{' '}
            <a href="/privacy-policy" className="text-secondary hover:underline">
              {t('form.privacy', 'Privacy Policy')}
            </a>
          </div>
        </form>
      </Form>

      <a
        href="https://wa.me/971585117901"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-white/80 text-sm mt-4 hover:text-[#dca958] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.325-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.13 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        {t('form.whatsapp', 'Or chat on WhatsApp')}
      </a>
    </div>
  );
};

export default ConsultationForm;
