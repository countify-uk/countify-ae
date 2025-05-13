'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
});


type FormValues = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you shortly to discuss your needs.",
    });
    router.push(
      `/contact?name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(
        data.email
      )}&service=${encodeURIComponent(data.service)}`
    );

    form.reset();
  };

  const services = [
    { value: "bookkeeping", label: "Bookkeeping" },
    { value: "company-formation", label: "Company Formation" },
    { value: "payroll-services", label: "Payroll Services" },
    { value: "vat-return", label: "VAT Return" },
    { value: "year-end-accounts", label: "Year-end Accounts" },
  ];

  return (
    <>
    <div className="glass-card p-6 w-full max-w-md mx-auto md:mx-0">
      <h3 className="text-2xl font-bold mb-2 text-center">
        {t('form.title', 'Request a Consultation')}
      </h3>
      <p className="text-muted-foreground mb-6 text-center">
        {t('form.subtitle', 'Learn how our sustainable solutions can help your business')}
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white text-gray-600">
                      <SelectValue className=''
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
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
              
            >
              {t('form.submit', 'Get Started')} 
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
          
          <div className="text-xs text-center text-muted-foreground mt-2">
            {t('form.disclaimer', 'By submitting this form, you agree to our')} {' '}
            <a href="/privacy-policy" className="text-secondary hover:underline">
              {t('form.privacy', 'Privacy Policy')}
            </a>
          </div>
        </form>
      </Form>
    </div>
    </>
  );
};

export default ConsultationForm;