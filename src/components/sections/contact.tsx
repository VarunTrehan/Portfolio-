
'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const recipientEmail = 'krishnatrehantrehan60232@gmail.com';
    console.log('Contact form submitted:', data);
    console.log(`In a real application, this form data would be sent to: ${recipientEmail}`);
    
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: 'default',
    });
    reset(); // Reset form fields
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-primary">
          Get In Touch
        </h2>
        <Card className="shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-accent mb-2" />
            <CardTitle className="text-2xl font-semibold text-primary">Send Me a Message</CardTitle>
            <CardDescription className="text-muted-foreground">
              Have a question or want to work together? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register('name')}
                  className={`mt-1 ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  className={`mt-1 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  {...register('message')}
                  rows={5}
                  className={`mt-1 ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
