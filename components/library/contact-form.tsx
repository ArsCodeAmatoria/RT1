"use client";

import * as React from "react";

import { Button } from "@/components/library/button";
import { Input, Label, Textarea } from "@/components/library/form-controls";
import { cn } from "@/lib/utils";

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactFormProps {
  className?: string;
  submitLabel?: string;
  labels?: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };
  /** Called with validated field values. Parent owns submit side-effects. */
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
}

/**
 * Accessible contact form. No network logic — parent handles submission.
 */
function ContactForm({
  className,
  submitLabel = "Send message",
  labels = {},
  placeholders = {},
  onSubmit,
}: ContactFormProps) {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    const values: ContactFormValues = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim() || undefined,
      message: String(data.get("message") ?? "").trim(),
    };

    if (!values.name || !values.email || !values.message) {
      setError("Please complete all required fields.");
      return;
    }

    try {
      setPending(true);
      await onSubmit?.(values);
      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("grid gap-5", className)}
      aria-describedby={error ? "contact-form-error" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">{labels.name ?? "Name"}</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            placeholder={placeholders.name ?? "Your name"}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">{labels.email ?? "Email"}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={placeholders.email ?? "you@company.com"}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-company">
          {labels.company ?? "Company"}{" "}
          <span className="text-foreground-muted font-normal">(optional)</span>
        </Label>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          placeholder={placeholders.company ?? "Organization"}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">{labels.message ?? "Message"}</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          placeholder={placeholders.message ?? "How can we help?"}
        />
      </div>

      {error ? (
        <p id="contact-form-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {success ? (
        <p role="status" className="text-sm text-success">
          Message ready — thank you.
        </p>
      ) : null}

      <div>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export { ContactForm };
